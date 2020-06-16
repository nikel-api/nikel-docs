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

#### `offset` (integer)

Offset number of results. Default `0`.

#### [Field Queries](query_guide)

Add any additional field queries.

---

### Sample Response

```json title="https://nikel.ml/api/courses?name=calculus&name=iii&limit=1"
{
  "response": [
    {
      "id": "CHE221H1F20209",
      "code": "CHE221H1",
      "name": "Calculus III",
      "description": "Introduces the basic...",
      "division": "Faculty of Applied Science \u0026 Engineering",
      "department": "Chemical Engineering and Applied Chemistry",
      "prerequisites": null,
      "corequisites": null,
      "exclusions": null,
      "recommended_preparation": null,
      "level": "200/B",
      "campus": "St. George",
      "term": "2020 Fall",
      "arts_and_science_breadth": null,
      "arts_and_science_distribution": null,
      "utm_distribution": null,
      "utsc_breadth": null,
      "apsc_electives": null,
      "meeting_sections": [
        {
          "code": "Lec 0101",
          "instructors": [
            
          ],
          "times": [
            
          ],
          "size": 0,
          "enrollment": null,
          "waitlist_option": false,
          "delivery": "in-class"
        },
        {
          "code": "Tut 0101",
          "instructors": [
            
          ],
          "times": [
            
          ],
          "size": 0,
          "enrollment": null,
          "waitlist_option": false,
          "delivery": "in-class"
        }
      ],
      "last_updated": "2020-06-15T20:15:02"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```