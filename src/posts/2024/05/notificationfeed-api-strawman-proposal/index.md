---
title: "NotificationFeed API Straw Man Proposal"
date: 2024-05-25
---

The ubiquity of email has made it the default aggregator of many sources of information that it wasn't originally designed for. Email is _the_ method by which services can push information to you. But it's not ideal for carrying notifications, because there's no way for a service to tell your email client that a notification has been read and to remove it from your inbox. This is a proposal for an API to use instead. It is called NotificationFeed.

To start with, NotificationFeed is based on JSON Feed. The primary change is strictly semantic. Since the feed content is defined as notifications, **the absence of a previously present feed item shall signify that the item was read**.

The feed may contain webhooks for marking items as read.

A URI scheme such as `notificationfeed:` will exist for initiating subscriptions in client apps.

> Absence of a protocol was an original sin of RSS and podcasts. If not for the iTunes URI, I don't know if podcasts would have gotten to where they are today.
> 
> Editorialization

For discoverability, the existence of a NotificationFeed can be announced like an RSS feed with a `link` tag in a webpage or email `<head/>`

```
<link rel="alternate" href="notificationfeed:example.com/notificationfeed" type="application/json+feed+notification">
```

Or this may be done via JSON+LD Structured Data Markup.

It is assumed that authentication will be common, so a norm of using a good modern authentication method should be established.

Items may include webhooks for unsubscribing from categories of notifications.

> Is it overly restrictive to limit this notifications? Could this be seen as an extension to JSON Feed use cases where server side read state is valuable?
> 
> Editorialization
