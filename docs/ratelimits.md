---
id: ratelimits
title: Rate Limits
hide_title: true
hide_table_of_contents: true
sidebar_label: rate limits
---

### Rate Limits

Although the API is free, there are very lenient rate limits posed to prevent API abuse.

The current rate limit is **100 requests per second for uncached requests**. Cached requests are not subject to rate limits.

The cached status of requests are identified in the headers as `cf-cache-status`.

* HIT: cache hit (no rate limit)
* MISS: cache miss

Note that rate limit header values (`x-ratelimit-limit	100`, `x-ratelimit-remaining` and `x-ratelimit-reset`) are not valid on cached requests.