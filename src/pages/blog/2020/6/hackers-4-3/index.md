---
title: "Hackers 4.3 - Open in Hackers"
date: "2020-06-15T12:00:00.000Z"
---

I'm excited to announce Hackers 4.3 is shipping today  and is available on the [App Store](https://apps.apple.com/gb/app/hackers-for-hacker-news/id603503901).

### Open in Hackers

One of the most requested features is the ability to open Hacker News links in the app. In 4.3 I've added a share extension which opens Hacker News links in app. You either use the share extension (app icon at the top), or the "Open in Hackers" action extension in the list below.

// Share extension image


## HackersKit

### The problem

Why does Hackers scrape the Hacker News website when an [official API](https://github.com/HackerNews/API) exists? Exists is the key word here. The API isn't designed to be used by a Hacker News client. It is so far away from what you would expect a HTTP RESTful API to be that I wonder who is the target audience is. To fetch a typical popular post with a couple hundred comments would require anywhere between 50-100 HTTP requests. No matter how efficient HTTP/2 is, requiring an app to make that many requests is a very bad idea. Even fetching list of posts only gets their raw identifiers and leaves you with the job to fetch the contents for each one.

There's also a [Hacker News API hosted by Agolia](https://hn.algolia.com/) which focuses on searching with a much more logical and functional API. Unfortunately it doesn't follow the typical structure of the Hacker News front pages and has no way to fetch lists of top posts or the comments for posts.

And then we get to the fun part which is login, voting, and posting comments. Hacker News doesn't have an API with this functionality, so the only way to implement it as a third party is to go via the website. Luckily this is all quite easy as the Hacker News uses standard web authentication and then appends a session identifier to all the URLs it generates. Another win for scraping.

The only recent Hacker News scraping library for iOS is [HNScraper](https://github.com/tsucres/HNScraper), and Hackers has used this since I moved off libHN. It has worked well for a few years but the last commit but the maintainer was a year ago, and there has been almost no activity on the repo since. It uses SAX style parsing of the HTML which leads to fast but ugly and hard to maintain code. I don'treally want to take ownership of something like that.

So I built HackersKit.

HackersKit is designed to abstract all the various ways to fetch and send data to Hacker News into a native Swift library. Compared to HNScraper, HackersKit uses CSS selectors instead of string parsing to keep the code maintainable. It's heavily influenced by the work [Robbie Trencheny](https://twitter.com/Robbie) did with his [UltraHN fork of Hackers](https://github.com/weiran/Hackers/issues/100), although I've choosen to do more scraping than he did.

With 4.3 I've split out HackersKit in the code base but I haven't separated it into its own project yet. It also doesn't yet handle authentication, voting, or replying. These are shimmed over to HNScraper. I've also not decided how to handle a hard dependency with [SwiftSoup](https://github.com/scinfu/SwiftSoup) for HTML parsing. iOS libraries typically don't have external dependencies of their own. But in this case I have no desire to implement that myself nor is there a system framework that can do the same thing. I know I can do it with a `WKWebView` but my [previous experience of spawing a lot of web views](https://weiran.co/blog/2019/7/thumbnails-ios/) is a bad one. I'm very open to any suggestions or feedback on this while I


Hackers used to use [HNScraper](https://github.com/tsucres/HNScraper) for parsing 