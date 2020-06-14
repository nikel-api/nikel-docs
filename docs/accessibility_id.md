---
id: accessibility_id
title: Accessibility by ID
sidebar_label: "accessibility/:id"
---

### Base URL

`https://nikel.ml/api/accessibility/:id`

---

### Parameters

#### :id (string)

Accessibility ID.

---

### Sample Response

`https://nikel.ml/api/accessibility/0515`

```json
{
  "response": {
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
  },
  "status_code": 200,
  "status_message": "success"
}
```