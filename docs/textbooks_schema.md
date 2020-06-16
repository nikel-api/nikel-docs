---
id: textbooks_schema
title: Textbooks Schema
hide_title: true
sidebar_label: schema
---

### Textbook Schema

```json
{
  "id": string,
  "isbn": string,
  "title": string,
  "edition": integer,
  "author": string,
  "image": string,
  "price": float,
  "url": string,
  "courses": [
    {
      "id": string,
      "code": string,
      "requirement": string,
      "meeting_sections": []{
        "code": string,
        "instructors": []string
      }
  ],
  "last_updated": string
}
```

---

### Sample Response Item

```json
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
```