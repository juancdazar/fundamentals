// Prompt a user its name and greets the user mentioning the provided name

import { input } from '@whizzes/inputio';

const name = await input('Ingrese su nombre: ');

console.log(`Hola, ${name}!`);
