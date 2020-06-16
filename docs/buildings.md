---
id: buildings
title: Buildings
hide_title: true
sidebar_label: "GET buildings"
---

### Base URL

```
https://nikel.ml/api/buildings
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

```json title="https://nikel.ml/api/buildings?limit=1&code==NR"
{
  "response": [
    {
      "id": "131",
      "code": "NR",
      "tags": null,
      "name": "New College III",
      "short_name": "New Coll III",
      "address": {
        "street": "45  Willcocks Street",
        "city": "Toronto",
        "province": "ON",
        "country": "Canada",
        "postal": "M5S 1C7"
      },
      "coordinates": {
        "latitude": 43.66101,
        "longitude": -79.40078
      },
      "last_updated": "2020-06-15T22:03:56.308499"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```