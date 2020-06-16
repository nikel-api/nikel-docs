---
id: accessibility
title: Accessibility
hide_title: true
sidebar_label: "GET accessibility"
---

### Base URL

```
https://nikel.ml/api/accessibility
```

---

### Query

#### `limit` (integer)

Limit number of results. Max `100` results. Default `10`.

#### `offset` (integer)

Offset number of results. Default `0`.

#### [Field Queries](query_guide)

Add any additional field queries.

---

### Sample Response

```json title="https://nikel.ml/api/accessibility?limit=1&name=main entrance"
{
  "response": [
    {
      "id": "0515",
      "name": "Main Entrance to Convocation Hall",
      "description": "3 sets of wood doors...",
      "building_id": "10A",
      "campus": "St. George",
      "image": "http://map.utoronto.ca...",
      "coordinates": {
        "latitude": 43.66095,
        "longitude": -79.39526
      },
      "attributes": [
        "Non-powered Entrances"
      ],
      "last_updated": "2020-06-15T22:05:16.170705"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```