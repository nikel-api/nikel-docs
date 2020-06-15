---
id: textbooks_search
title: Textbooks by Search
hide_title: true
sidebar_label: "GET textbooks/search"
---

### Base URL

```
https://nikel.ml/api/textbooks/search
```

---

### Query

#### `limit` (integer)

Limit number of results. Max `100` results. Default `10`.

#### `skip` (integer)

Skip number of results. Default `0`.

#### `id` (string)

Filter by ID.

#### `isbn` (string)

Filter by ISBN.

#### `title` (string)

Filter by title.

#### `edition` (integer)

Filter by edition.

#### `author` (string)

Filter by author.

#### `price` (float)

Filter by price.

#### `course_id` (string)

Filter by course ID.

#### `course_code` (string)

Filter by course code.

#### `requirement` (string)

Filter by requirement.

#### `section_code` (string)

Filter by section code.

#### `instructors` (string)

Filter by instructors.

---

### Sample Response

```json title="https://nikel.ml/api/textbooks/search?course_code=MAT135&price=<100"
{
  "response": [
    {
      "id": "14387531",
      "isbn": "1119552109",
      "title": "Hughes-Hallett Calculus 7E",
      "edition": 7,
      "author": "Cei (Wiley)",
      "image": "http://uoftbookstore.com/cover_image.asp...",
      "price": 86,
      "url": "https://uoftbookstore.com/buy_book_detail...",
      "courses": [
        {
          "id": "MAT135H1S20205",
          "code": "MAT135H1S",
          "requirement": "required",
          "meeting_sections": [
            {
              "code": "L5101",
              "instructors": [
                "M Tristan"
              ]
            }
          ]
        }
      ],
      "last_updated": "2020-06-15 09:47:28.0"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```