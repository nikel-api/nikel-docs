---
id: examples
title: Examples
hide_title: true
hide_table_of_contents: true
sidebar_label: examples
---

### Examples

Each of the following examples gets the first course name.

If you got any examples for other programming languages, please feel free to add them [here](https://github.com/nikel-api/nikel-docs/edit/master/docs/examples.md)!

### Python

```py
import requests

if __name__ == "__main__":
    response = requests.get("https://nikel.ml/api/courses").json()
    print(response["response"][0]["name"])
```

### Javascript

```js
const fetch = require("node-fetch");

fetch("https://nikel.ml/api/courses")
    .then(response => response.json())
    .then(data => {
        console.log(data["response"][0]["name"])
    })
    .catch(error => console.error(error));
```

### Ruby

```ruby
require 'net/http'
require 'json'

response = Net::HTTP.get(URI("https://nikel.ml/api/courses"))
puts JSON.parse(response)["response"][0]["name"]
```