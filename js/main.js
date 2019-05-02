'use strict';

const container = document.querySelector('.js__container');
const numbers = [1,2,3,4,5,6,7];

const title = '<h1>Hola :)</h1>';
let list = '<ul>';
for (const item of numbers) {
  list += `<li>${item}</li>`;
}
list += '</ul>';

container.innerHTML = `${title}${list}`;
