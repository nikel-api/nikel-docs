---
id: accessibility_schema
title: Schema
sidebar_label: schema
---

### Schema

```json
{
  "id": string,
  "name": string,
  "description": string,
  "building_id": string,
  "campus": string,
  "image": string,
  "coordinates": {
    "latitude": float,
    "longitude": float
  },
  "attributes": []string,
  "last_updated": string
}
```

---

### Sample Response

```json
{
  "id": "0515",
  "name": "Main Entrance to Convocation Hall",
  "description": "3 sets of wood doors are the main public entrance\u003cbr /\u003e\n2 steps up to these manual doors\u003cbr /\u003e\n",
  "building_id": "10A",
  "campus": "St. George",
  "image": "http://map.utoronto.ca/_assets/_m_b/CH_main1.jpg",
  "coordinates": {
    "latitude": 43.66095,
    "longitude": -79.39526
  },
  "attributes": [
    "Non-powered Entrances"
  ],
  "last_updated": "2020-06-14 16:42:38.0"
}
```