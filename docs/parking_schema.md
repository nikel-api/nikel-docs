---
id: parking_schema
title: Parking Schema
hide_title: true
sidebar_label: schema
---

### Parking Schema

```json
{
  "id": string,
  "name": string,
  "alias": string,
  "building_id": string,
  "description": string,
  "campus": string,
  "address": string,
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
  "id": "0557",
  "name": "256 McCaul St. Parking Lot",
  "alias": null,
  "building_id": "083",
  "description": "Cash Parking - After 5pm Only...",
  "campus": "St. George",
  "address": "256 McCaul Street",
  "coordinates": {
    "latitude": 43.65866,
    "longitude": -79.39365
  },
  "last_updated": "2020-06-14 20:28:38.0"
}
```