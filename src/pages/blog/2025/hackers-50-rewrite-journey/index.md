---
title: "Hackers 5.0: A Dozen Years of Evolution"
date: "2025-09-15T10:00:00.000Z"
---

Twelve years. That's how long [Hackers](https://github.com/weiran/Hackers) has been evolving on the App Store since its initial release in 2013, and with the release of version 5.0, it's undergone its most comprehensive transformation yet—a complete architectural rewrite that represents the culmination of lessons learned across more than a decade of iOS development.

## The Long Arc of iOS Development

When I first released Hackers in 2013, it was a different era of iOS development. The app grew steadily over the years, and by 2019 with version 4.0, it had achieved something remarkable—it had become the top result when you search for "Hacker News" on the App Store, despite dozens of competing apps.

Version 4.0 was a significant milestone. It introduced account login, swipe-to-vote functionality (swipe right to upvote posts and comments, swipe left to collapse comment threads), and comprehensive iPad support. As I wrote at the time, "I put in a big effort in the past couple months to tidy up the code base ready for iOS 13." The app had found its stride through what I called "persistence since 2013"—regular updates, support for new iOS versions, making each interaction slicker with every release.

Hackers has always served a dual purpose for me. As I noted when shipping 4.0, it's both a popular app that serves the Hacker News community and "an exercise book for my own programming skills, something I use to keep my tools sharpened." Each major version has been an opportunity to explore new iOS development paradigms while maintaining the stability and user experience that made the app successful.

But even as 4.0 succeeded, the underlying architecture was showing its age. The app was still built on the foundations of 2013: Interface Builder, Storyboards, UIKit view controllers, and MVC patterns. Tidying up legacy architecture has its limits, and by 2024, it was clear that another transformation was necessary—not just for maintainability, but for survival.

## The Storyboard Problem

Anyone who has maintained a complex iOS app knows the pain of Storyboards. What starts as a convenient visual tool for laying out your app's flow quickly becomes a maintenance nightmare. Merge conflicts in Storyboard XML files. Crashes when scenes are accidentally deleted. The inability to easily reuse components. The performance hit of loading massive storyboard files.

More critically, Storyboards made it nearly impossible to keep up with the rapid pace of iOS evolution. Every year brought new screen sizes, new interaction patterns, new accessibility requirements. What should have been simple updates became archaeology expeditions through complex scene graphs.

By 2024, it was clear that another rewrite was necessary—not just for maintainability, but for survival.

## Enter SwiftUI and AI-Assisted Development

The stars aligned for Hackers 5.0 in early 2025. SwiftUI had finally matured into a production-ready framework, offering the declarative UI paradigm that iOS development had long needed. But equally important was the emergence of sophisticated AI coding assistants—particularly Claude Code and OpenAI Codex—that made a rewrite of this magnitude not just feasible, but enjoyable.

This wasn't just a migration; it was a complete architectural rethinking. The transformation from version 4.9.3 to 5.0 involved 241 commits over several months, touching every aspect of the application:

* **Complete SwiftUI Migration**: Removal of 3,357 lines of UIKit code, including the entire Main.storyboard and all associated view controllers
* **Modular Architecture**: Restructuring into 9 Swift Package Manager modules with clear separation of concerns
* **Modern Swift Concurrency**: Migration from PromiseKit to native async/await patterns
* **Clean Architecture**: Implementation of MVVM patterns with unidirectional data flow

## The AI Partnership

What made this rewrite fundamentally different was the collaboration with AI coding assistants. Rather than the solitary, methodical process of previous rewrites, this became a dynamic conversation between human intention and machine capability.

Claude Code proved invaluable for architectural planning—helping design the modular structure, suggesting migration strategies, and even generating comprehensive documentation. The AI could analyze thousands of lines of legacy code and propose systematic approaches to modernization that I might have missed.

OpenAI Codex excelled at the mechanical aspects of translation—converting UIKit patterns to SwiftUI equivalents, updating closure-based code to async/await, and generating boilerplate for the new modular structure. What would have taken weeks of tedious refactoring was accomplished in days.

The evidence of this collaboration is preserved in the git history: dozens of commits explicitly marked with "🤖 Generated with [Claude Code](https://claude.ai/code)" showing the seamless integration of AI assistance into the development workflow.

## What Changed

The numbers tell part of the story. Version 5.0 ships with:

* **245+ comprehensive tests** across all 9 modules using the new Swift Testing framework
* **Minimal external dependencies**—eliminated PromiseKit, Swinject, and SwipeCellKit, keeping only essential packages
* **Universal platform support**—optimized for iPhone, iPad, and Mac
* **Enhanced accessibility** with comprehensive VoiceOver support
* **Simplified interaction model**—upvote support with intuitive swipe gestures

But the real improvements are qualitative. The app feels native in a way that Storyboard-based apps never quite achieve. SwiftUI's declarative nature means the interface responds naturally to state changes. The modular architecture makes adding new features straightforward rather than surgical.

Most importantly, the codebase is maintainable in a way that previous versions never were. Each module has clear responsibilities, comprehensive tests, and modern Swift patterns throughout.

## Lessons for the Next Decade

This rewrite taught me several lessons that will influence how I approach iOS development going forward:

**AI-assisted development is transformative**, but not in the way I expected. It's not about AI writing code for you—it's about AI as a thinking partner, helping you see patterns, suggesting architectures, and handling the mechanical aspects of implementation so you can focus on the creative work.

**Modular architecture pays dividends**, even for single-developer projects. The discipline of clear module boundaries forces better design decisions and makes testing comprehensive rather than optional.

**Embracing platform evolution is essential**. Fighting against new iOS patterns and frameworks is a losing battle. SwiftUI isn't just a new way to build UIs—it represents Apple's vision for the future of iOS development.

**Rewrites should be systematic, not heroic**. The key to successfully rewriting a complex app is breaking it into manageable phases, maintaining test coverage throughout, and using tools (whether AI or otherwise) to handle the mechanical aspects of migration.

## Looking Forward

Hackers 5.0 represents more than just a technical upgrade—it's a foundation for the next decade of development. The modular architecture makes adding new features straightforward. The comprehensive test suite ensures stability as the app evolves. The modern Swift patterns align with the trajectory of iOS development.

But perhaps most importantly, this rewrite demonstrated that the combination of human creativity and AI capability can tackle projects that would have been prohibitively complex just a few years ago. As AI tools become more sophisticated and integrated into development workflows, the bottleneck shifts from implementation to imagination.

As I wrote when shipping 4.0, "Here's to the next six years." Well, it's been six years, and here we are again—not just with another update, but with a complete reimagining of what Hackers can be. When iOS development looks completely different again (and it will), I'm confident that the architectural decisions made for version 5.0 will provide a solid foundation for whatever comes next. And if another rewrite becomes necessary, I'll have both the lessons learned from this experience and whatever AI tools emerge to make it not just possible, but genuinely enjoyable.

*Hackers 5.0 is [available now on the App Store](https://apps.apple.com/app/hackers/id603503901). The complete source code and development history are available on [GitHub](https://github.com/weiran/Hackers).*
