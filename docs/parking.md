---
id: parking
title: Parking
hide_title: true
sidebar_label: "GET parking"
---

### Base URL

```
https://nikel.ml/api/parking
```

---

### Query

#### `limit` (integer)

Limit number of results. Max `100` results. Default `10`.

#### `skip` (integer)

Skip number of results. Default `0`.

---

### Sample Response

```json title="https://nikel.ml/api/parking?limit=1&skip=10"
{
  "response": [
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
  ],
  "status_code": 200,
  "status_message": "success"
}
```