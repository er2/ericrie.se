---
title: "A bad convention for naming branches in git"
draft: true
---

Today I encountered a new error in git that I hadn't seen before. I was working on a feature that had gotten the issue #4019 in our bug tracker.

`Bad arguments to gitk: warning: refname 'b4019' is ambiguous`

I'm trying to encourage the use of feature branching by my team which is fairly new to git. I chose to use this feature as an example so that my colleague can checkout and build this feature and test it independently of other changes. We currently have a primitive
