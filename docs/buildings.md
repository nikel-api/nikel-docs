---
id: buildings
title: Buildings
sidebar_label: "buildings"
---

### Base URL

`https://nikel.ml/api/buildings`

---

### Query

#### limit (integer)

Limit number of results. Max 100 results. Default 10.

#### skip (integer)

Skip number of results. Default 0.

---

### Sample Response

`https://nikel.ml/api/buildings?limit=1&skip=100`

```json
{
  "response": [
    {
      "id": 101,
      "code": "MS",
      "name": "Medical Sciences Building",
      "campus": "St. George",
      "address": {
        "street_number": "1",
        "street_name": "King's College Circle",
        "city": "Toronto",
        "province": "ON",
        "country": "Canada",
        "postal_code": "M5S 1A8"
      },
      "last_updated": "2020-06-13 21:10:36.0"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```