---
title: NSClippy for iOS
date: "2013-04-04T13:52:40.000Z"

---

What's the one thing iOS lacks? No it's not real multitasking, inter-app communication, or reliable data syncing. It's never had an animated assistant based on office stationary.

Well you're in luck:

   

### How to get Clippy in your app

Download or clone the [NSClippy repository on GitHub](https://github.com/weiran/NSClippy). Include all the files in /NSClippy (excluding the Example directory) in your project, or use [CocoaPods](http://cocoapods.org):

```
pod 'NSClippy'

```

Adding Clippy to your view:

```
NSClippy *clippy = [[NSClippy alloc] initWithAgent:@"clippy"];
[self.view addSubview:clippy];
[clippy show];

```

And to show an animation:

```
[clippy showAnimation:@"GetArtsy"];

```

For now you'll have to move him and make his speech bubble yourself. If you do give him the power of speech, please be kind and submit a pull request.

* * *

### Credits

NSClippy is an Objective-C port of smore's excellent [ClippyJS](https://www.smore.com/clippy-js). I've used all the assets from their project, including the sprites, animations, and sound.

* * *

### About the maker

Any questions? Ask me on Twitter: [@weiran](https://twitter.com/weiran)

I also make an [open source](https://github.com/weiran/hackers) Hacker News reader app for iPhone called [Hackers](http://weiranzhang.com/hackers).