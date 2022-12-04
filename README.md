<div>
  <h1 align="center">
    Programming Fundamentals
  </h1>
  <h4 align="center">
    JavaScript Programming Fundamentals for entry level programmers
  </h4>
</div>

## Motivation

Resolve logic intensive exercises where students are able to focus on
programming fundamentals.

## Usage

Exercises relies under the `src/` directory, every exercise must be prefixed
with the number (Ex. `03`) and its name in snake case (Ex. `03_sum_three.js`).

The `src/utils` directory contains utilities for exercises like functions to
read user input.

### Example Exercise

```javascript
// Prompt a user its name and greets the user mentioning the provided name

import { input } from '@whizzes/inputio';

const name = await input('Ingrese su nombre: ');

console.log(`Hola, ${name}!`);
```

### Considerations

- You must describe the exercise as comments on the first lines
- As we are using the `async`/`await` syntax, is recommended to wrap the logic
for your solution into an `async` function. Use `main` as the name of the
function to follow the convention for programs entry point.
- You must call `main` at the end of the file.
- Execute the exercises using `node ./src/01_greeting.js` where `01_greeting.js`
is the name of your exercise file.
