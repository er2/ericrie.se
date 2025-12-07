---
title: "Straw Man Proposal: Every Regex Should Have Its Own Class"
date: 2020-09-21
---

Regular expressions are commonly written very casually on the fly based on some known examples. Regexes are densely packed with logic that is often a matter of one's personal style as much as intentional decisions about what that regex should match or not. Many choices are overlooked or made unintentionally by the platform executing the regex. Some examples include whether or not to match across lines, or whether to be greedy (if the author even knows what that means).

A regular expression is usually pure implementation (unless it has embedded comments, which I've yet to see in the wild). I have a rule of thumb that most code logic should have two parts: what and how. Any non-trivial piece of logic should be wrapped in a function or class so that the next person coming by doesn't have to execute the logic in their head to know what it's doing. They can assume that the code does what it says it does unless they have further reason to doubt it. You could say this is another way of talking about the Single Level of Abstraction Principle.

The most important reason to give every regex its own class is for unit testing. Every regex should be accompanied with a set of examples of what it's intended to match. Every regex represent bugs waiting to happen, so creating it initially with a set of unit tests prevent regressions of the original test cases and encourage accumulation of additional regressions tests.

Unit testing is a great mental hack to get around happy-path bias. I think regexes are naturally prone to happy-path bias.

Counter: Why not just a function?

Response: Not a bad point. I'm more confident in stating the proposal "Don't use a regex directly". In the programming cultures I had in mind, by which I mean those passionate about testing, static functions are frowned upon to the point that even if there's not a good reason against one in a particular case, a true class is considered better style probably for consistency's sake. In an FP codebase, I wouldn't begrudge a regex wrapped in a function.

Counter: What about a checklist for writing regexes? To make sure you've considered subtleties like greediness.

Response: That makes sense in the imaginary world where code is written once and seldom changed. In the real world where code is a living document, tests ensure continued compliance.
