---
id: query_guide
title: Query Guide
hide_title: true
hide_table_of_contents: true
sidebar_label: query guide
---

## Query Guide

### String Queries

Here are a few things to keep in mind:

* substrings are matched
* string queries are case insensitive

:::note Example
`csc2` matches `CSC263`.
:::

___

### Integer and Floating Point Queries

You can prepend integers and floating points with certain strings for better search functionality.

* (equal)
* `!` (not equal)
* `<` (less than)
* `<=` (less than or equal to)
* `>` (greater than) 
* `>=` (greater than or equal to)

:::note Example
`<=100` matches any value with 100 or lower.
:::