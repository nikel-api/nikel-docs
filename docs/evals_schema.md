---
id: evals_schema
title: Evals Schema
hide_title: true
sidebar_label: schema
---

### Important Notes

Fields `s1` to `s6` correspond to scores of evaluation questions on a scale from 1 to 5.

* `s1` I found the course intellectually stimulating.
* `s2` The course provided me with a deeper understanding of the subject matter.
* `s3` The instructor created a course atmosphere that was conducive to my learning.
* `s4` Course projects, assignments, tests and/or exams improved my understanding of the course material.
* `s5` Course projects, assignments, tests and/or exams provided opportunity for me to demonstrate an understanding of the course material.
* `s6` Overall, the quality of my learning experience in this course.

### Evals Schema

```json
{
  "id": string,
  "name": string,
  "campus": string,
  "terms": []{
    "term": string,
    "lectures": []{
      "lecture_code": string,
      "firstname": string,
      "lastname": string,
      "s1": float,
      "s2": float,
      "s3": float,
      "s4": float,
      "s5": float,
      "s6": float,
      "invited": integer,
      "responses": integer
    }
  }
  "last_updated": string
}
```

---

### Sample Response Item

```json
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
```