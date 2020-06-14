---
id: accessibility_search
title: Accessibility by Search
hide_title: true
sidebar_label: "GET accessibility/search"
---

### Base URL

```
https://nikel.ml/api/accessibility/search
```

---

### Query

#### `limit` (integer)

Limit number of results. Max `100` results. Default `10`.

#### `skip` (integer)

Skip number of results. Default `0`.

#### `id` (string)

Filter by ID.

#### `name` (string)

Filter by name.

#### `description` (string)

Filter by description.

#### `building_id` (string)

Filter by building id.

#### `campus` (string)

Filter by campus.

#### `latitude` (float)

Filter by latitude.

#### `longitude` (float)

Filter by longitude.

---

### Sample Response

```json title="https://nikel.ml/api/accessibility/search?building_id=313&attributes=Powered Entrances"
{
  "response": [
    {
      "id": "1103",
      "name": "Main Entrance - William Davis Building ",
      "description": null,
      "building_id": "313",
      "campus": "Mississauga",
      "image": null,
      "coordinates": {
        "latitude": 43.54776,
        "longitude": -79.66183
      },
      "attributes": [
        "Non-powered Entrances",
        "Powered Entrances"
      ],
      "last_updated": "2020-06-14 16:42:38.0"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```