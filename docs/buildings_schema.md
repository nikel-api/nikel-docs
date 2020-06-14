---
id: buildings_schema
title: Schema
sidebar_label: schema
---

### Schema

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

### Sample Response

```json
{
  "id": "001",
  "code": "UC",
  "tags": "Art Centre",
  "name": "University College",
  "short_name": "UC",
  "address": {
    "street": "15  King's College Circle",
    "city": "Toronto",
    "province": "ON",
    "country": "Canada",
    "postal": "M5S 3H7"
  },
  "coordinates": {
    "latitude": 43.6632,
    "longitude": -79.39582
  },
  "last_updated": "2020-06-14 09:44:58.0"
}
```