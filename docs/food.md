---
id: food
title: Food
hide_title: true
sidebar_label: "GET food"
---

### Base URL

```
https://nikel.ml/api/food
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

```json title="https://nikel.ml/api/food?tags=pizza&limit=1&offset=2"
{
  "response": [
    {
      "id": "0366",
      "name": "Robarts Cafeteria",
      "description": "Located on the second...",
      "tags": "Library, pizza, pasta, sandwiches, coffee, snacks",
      "campus": "St. George",
      "address": "130 St. George St, Toronto, ON M5S 1A5",
      "coordinates": {
        "latitude": 43.66463,
        "longitude": -79.39972
      },
      "hours": {
        "sunday": {
          "closed": true,
          "open": null,
          "close": null
        },
        "monday": {
          "closed": false,
          "open": 34200,
          "close": 61200
        },
        "tuesday": {
          "closed": false,
          "open": 34200,
          "close": 61200
        },
        "wednesday": {
          "closed": false,
          "open": 34200,
          "close": 61200
        },
        "thursday": {
          "closed": false,
          "open": 34200,
          "close": 61200
        },
        "friday": {
          "closed": false,
          "open": 34200,
          "close": 57600
        },
        "saturday": {
          "closed": true,
          "open": null,
          "close": null
        }
      },
      "image": "http://map.utoronto.ca...",
      "url": "http://www.ueat.utoronto.ca",
      "twitter": "@UeaToronto",
      "facebook": "https://www.facebook.com/ueatoronto",
      "attributes": [
        "Flexible Dollars Accepted",
        "Snacks, Coffee, Beverages",
        "Halal Entrees Available",
        "Lug a Mug \u0026 Save $0.25",
        "Microwave",
        "Light Meals",
        "Vegan Foods",
        "Green Bin",
        "Reusable Eco-Tray",
        "Gluten Free",
        "Vegetarian Food"
      ],
      "last_updated": "2020-06-15T22:01:49.373846"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```