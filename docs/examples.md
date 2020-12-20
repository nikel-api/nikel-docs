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

### Bash (with jq)

```shell script
curl https://nikel.ml/api/courses | jq ".response[0].name"
```

### PowerShell

```shell script
(Invoke-RestMethod 'https://nikel.ml/api/courses').response[0].name
```

### Python (with requests)

```py
import requests

if __name__ == "__main__":
    response = requests.get("https://nikel.ml/api/courses").json()
    print(response["response"][0]["name"])
```

### Javascript (with fetch)

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

### Go

```go
package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type Courses struct {
	Response []struct {
		Name string `json:"name"`
	} `json:"response"`
}

func main() {
	resp, err := http.Get("https://nikel.ml/api/courses")
	if err != nil {
		panic(err)
	}

	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	err = resp.Body.Close()
	if err != nil {
		panic(err)
	}

	var courses Courses
	err = json.Unmarshal(data, &courses)
	if err != nil {
		panic(err)
	}

	fmt.Printf(courses.Response[0].Name)
}
```