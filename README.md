# react-live-clock-date-fns

## Installation

### NPM
```sh
npm install --save react react-live-clock-date-fns
```

## Usage
```js
import React  from 'react';
import Clock from 'react-live-clock-date-fns';

exports default function MyComponent() {
    return <Clock />
}
```

Outputs:

```html
<time>10:15:34</time>
```

 ** Shows current time using new Date() constructor and updates every second


### Formatting

you can use any formatting from [date-fns](https://date-fns.org/v2.23.0/docs/format) date library

### Properties

| Propertie  | Type                | Default Value | Description |
|------------|---------------------|---------------|-------------|
| `format`   | string              | 'h:mm:ss a, MMMM do yyyy'       | Formatting from [date-fns](https://date-fns.org/v2.23.0/docs/format) library.
| `interval` | integer             | 1000          | Auto-updating period for the clock. 1 second is a default value.
| `className`| string              | null          | Extra class.
| `style`| object              | null          | Extra styles.

## Development and testing

Currently is being developed and tested with the latest stable `Node 14` on `Linux`.

To run example, use`yarn start`, which will start development project

```bash
git clone https://github.com/SandunRathsara/react-live-clock-date-fns.git
cd react-live-clock-date-fns
yarn install
yarn start

# then
open http://localhost:3000
```
### License
This software is released under the MIT license. See LICENSE for more details.

### Contributors

* [SandunRathsara](https://github.com/SandunRathsara)
