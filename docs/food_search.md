---
id: food_search
title: Food by Search
sidebar_label: "food/search"
---

### Base URL

`https://nikel.ml/api/food/search`

---

### Query

#### limit (integer)

Limit number of results. Max 100 results. Default 10.

#### skip (integer)

Skip number of results. Default 0.

#### id (string)

Filter by ID.

#### name (string)

Filter by name.

#### description (string)

Filter by description.

#### tags (string)

Filter by tags.

#### campus (string)

Filter by campus.

#### address (string)

Filter by address.

#### latitude (float)

Filter by latitude.

#### longitude (float)

Filter by longitude.

#### sunday (boolean)

Filter by open status on sunday.

#### monday (boolean)

Filter by open status on monday.

#### tuesday (boolean)

Filter by open status on tuesday.

#### wednesday (boolean)

Filter by open status on wednesday.

#### thursday (boolean)

Filter by open status on thursday.

#### friday (boolean)

Filter by open status on friday.

#### saturday (boolean)

Filter by open status on saturday.

#### attributes (string)

Filter by attributes.

---

### Sample Response

`https://nikel.ml/api/food/search?campus=st. george&sunday=true&attributes=microwave&limit=1`

```json
{
  "response": [
    {
      "id": "0309",
      "name": "Café Reznikoff",
      "description": null,
      "tags": "Reznikoff, Cafe, Muffins, Coffee, UC",
      "campus": "St. George",
      "address": "75 St. George Street, Toronto ON M5S 2E5",
      "coordinates": {
        "latitude": 43.66309,
        "longitude": -79.39773
      },
      "hours": {
        "sunday": {
          "closed": false,
          "open": 55800,
          "close": 82800
        },
        "monday": {
          "closed": false,
          "open": 27000,
          "close": 82800
        },
        "tuesday": {
          "closed": false,
          "open": 27000,
          "close": 82800
        },
        "wednesday": {
          "closed": false,
          "open": 27000,
          "close": 82800
        },
        "thursday": {
          "closed": false,
          "open": 27000,
          "close": 82800
        },
        "friday": {
          "closed": false,
          "open": 27000,
          "close": 54000
        },
        "saturday": {
          "closed": true,
          "open": null,
          "close": null
        }
      },
      "image": "http://map.utoronto.ca/_assets/_m_b/REZNIKOFF-_logoWeb.jpg",
      "url": "https://ueat.utoronto.ca/cafe-reznikoff/",
      "twitter": "@ueatoronto",
      "facebook": "https://www.facebook.com/ueatoronto",
      "attributes": [
        "Flexible Dollars Accepted",
        "Snacks, Coffee, Beverages",
        "Halal Entrees Available",
        "Lug a Mug \u0026 Save $0.25",
        "Microwave",
        "Vegan Foods",
        "Reusable Eco-Tray",
        "Vegetarian Food"
      ],
      "last_updated": "2020-06-14 12:35:21.0"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```