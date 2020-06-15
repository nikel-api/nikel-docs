---
id: parking_search
title: Parking by Search
hide_title: true
sidebar_label: "GET parking/search"
---

### Base URL

```
https://nikel.ml/api/parking/search
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

#### `alias` (string)

Filter by alias.

#### `description` (string)

Filter by description.

#### `building_id` (string)

Filter by building ID.

#### `campus` (string)

Filter by campus.

#### `address` (string)

Filter by address.

#### `latitude` (float)

Filter by latitude.

#### `longitude` (float)

Filter by longitude.

---

### Sample Response

```json title="https://nikel.ml/api/parking/search?name=graduate house garage"
{
  "response": [
    {
      "id": "0257",
      "name": "Graduate House Garage",
      "alias": null,
      "building_id": "064",
      "description": "Cash Parking...",
      "campus": "St. George",
      "address": "17 Glen Morris St",
      "coordinates": {
        "latitude": 43.66373,
        "longitude": -79.4018
      },
      "last_updated": "2020-06-14 20:28:38.0"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```