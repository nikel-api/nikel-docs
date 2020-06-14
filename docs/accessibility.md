---
id: accessibility
title: Accessibility
sidebar_label: "accessibility"
---

### Base URL

`https://nikel.ml/api/accessibility`

---

### Query

#### limit (integer)

Limit number of results. Max 100 results. Default 10.

#### skip (integer)

Skip number of results. Default 0.

---

### Sample Response

`https://nikel.ml/api/accessibility?limit=1&skip=100`

```json
{
  "response": [
    {
      "id": "0676",
      "name": "Accessible entrance to the Architecture building",
      "description": "Powered door approached by level sidewalk. There is a short ramp on the building interior inside the entrance. The door faces west and is clearly visible from Huron St.",
      "building_id": "28",
      "campus": "St. George",
      "image": "http://map.utoronto.ca/_assets/_m_b/cu2.jpg",
      "coordinates": {
        "latitude": 43.65865,
        "longitude": -79.39813
      },
      "attributes": [
        "Powered Entrances"
      ],
      "last_updated": "2020-06-14 16:42:38.0"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```