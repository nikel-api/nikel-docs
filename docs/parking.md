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

#### `offset` (integer)

Offset number of results. Default `0`.

#### [Field Queries](query_guide)

Add any additional field queries.

---

### Sample Response

```json title="https://nikel.ml/api/parking?coordinates.latitude=>40&&coordinates.latitude=<75&limit=1"
{
  "response": [
    {
      "id": "0123",
      "name": "371 Bloor Street West",
      "alias": "Faculty of Education",
      "building_id": "014",
      "description": "Cash Parking...",
      "campus": "St. George",
      "address": "371 Bloor St W, Toronto, ON M5S 2R7, Canada",
      "coordinates": {
        "latitude": 43.66623,
        "longitude": -79.4025
      },
      "last_updated": "2020-06-15T22:01:14.545777"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```