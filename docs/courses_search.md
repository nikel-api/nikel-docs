---
id: courses_search
title: Courses by Search
sidebar_label: "courses/search"
---

### Base URL

`https://nikel.ml/api/courses/search`

---

### Query

#### limit (integer)

Limit number of results. Max 100 results. Default 10.

#### skip (integer)

Skip number of results. Default 0.

#### id (string)

Filter by ID.

#### code (string)

Filter by code.

#### name (string)

Filter by name.

#### description (string)

Filter by description.

#### division (string)

Filter by division.

#### department (string)

Filter by department.

#### prerequisites (string)

Filter by prerequisites.

#### corequisites (string)

Filter by corequisites.

#### exclusions (string)

Filter by exclusions.

#### recommended_preparation (string)

Filter by recommended preparation.

#### level (string)

Filter by level.

#### campus (string)

Filter by campus.

#### term (string)

Filter by term.

#### arts_and_science_breadth (string)

Filter by arts and science breadth.

#### arts_and_science_distribution (string)

Filter by arts and science distribution.

#### utm_distribution (string)

Filter by UTM distribution.

#### utsc_breadth (string)

Filter by UTSC breadth.

#### apsc_electives (string)

Filter by APSC electives.

#### meeting_code (string)

Filter by meeting code.

#### instructor (string)

Filter by instructor.

#### day (string)

Filter by day of the week.

#### start (integer)

Filter by start time in seconds.

#### end (integer)

Filter by end time in seconds.

#### duration (integer)

Filter by duration in seconds.

#### location (string)

Filter by lecture location.

#### size (integer)

Filter by class size.

#### enrollment (integer)

Filter by enrollment size.

#### waitlist_option (boolean)

Filter by waitlist_option.

#### delivery (string)

Filter by delivery mode.

---

### Sample Response

`https://nikel.ml/api/courses/search?code=CSC2&description=Algorithms&size=>100`

```json
{
  "response": [
    {
      "id": "CSC236H1Y20205",
      "code": "CSC236H1",
      "name": "Introduction to the Theory of Computation",
      "description": "The application of logic and proof techniques to Computer Science. Mathematical induction; correctness proofs for iterative and recursive algorithms; recurrence equations and their solutions; introduction to automata and formal languages. This course assumes university-level experience with proof techniques and algorithmic complexity as provided by CSC165H1. Very strong students who already have this experience (e.g. successful completion of MAT157Y1) may consult the undergraduate office about proceeding directly into CSC236H1 or CSC240H1.",
      "division": "Faculty of Arts and Science",
      "department": "Computer Science",
      "prerequisites": "60% or higher in CSC148H1, 60% or higher in CSC165H1 (Please note: The minimum prerequisite grade in CSC148H1 and CSC165H1/CSC240H1 is lower than the minimum grade for program admission in Computer Science. If you take this course when your grade in CSC165H1/CSC240H1 is lower than the requirement for program admission, you will be unable to enrol in a Computer Science program. If you hope to enrol in a Computer Science program in future, please ensure that you satisfy the program admission grade requirements in CSC165H1/CSC240H1 before completing CSC236H1. Students will not be permitted to retake CSC165H1 after completing CSC236H1.)",
      "corequisites": null,
      "exclusions": "CSC240H1",
      "recommended_preparation": null,
      "level": "200/B",
      "campus": "St. George",
      "term": "2020 Summer Y",
      "arts_and_science_breadth": "(5) The Physical and Mathematical Universes",
      "arts_and_science_distribution": "Science",
      "utm_distribution": null,
      "utsc_breadth": null,
      "apsc_electives": null,
      "meeting_sections": [
        {
          "code": "Lec 5101",
          "instructors": [
            "B Aameri"
          ],
          "times": [
            {
              "day": "tuesday",
              "start": 64800,
              "end": 72000,
              "duration": 7200,
              "location": null
            },
            {
              "day": "tuesday",
              "start": 72000,
              "end": 75600,
              "duration": 3600,
              "location": null
            }
          ],
          "size": 127,
          "enrollment": null,
          "waitlist_option": true,
          "delivery": "online"
        }
      ],
      "last_updated": "2020-06-12 14:15:01.0"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```