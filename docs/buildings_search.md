---
id: buildings_search
title: Buildings by Search
sidebar_label: "buildings/search"
---

### Base URL

`https://nikel.ml/api/buildings/search`

---

### Query

#### limit (integer)

Limit number of results. Max 100 results. Default 10.

#### skip (integer)

Skip number of results. Default 0.

#### id (integer)

Filter by ID.

#### code (string)

Filter by code.

#### name (string)

Filter by name.

#### campus (string)

Filter by campus.

#### street_number (string)

Filter by street number.

#### street_name (string)

Filter by street name.

#### city (string)

Filter by city.

#### province (string)

Filter by province.

#### country (string)

Filter by country.

#### postal_code (string)

Filter by postal code.

---

### Sample Response

`https://nikel.ml/api/buildings/search?name=Deerfield Hall`

```json
{
  "response": [
    {
      "id": 177,
      "code": "DH",
      "name": "Deerfield Hall",
      "campus": "Mississauga",
      "address": {
        "street_number": "1535",
        "street_name": "Outer Circle",
        "city": "Mississauga",
        "province": "ON",
        "country": "Canada",
        "postal_code": null
      },
      "last_updated": "2020-06-13 21:10:37.0"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```