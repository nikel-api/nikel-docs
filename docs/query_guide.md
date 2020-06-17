---
id: query_guide
title: Query Guide
hide_title: true
hide_table_of_contents: true
sidebar_label: query guide
---

## Query Guide

### Introduction

In each schema, you'll notice that each data response as a fixed set of fields.

Using the field names, you can craft powerful and versatile queries.

### Query Form

Each query is in the form `<field>=<value>`. The `<field>` value is determined by the JSON payload format for the respective response.

```json title="Here's an example of where you can find <field> values."
Schema
{
  <field_1>: string,
  <field_2>: {
    <field_2.1>: float,
    <field_2.2>: float
  },
}

Sample
{
  "id": "001",
  "coordinates": {
    "latitude": 50,
    "longitude": 30
  },
}
```

Example of how to query top-level fields: `id=001`

Example of how to query nested fields: `coordinates.latitude=50`

### Advanced Queries

You can also prepend the values of your search queries.

Example: `coordinates.latitude=>=50`

Futhermore, you can also add the more queries with the same field name.

Example: `name=calculus&name=III`

Here's a list of extra query operations to improve filtered search results.

| Operator | String       | Numerical                |
|----------|--------------|--------------------------|
|          | Fuzzy search | Equality                 |
| `=`      | Equality     | Equality                 |
| `!`      | Inequality   | Inequality               |
| `<`      | N/A          | Less than                |
| `<=`     | N/A          | Less than or equal to    |
| `>`      | N/A          | Greater than             |
| `>=`     | N/A          | Greater than or equal to |
| `(`      | Starts with  | N/A                      |
| `)`      | Ends with    | N/A                      |

:::note
Queries don't work in array types.
:::