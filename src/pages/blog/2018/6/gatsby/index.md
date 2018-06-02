---
title: "Moving from Squarespace to Gatsby"
date: "2018-06-02T11:45:00.000Z"
---

I've used Squarespace as the host for this website since 2012, and I really enjoyed trading small monthly fee for never having to worry about how any of it worked. 

However my blogging has become very sproadic, and the content of this website has become much more static -- often months of years between updates.

But if I were being honest, I was really looking for an excuse to fiddle around with something. And after taking inspiration from my friend [Eddie moving his blog to Gatsby](https://eddielee.me/hello-gatsby), I decided -- under the pretence of saving money -- to migrate my website to Gatsby as well. 

## Gatsby

[Gatsby](Gatsby) is a static site generator for React. You design and build your web site locally, including all the content in Markdown, and the build process produces a pre-built static website that can be hosted (in my case, for free on [GitHub Pages](https://pages.github.com)).

The [Gatsby Starter Blog template project](https://github.com/gatsbyjs/gatsby-starter-blog) is an excellent way to learn about Gatsby, and you may be able to tell this website is heavily based on it.

## The Migration

Gatsby content is defined by Markdown files on the filesystem. Squarespace exports your content into a [WordPress export format](https://devtidbits.com/2011/03/16/the-wordpress-extended-rss-wxr-exportimport-xml-document-format-decoded-and-explained/) file. But even if you used Markdown content blocks in Squarespace, the export will only give you content as HTML. Damn.

So how do I convert Squarespace's export into something I can use with Gatsby?

## WordPress to Gatsby Migrator

An old saying goes: "there's an NPM package for everything". In this case [Turndown](https://github.com/domchristie/turndown) for converting HTML into Markdown, is exactly what was needed. Sprinkle a few more packages to help parse the RSS format export, string them all together, and out came my new tool [wordpress-gatsby-migrater](https://github.com/weiran/wordpress-gatsby-migrater).

Modern programming 101: why reinvent the wheel when someone smarter than you has already reinveted it.

After running it, with only a few tweaks to the starter project and the new website is finished.

Was it all worth it? If I converted the number of hours I spent on this and how much Squarespace costs per month, it would probably have paid for years of Squarespace service. 

But doing this was easily way more fun, and it may even get me blogging more.