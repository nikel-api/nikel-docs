---
id: ratelimits
title: Rate Limits
hide_title: true
hide_table_of_contents: true
sidebar_label: rate limits
---

### Rate Limits

Although the API is free, there are very lenient rate limits posed to prevent API abuse.

The current rate limit is **20 requests per second for uncached requests**. Cached requests are not subject to rate limits.

The cached status of requests are identified in the headers as "cf-cache-status".

* HIT: cache hit (no ratelimit)
* MISS: cache miss
