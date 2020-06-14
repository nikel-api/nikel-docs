---
id: food_schema
title: Schema
sidebar_label: schema
---

### Schema

```json
{
  "id": string,
  "name": string,
  "description": string,
  "tags": string,
  "campus": string,
  "address": string,
  "coordinates": {
    "latitude": float,
    "longitude": float
  },
  "hours": {
    "sunday": {
      "closed": boolean,
      "open": integer,
      "close": integer
    },
    "monday": {
      "closed": boolean,
      "open": integer,
      "close": integer
    },
    "tuesday": {
      "closed": boolean,
      "open": integer,
      "close": integer
    },
    "wednesday": {
      "closed": boolean,
      "open": integer,
      "close": integer
    },
    "thursday": {
      "closed": boolean,
      "open": integer,
      "close": integer
    },
    "friday": {
      "closed": boolean,
      "open": integer,
      "close": integer
    },
    "saturday": {
      "closed": boolean,
      "open": integer,
      "close": integer
    }
  },
  "image": string,
  "url": string,
  "twitter": string,
  "facebook": string,
  "attributes": []string,
  "last_updated": string
}
```

---

### Sample Response

```json
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
```