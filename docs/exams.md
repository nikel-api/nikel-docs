---
id: exams
title: Exams
hide_title: true
sidebar_label: "GET exams"
---

### Base URL

```
https://nikel.ml/api/exams
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

```json title="https://nikel.ml/api/exams?course_code=csc&limit=1"
{
  "response": [
    {
      "id": "CSC104H1F20199DEC2019",
      "course_id": "CSC104H1F20199",
      "course_code": "CSC104H1F",
      "campus": "St. George",
      "date": "2019-12-10",
      "start": 32400,
      "end": 43200,
      "duration": 10800,
      "sections": [
        {
          "lecture_code": "ALL",
          "split": "A - LE",
          "location": "EX 100"
        },
        {
          "lecture_code": "ALL",
          "split": "LI - ZZ",
          "location": "EX 200"
        }
      ],
      "last_updated": "2020-06-17T19:23:55.207542"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```