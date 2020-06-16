---
id: buildings_schema
title: Buildings Schema
hide_title: true
sidebar_label: schema
---

### Buildings Schema

```json
{
  "id": string,
  "code": string,
  "tags": string,
  "name": string,
  "short_name": string,
  "address": {
    "street": string,
    "city": string,
    "province": string,
    "country": string,
    "postal": string
  },
  "coordinates": {
    "latitude": float,
    "longitude": float
  },
  "last_updated": string
}
```

---

### Sample Response Item

```json
{
  "id": "131",
  "code": "NR",
  "tags": null,
  "name": "New College III",
  "short_name": "New Coll III",
  "address": {
    "street": "45  Willcocks Street",
    "city": "Toronto",
    "province": "ON",
    "country": "Canada",
    "postal": "M5S 1C7"
  },
  "coordinates": {
    "latitude": 43.66101,
    "longitude": -79.40078
  },
  "last_updated": "2020-06-15T22:03:56.308499"
}
```