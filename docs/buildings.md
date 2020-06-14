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
      "last_updated": "2020-06-14 09:44:58.0"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```