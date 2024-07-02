import module1 from './module-1.mjs';
import { module1Function } from './module-1.mjs';

module1();
module1Function();

const response = await fetch('https://jsonplaceholder.typicode.com/posts');
console.warn(await response.json());
