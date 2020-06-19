---
id: services_schema
title: Services Schema
hide_title: true
sidebar_label: schema
---

### Services Schema

```json
{
  "id": string,
  "name": string,
  "alias": string,
  "building_id": string,
  "description": string,
  "campus": string,
  "address": string,
  "image": string,
  "coordinates": {
    "latitude": float,
    "longitude": float
  },
  "tags": string,
  "attributes": []string,
  "last_updated": string
}
```

---

### Sample Response Item

```json
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
```