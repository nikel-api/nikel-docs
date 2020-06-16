---
id: courses_schema
title: Courses Schema
hide_title: true
sidebar_label: schema
---

### Courses Schema

```json
{
  "id": string,
  "code": string,
  "name": string,
  "description": string,
  "division": string,
  "department": string,
  "prerequisites": string,
  "corequisites": string,
  "exclusions": string,
  "recommended_preparation": string,
  "level": string,
  "campus": string,
  "term": string,
  "arts_and_science_breadth": string,
  "arts_and_science_distribution": string,
  "utm_distribution": string,
  "utsc_breadth": string,
  "apsc_electives": string,
  "meeting_sections": [
    {
      "code": string,
      "instructors": []string,
      "times": []{
        "day": string,
        "start": integer,
        "end": integer,
        "duration": integer,
        "location": string
      },
      "size": integer,
      "enrollment": integer,
      "waitlist_option": boolean,
      "delivery": string
    },
  "last_updated": string
}
```

---

### Sample Response

```json
{
  "id": "ACMB01H3F20209",
  "code": "ACMB01H3",
  "name": "Critical Reading, Thinking and Writing for ACM Programs",
  "description": "Academic study in the Department of Arts...",
  "division": "University of Toronto Scarborough",
  "department": "Dept. of Arts, Culture \u0026 Media (UTSC)",
  "prerequisites": "Any 2.0 credits",
  "corequisites": null,
  "exclusions": "ACMA01H3 (if taken before the 2016-17 academic year)",
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
}
```