---
id: programs_schema
title: Programs Schema
hide_title: true
sidebar_label: schema
---

### Programs Schema

```json
{
  "id": string,
  "name": string,
  "type": string,
  "campus": string,
  "description": string?,
  "enrollment": string?,
  "completion": string,
  "last_updated": string
}
```

---

### Sample Response Item

```json
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
```