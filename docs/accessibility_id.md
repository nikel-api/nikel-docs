---
id: accessibility_id
title: Accessibility by ID
hide_title: true
sidebar_label: "GET accessibility/:id"
---

### Base URL

```
https://nikel.ml/api/accessibility/:id
```

---

### Parameters

#### `:id` (string)

Accessibility ID.

---

### Sample Response

```json title="https://nikel.ml/api/accessibility/0515"
{
  "response": {
    "id": "0515",
    "name": "Main Entrance to Convocation Hall",
    "description": "3 sets of wood doors...",
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