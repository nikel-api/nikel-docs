---
id: programs
title: Programs
hide_title: true
sidebar_label: "GET programs"
---

### Base URL

```
https://nikel.ml/api/programs
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

```json title="https://nikel.ml/api/programs?id=ERSPE1688"
{
  "response": [
    {
      "id": "ERSPE1688",
      "name": "Computer Science (Science)",
      "type": "specialist",
      "campus": "Mississauga",
      "description": "12.0 credits are required.",
      "enrollment": "Limited Enrolment\n    --Enrolment in this program...",
      "completion": "First Year\nCSC108H5, CSC148H5; MAT102H5...",
      "last_updated": "2020-07-22T10:18:51.910810"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```