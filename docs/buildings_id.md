---
id: buildings_id
title: Buildings by ID
sidebar_label: "buildings/:id"
---

### Base URL

`https://nikel.ml/api/buildings/:id`

---

### Parameters

#### :id (integer)

Building ID.

---

### Sample Response

`https://nikel.ml/api/building/1`

```json
{
  "response": {
    "id": 1,
    "code": "AN",
    "name": "Annesley Hall",
    "campus": "St. George",
    "address": {
      "street_number": "95",
      "street_name": "Queen's Park",
      "city": "Toronto",
      "province": "ON",
      "country": "Canada",
      "postal_code": "M5S 2C7"
    },
    "last_updated": "2020-06-13 21:10:36.0"
  },
  "status_code": 200,
  "status_message": "success"
}
```