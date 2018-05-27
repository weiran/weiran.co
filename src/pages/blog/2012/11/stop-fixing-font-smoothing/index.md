---
title: Stop "fixing" font smoothing
date: "2012-11-15T08:59:29.000Z"
passthroughUrl: http://www.usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/
---

Dmitry Fadeyev on the practice of changing the default font smoothing for WebKit for no reason other than misguided aesthetics:

> Designers, having received a new property to play with, began to use the antialiasing mode everywhere on their text, even for large portions of dark text on light backgrounds. Disabling subpixel rendering made that text look different, more slender and without any hint of subpixel discoloration. Because of this, at first glance, antialiased text appears to look better than its subpixel sibling.
> 
> But upon closer inspection, antialiased text is always blurrier than subpixel rendered text. This is not a matter of opinion, it’s just how the rendering works. Subpixel rendering utilizes each of the three individual subpixels in every pixel of the screen to smooth out and sharpen the edges of the font. Antialiasing relies on whole pixels only, which effectively reduces its smoothing sharpness by three times.