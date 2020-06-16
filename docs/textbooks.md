---
id: textbooks
title: Textbooks
hide_title: true
sidebar_label: "GET textbooks"
---

### Base URL

```
https://nikel.ml/api/textbooks
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

```json title="https://nikel.ml/api/textbooks?author=Cei (Wiley)&edition=7&price=<70&limit=1"
{
  "response": [
    {
      "id": "14786761",
      "isbn": "1119140986",
      "title": "Hughes-Hallett 7E/ Wileyplus For Calculus",
      "edition": 7,
      "author": "Cei (Wiley)",
      "image": "http://uoftbookstore.com/cover_image.asp...",
      "price": 65,
      "url": "https://uoftbookstore.com/buy_book_detail.asp?pf_id=14786761",
      "courses": [
        {
          "id": "MAT135H1F20205",
          "code": "MAT135H1F",
          "requirement": "required",
          "meeting_sections": [
            {
              "code": "L0101",
              "instructors": [
                "E Payman"
              ]
            }
          ]
        }
      ],
      "last_updated": "2020-06-15T22:22:32.014973"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```