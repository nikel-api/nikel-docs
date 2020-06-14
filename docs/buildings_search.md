---
id: buildings_search
title: Buildings by Search
hide_title: true
sidebar_label: "GET buildings/search"
---

### Base URL

```
https://nikel.ml/api/buildings/search
```

---

### Query

#### `limit` (integer)

Limit number of results. Max `100` results. Default `10`.

#### `skip` (integer)

Skip number of results. Default `0`.

#### `id` (string)

Filter by ID.

#### `code` (string)

Filter by code.

#### `tags` (string)

Filter by tags.

#### `name` (string)

Filter by name.

#### `short_name` (string)

Filter by short name.

#### `street` (string)

Filter by street.

#### `city` (string)

Filter by city.

#### `province` (string)

Filter by province.

#### `country` (string)

Filter by country.

#### `postal` (string)

Filter by postal.

#### `latitude` (float)

Filter by latitude.

#### `longitude` (float)

Filter by longitude.

---

### Sample Response

```json title="https://nikel.ml/api/buildings/search?name=Deerfield Hall"
{
  "response": [
    {
      "id": "340",
      "code": "DH",
      "tags": null,
      "name": "Deerfield Hall",
      "short_name": "Deerfield",
      "address": {
        "street": "1535 Outer Circle",
        "city": "Mississauga",
        "province": "ON",
        "country": "Canada",
        "postal": null
      },
      "coordinates": {
        "latitude": 43.55042,
        "longitude": -79.66629
      },
      "last_updated": "2020-06-14 09:44:59.0"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```