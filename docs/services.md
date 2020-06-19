---
id: services
title: Services
hide_title: true
sidebar_label: "GET services"
---

### Base URL

```
https://nikel.ml/api/services
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

```json title="https://nikel.ml/api/services?name=recreation&limit=1"
{
  "response": [
    {
      "id": "1146",
      "name": "Athletics and Recreation Centre",
      "alias": "Gym",
      "building_id": "200R",
      "description": "They offer a wide range...",
      "campus": "Scarborough",
      "address": "1265 Military Trail, Toronto, ON, M1C 1A4",
      "image": null,
      "coordinates": {
        "latitude": 43.78476,
        "longitude": -79.18592
      },
      "tags": "sports, athletics, recreation...",
      "attributes": [
        "Student Life"
      ],
      "last_updated": "2020-06-19T09:21:52.011297"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```