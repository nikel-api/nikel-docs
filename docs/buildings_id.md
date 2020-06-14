---
id: buildings_id
title: Buildings by ID
hide_title: true
sidebar_label: "GET buildings/:id"
---

### Base URL

```
https://nikel.ml/api/buildings/:id
```

---

### Parameters

#### `:id` (string)

Building ID.

---

### Sample Response

```json title="https://nikel.ml/api/buildings/001"
{
  "response": {
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
  },
  "status_code": 200,
  "status_message": "success"
}
```