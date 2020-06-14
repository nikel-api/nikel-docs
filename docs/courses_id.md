---
id: courses_id
title: Courses by ID
hide_title: true
sidebar_label: "GET courses/:id"
---

### Base URL

```
https://nikel.ml/api/courses/:id
```

---

### Parameters

#### `:id` (string)

Course ID.

---

### Sample Response

```json title="https://nikel.ml/api/courses/ACMB01H3F20209"
{
  "response": {
    "id": "ACMB01H3F20209",
    "code": "ACMB01H3",
    "name": "Critical Reading, Thinking and Writing...",
    "description": "Academic study in the Department of Arts...",
    "division": "University of Toronto Scarborough",
    "department": "Dept. of Arts, Culture \u0026 Media (UTSC)",
    "prerequisites": "Any 2.0 credits",
    "corequisites": null,
    "exclusions": "ACMA01H3 (if taken before...",
    "recommended_preparation": null,
    "level": "200/B",
    "campus": "Scarborough",
    "term": "2020 Fall",
    "arts_and_science_breadth": null,
    "arts_and_science_distribution": null,
    "utm_distribution": null,
    "utsc_breadth": "Arts, Literature \u0026 Language",
    "apsc_electives": null,
    "meeting_sections": [
      {
        "code": "Lec 01",
        "instructors": [
          
        ],
        "times": [
          {
            "day": "thursday",
            "start": 32400,
            "end": 39600,
            "duration": 7200,
            "location": null
          }
        ],
        "size": 80,
        "enrollment": null,
        "waitlist_option": true,
        "delivery": "online"
      },
      {
        "code": "Lec 04",
        "instructors": [
          
        ],
        "times": [
          {
            "day": "thursday",
            "start": 54000,
            "end": 61200,
            "duration": 7200,
            "location": null
          }
        ],
        "size": 80,
        "enrollment": null,
        "waitlist_option": true,
        "delivery": "online"
      },
      {
        "code": "Lec 30",
        "instructors": [
          
        ],
        "times": [
          {
            "day": "thursday",
            "start": 61200,
            "end": 68400,
            "duration": 7200,
            "location": null
          }
        ],
        "size": 80,
        "enrollment": null,
        "waitlist_option": true,
        "delivery": "online"
      },
      {
        "code": "Lec 31",
        "instructors": [
          
        ],
        "times": [
          {
            "day": "thursday",
            "start": 68400,
            "end": 75600,
            "duration": 7200,
            "location": null
          }
        ],
        "size": 80,
        "enrollment": null,
        "waitlist_option": true,
        "delivery": "online"
      }
    ],
    "last_updated": "2020-06-12 14:15:01.0"
  },
  "status_code": 200,
  "status_message": "success"
}
```