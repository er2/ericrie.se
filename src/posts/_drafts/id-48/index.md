---
title: "Refresh Plex Media Server Library from command line"
draft: true
---

> curl http://localhost:32400/library/sections/all/refresh

Where localhost is the computer you have Plex running on. wget will work in place of curl. Finding this url is not obvious since it doesn't show in the status bar when you hover over the refresh button in the web app. I found it by opening Chrome developer tools and watching the network tab for requests when I click the refresh button. You can even right click the request and copy as cURL, which will give a lot more information than you'll need.
