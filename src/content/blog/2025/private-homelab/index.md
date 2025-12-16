---
title: "How I Made My Private Homelab Feel Public with Tailscale and Pi-Hole"
date: "2025-10-24T10:00:00.000Z"
---

I was doing regular life-admin stuff—recipe, taxes, checking a budget—and somehow ended up clicking through yet another “new plan,” “updated terms,” and “price increase next April” banner. Nothing catastrophic. Just the slow drip of realizing I’m renting a bunch of everyday tools from companies that can change the deal whenever they feel like it.

That annoyance pushed me further into self-hosting. I want the convenience of the public web—nice URLs, works on any device, accessible from anywhere—without handing my data (and my routines) over to someone else’s servers.

What made it feel “unfinished” was access. Inside my house everything was `something.local` and `http://nas:12345`. The second I left the LAN, I’d connect to Tailscale and… those names would just stop resolving. (mDNS doesn’t cross tunnels, and Tailscale is right not to pretend it does.) I ended up keeping a Notes doc full of ports and IPs, which is a good way to never use your homelab.

The fix was to treat my private network like a tiny version of the public internet: pick a real DNS suffix, make DNS work both at home and on my tailnet, and put a reverse proxy in front so everything has a stable URL.

This is the setup I landed on: one set of friendly URLs that works on my home Wi‑Fi and on public Wi‑Fi, without exposing anything to the public internet. I can type `http://bookmarks.home.arpa` and it works the same way everywhere (direct on LAN, or via Tailscale when I’m away).

---

## One name, everywhere

The idea is simple:

- Give everything a real name.
- Have your home DNS resolve those names to your server.
- Tell Tailscale to use that same DNS when you’re away.
- Let a reverse proxy route traffic to the right app.

To you it feels “public.” To everyone else it’s invisible.

---

## Pick a DNS suffix that won’t fight you

`.local` is the trap. It belongs to mDNS, which is why it behaves inconsistently once you introduce VPNs, multiple subnets, or anything “not exactly one LAN.”

`home.arpa` is [reserved for residential home networks](https://datatracker.ietf.org/doc/html/rfc8375). It’s boring in the best way: it won’t collide with real domains, and it makes it obvious what’s internal.

On the DNS side, I already run [Pi-hole](https://pi-hole.net) for ad blocking, so I used it as the DNS server too. The important bit is making Pi-hole *authoritative* for `home.arpa`, so it answers locally instead of forwarding those queries upstream.

Two lines do the heavy lifting:

```
local=/home.arpa/
address=/home.arpa/192.168.1.100 # Your server's IP
```

`local=/…/` tells dnsmasq (Pi-hole’s resolver) that the zone is local and must not be forwarded upstream. `address=/…/IP` is a wildcard: anything under `home.arpa` maps to your server’s LAN IP.

Pi-hole v6 has one gotcha: by default it doesn’t load `/etc/dnsmasq.d`. Flip the switch in **Settings → All settings → Miscellaneous**: “Load additional dnsmasq configs from `/etc/dnsmasq.d`”.

Then make sure your router hands out the Pi-hole IP as the DNS server via DHCP, otherwise none of this matters because clients won’t ask Pi-hole in the first place.

At that point, on my home network, `http://anything.home.arpa` hits my server.

---

## Put a front door on everything

If you run multiple services on one box, you end up with a bunch of ports. That’s fine for a weekend project, and then it turns into “wait, is Paperless on 8000 or 8010?” A reverse proxy fixes that: you only ever type the hostname, and the proxy routes it to the right place.

I use a Synology NAS, and its built-in reverse proxy is basically a friendly wrapper around `nginx`. Add an entry like:

- **Source:** `app.home.arpa` on 80  
- **Destination:** `http://127.0.0.1:8000` (or wherever port your app lives)

Do the same for any other services you’re running. The proxy routes by Host header, so one IP can front as many services as you like.

---

## TLS for private names

Public certificate authorities won’t issue certificates for `home.arpa`. You have two solid options:

**Use a small private CA.**  
The quick path is `mkcert`: install its root once on your devices, then generate a wildcard cert for `*.home.arpa` and import it into Synology’s certificate store. If you prefer automation, run `step-ca` as your own ACME server and let a client auto-renew. Either way, the browser gets a padlock and you stay off the public web.

**Use a real domain you own.**  
If you have `example.com`, you can issue `*.home.example.com` via a DNS-01 challenge with Let’s Encrypt even if those names don’t resolve publicly. Keep the records split so they only exist to your LAN and your tailnet. The advantage is zero device trust fiddling; the trade-off is owning a domain and wiring the DNS-01 bit once.

I personally didn’t bother with HTTPS for now. If I’m on my LAN, I trust my LAN; if I’m away, I’m inside a Tailscale tunnel. If you want the padlock (or you’re on shared networks a lot), I’d probably go with “real domain I own” so Let’s Encrypt can handle the certs without manual device setup.

---

## Make those same names work when you’re away

This is where Tailscale makes the whole thing feel seamless. The goal is: keep using `app.home.arpa` on public Wi‑Fi without punching holes in your router.

Install Tailscale on the NAS and advertise your LAN subnet (for example, `192.168.1.0/24`). That lets tailnet devices reach anything on your LAN as if they were at home.

Then add a split-DNS rule (Tailscale calls these **restricted nameservers**): send queries for `home.arpa` to your Pi-hole IP on the LAN. MagicDNS can stay on; the restricted rule is what makes `home.arpa` behave the same everywhere.

From that point on, your laptop or phone does the same thing in both places:

1. Look up `app.home.arpa`.  
2. Get `192.168.1.100` from Pi-hole (locally, or via the tailnet).  
3. Connect over the tailnet if you’re away, directly if you’re home.  
4. Land at the reverse proxy, which forwards you to the right container.

To the browser it feels like a normal website. To the public internet, it’s a black hole.

---

## Putting it together

It took me a couple hours of fiddling (and a couple “why is DNS like this?” moments), but it boils down to:

1. Choose a private suffix like `home.arpa`.  
2. In Pi-hole v6, enable loading `/etc/dnsmasq.d`, then add:
   ```ini
   local=/home.arpa/
   address=/home.arpa/192.168.1.100 # Your server's IP
   ```
   Restart Pi-hole and make sure your router’s DHCP points clients at it.
3. Configure the reverse proxy so `bookmarks.home.arpa` routes to your bookmarker, `budget.home.arpa` to your budgeting app, and so on. I used Synology’s built-in reverse proxy.
4. Install Tailscale on the NAS, advertise the `192.168.1.0/24` route, approve it, and add a restricted nameserver mapping `home.arpa` to the Pi-hole IP. Connect your devices to your tailnet.

![Tailscale Subnet Routes Screenshot](subnet-routes.png)
![Tailscale Nameserver Screenshot](nameserver.png)

Since setting this up I’ve stopped thinking about “am I on my home Wi‑Fi?” I just open `paperless.home.arpa` (or whatever) and move on. It’s a small quality-of-life change, but it makes the whole homelab feel like a real, everyday thing instead of a hobby I only touch when I’m sitting next to the router.
