---
id: exams_schema
title: Exams Schema
hide_title: true
sidebar_label: schema
---

### Exams Schema

```json
{
  "id": string,
  "course_id": string,
  "course_code": string,
  "campus": string,
  "date": string,
  "start": integer,
  "end": integer,
  "duration": integer,
  "sections": []{
      "lecture_code": string,
      "split": string,
      "location": string
  },
  "last_updated": string
}
```

---

### Sample Response Item

```json
{
  "id": "ACT230H1F20195FJUN2019",
  "course_id": "ACT230H1F20195F",
  "course_code": "ACT230H1F",
  "campus": "St. George",
  "date": "2019-06-25",
  "start": 32400,
  "end": 39600,
  "duration": 7200,
  "sections": [
    {
      "lecture_code": "ALL",
      "split": "A - Z",
      "location": "GB 303"
    }
  ],
  "last_updated": "2020-06-17T19:23:55.148558"
}
```