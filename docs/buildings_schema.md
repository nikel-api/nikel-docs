---
id: buildings_schema
title: Schema
sidebar_label: schema
---

### Schema

```json
{
  "id": integer,
  "code": string,
  "name": string,
  "campus": string,
  "address": {
    "street_number": string,
    "street_name": string,
    "city": string,
    "province": string,
    "country": string,
    "postal_code": string
  },
  "last_updated": string
}
```

---

### Sample Response

```json
{
  "id": 101,
  "code": "MS",
  "name": "Medical Sciences Building",
  "campus": "St. George",
  "address": {
    "street_number": "1",
    "street_name": "King's College Circle",
    "city": "Toronto",
    "province": "ON",
    "country": "Canada",
    "postal_code": "M5S 1A8"
  },
  "last_updated": "2020-06-13 21:10:36.0"
}
```