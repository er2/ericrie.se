---
title: "Expect The Unexpected"
draft: true
---

Exception handling is funny because it allows you to write code that handles errors without knowing what those errors really are. This is good for building robust systems because you can't know perfectly well what's going to happen. So it's good practice to make sure you're expecting the unexpected.

There are different levels of maturity around error handling. Green programmers have a tendency to nail the corpse upright. The next level of maturity embraces fail fast.

There's a leveling up of maturity where you realize that although many different things can go wrong, it doesn't make sense to try to handle each one individually. Fail fast and handle special cases when and if they happen.

I'm proposing a next level of maturity: don't expect to give special handling to all the different error cases. But do try to collect them in code for the purposes of documentation. Share with the team how things have been observed to fail. If for no reason other than education. Maybe those errors aren't something you can handle right now. But maybe the right person comes along and sees them and makes a connection and fixes the root cause you had thought was out of your control.

I think what I'm talking about here takes it to "fail fast responsibly". Expect unexpected errors. Make sure that your logs explicitly state that something unexpected happened. Review those and then go back and add handling for those cases so as to document the observed behavior of the code for others to learn from.

The process of good error handling involves deploying your code with a big net to see what unexpected

An inherent conflict with error handling is that you want to be explicit about what error cases can happen so they can be handled appropriately. But programmers will often handle them inappropriately, creating more trouble than the default behavior of letting an exception propagate. Furthermore, static analysis will try to make you handle error cases that you may know is not possible, but it can't figure out is not possible. So there's an art to what error cases to make explicit.
