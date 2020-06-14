---
id: food
title: Food
sidebar_label: "food"
---

### Base URL

`https://nikel.ml/api/food`

---

### Query

#### limit (integer)

Limit number of results. Max 100 results. Default 10.

#### skip (integer)

Skip number of results. Default 0.

---

### Sample Response

`https://nikel.ml/api/food?limit=1`

```json
{
  "response": [
    {
      "id": "0276",
      "name": "Café AC",
      "description": null,
      "tags": "Coffee, Beverage, Muffins, Cookies, GrabNGo, AC",
      "campus": "St. George",
      "address": "55 Harbord St, Toronto, ON M5S 2W6",
      "coordinates": {
        "latitude": 43.66292,
        "longitude": -79.40131
      },
      "hours": {
        "sunday": {
          "closed": false,
          "open": 32400,
          "close": 61200
        },
        "monday": {
          "closed": false,
          "open": 25200,
          "close": 75600
        },
        "tuesday": {
          "closed": false,
          "open": 25200,
          "close": 75600
        },
        "wednesday": {
          "closed": false,
          "open": 25200,
          "close": 75600
        },
        "thursday": {
          "closed": false,
          "open": 25200,
          "close": 75600
        },
        "friday": {
          "closed": false,
          "open": 25200,
          "close": 75600
        },
        "saturday": {
          "closed": false,
          "open": 32400,
          "close": 61200
        }
      },
      "image": "http://map.utoronto.ca/_assets/_m_b/ac_cafe.jpg",
      "url": "https://ueat.utoronto.ca/ac-cafe/",
      "twitter": "@UeaToronto",
      "facebook": "https://www.facebook.com/ueatoronto",
      "attributes": [
        "Flexible Dollars Accepted",
        "Snacks, Coffee, Beverages",
        "Lug a Mug \u0026 Save $0.25",
        "Light Meals",
        "Green Bin"
      ],
      "last_updated": "2020-06-14 11:54:27.0"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```