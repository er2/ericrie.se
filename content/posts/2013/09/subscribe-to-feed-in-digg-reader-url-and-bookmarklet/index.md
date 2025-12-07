---
title: "Subscribe to feed in Digg Reader URL and bookmarklet"
date: 2013-09-28
---

An easy way to subscribe to RSS feeds in a feed reader is to use a browser extension, such as the [RSS Subscription Extension (By Google)](https://chrome.google.com/webstore/detail/rss-subscription-extensio/nlbjncdgjeocebhnmkbbbdekmmmcbfjd "RSS Subscription Extension (by Google)") to grab the embedded RSS feed from the page. To configure this or other extensions requires a URL that normally looks like

http://example.com/tinytinyrss/backend.php?op=pref-feeds&subop=add&quiet=1&feed\_url=%s

Where %s gets replaced with the feed URL to be added.

Digg Reader doesn't explicitly advertise their URL for this but when you are adding a feed, it takes you to

http://digg.com/reader/search/%s

So you can just use that when configuring the above extension at its [settings page](chrome-extension://nlbjncdgjeocebhnmkbbbdekmmmcbfjd/options.html "Chrome RSS extension configuration page").

Here's a [bookmarklet](javascript:\(function\(\){ window.open\('http://digg.com/reader/search/'+encodeURIComponent\(location.href\)\); }\)\(\); "Add to Digg Reader") if you prefer. Just drag it to your bookmark bar. You can also use it by navigating to the bookmarklet link from your address bar while on the page you want to subscribe to.

HT: [Matt Cutts](http://www.mattcutts.com/blog/javascript-bookmarklet-basics/)
