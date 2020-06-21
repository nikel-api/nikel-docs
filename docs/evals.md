---
id: evals
title: Evals
hide_title: true
sidebar_label: "GET evals"
---

### Base URL

```
https://nikel.ml/api/evals
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

```json title="https://nikel.ml/api/evals?id=mat135"
{
  "response": [
    {
      "id": "MAT135H1",
      "name": "Calculus I",
      "campus": "St. George",
      "terms": [
        {
          "term": "Fall 2016",
          "lectures": [
            {
              "lecture_code": "LEC0101",
              "firstname": "John",
              "lastname": "Doe",
              "s1": 4.4,
              "s2": 4.4,
              "s3": 4.2,
              "s4": 4.2,
              "s5": 4.2,
              "s6": 3.9,
              "invited": 150,
              "responses": 60
            }
          ]
        },
        ...
      ],
      "last_updated": "2020-06-20T23:53:58.907132"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```