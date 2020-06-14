---
id: courses
title: Courses
hide_title: true
sidebar_label: "GET courses"
---

### Base URL

```
https://nikel.ml/api/courses
```

---

### Query

#### `limit` (integer)

Limit number of results. Max `100` results. Default `10`.

#### `skip` (integer)

Skip number of results. Default `0`.

---

### Sample Response

```json title="https://nikel.ml/api/courses?limit=1&skip=1000"
{
  "response": [
    {
      "id": "ENGD96H3S20211",
      "code": "ENGD96H3",
      "name": "Iranian Cinema",
      "description": "This course examines the development...",
      "division": "University of Toronto Scarborough",
      "department": "English (UTSC)",
      "prerequisites": "At least one course...",
      "corequisites": null,
      "exclusions": null,
      "recommended_preparation": null,
      "level": "400/D",
      "campus": "Scarborough",
      "term": "2021 Winter",
      "arts_and_science_breadth": null,
      "arts_and_science_distribution": null,
      "utm_distribution": null,
      "utsc_breadth": "Arts, Literature \u0026 Language",
      "apsc_electives": "Complementary Studies",
      "meeting_sections": [
        {
          "code": "Lec 01",
          "instructors": [
            "S Saljoughi"
          ],
          "times": [
            {
              "day": "wednesday",
              "start": 43200,
              "end": 54000,
              "duration": 10800,
              "location": "HL B110"
            }
          ],
          "size": 22,
          "enrollment": null,
          "waitlist_option": true,
          "delivery": "in-class"
        }
      ],
      "last_updated": "2020-06-12 14:15:01.0"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```