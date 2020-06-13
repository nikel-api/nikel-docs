---
id: courses
title: Courses
sidebar_label: "courses"
---

### Base URL

`https://nikel.ml/api/courses`

---

### Query

#### limit (integer)

Limit number of results. Max 100 results. Default 10.

#### skip (integer)

Skip number of results. Default 0.

---

### Sample Response

`https://nikel.ml/api/courses?limit=1&skip=1000`

```json
{
  "response": [
    {
      "id": "ENGD96H3S20211",
      "code": "ENGD96H3",
      "name": "Iranian Cinema",
      "description": "This course examines the development of Iranian cinema, particularly experimental and art cinema. Questions of form, and the political and social dimensions of cinema, will be considered alongside the theory of national cinemas. The course places Iranian cinema in a global context by considering it with other national cinemas.",
      "division": "University of Toronto Scarborough",
      "department": "English (UTSC)",
      "prerequisites": "At least one course (0.5 credit) at B- or C-level in film",
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