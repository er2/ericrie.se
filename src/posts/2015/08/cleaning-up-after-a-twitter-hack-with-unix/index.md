---
title: "Cleaning up after a twitter hack, with Unix"
date: 2015-08-07
---

My twitter account got hacked. I needed a way to bulk unfollow the 700 accounts I was now following. I installed the command line twitter client [`twidge`](apt:twidge) and used a little shell-fu to unfollow 20 accounts at a time

```
twidge lsfollowing | xargs -L 1 twidge unfollow
```

I then looped it automatically with the `watch` command, resulting in

```
watch -n 10 "twidge lsfollowing | xargs -L 1 twidge unfollow"
```

This unfollowed the newest accounts first, so I was able to catch it before it unfollowed the accounts I really care about.
