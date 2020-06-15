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

#### `skip` (integer)

Skip number of results. Default `0`.

---

### Sample Response

```json title="https://nikel.ml/api/textbooks?limit=1"
{
  "response": [
    {
      "id": "10555538",
      "isbn": "0073014664",
      "title": "Applied Linear Regression Models 4E...",
      "edition": 4,
      "author": "Kutner  (Revised W/ Cd)",
      "image": "http://uoftbookstore.com/cover_image.asp...",
      "price": 133.3,
      "url": "https://uoftbookstore.com/buy_book_detail...",
      "courses": [
        {
          "id": "STAC67H3Y20205",
          "code": "STAC67H3Y",
          "requirement": "required",
          "meeting_sections": [
            {
              "code": "L99",
              "instructors": [
                "S Mahinda"
              ]
            }
          ]
        }
      ],
      "last_updated": "2020-06-15 09:43:51.0"
    }
  ],
  "status_code": 200,
  "status_message": "success"
}
```