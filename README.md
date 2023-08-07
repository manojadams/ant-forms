# ant-forms
Ant design forms using json based schema

## Advantages and features
- Built-in layouting
- Supports custom components
- Easily define field relationships and build advanced forms

## Install

```
npm install ant-forms
```

## Basic Usage

### 1. Define your schema ( and save it as json like schema.json)
```
"fields": [{
        "name": "first_name",
        "meta": {
            "displayType": "text",
            "displayName": "First Name"
        }
    }, {
        "name": "last_name",
        "meta": {
            "displayType": "text",
            "displayName": "Last Name"
        }
    }]
```

```
import React from 'react';
import MuiForms from 'ant-forms';

export function MyForm() {
    return (
        <MuiForms
            schema={exampleSchema}
            onSubmit={(formData) => {
              // submit data
            }}
        />
    );
}
```

## Contributions
Looking for open source contributions.

## License
MIT

## Give a ⭐️ if you liked this project!
