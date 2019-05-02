'use strict';

const container = document.querySelector('.js__container');
const api = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';

fetch(api)
  .then(response => response.json())
  .then(data => {
    let list = '<ol>';
    // Creamos la lista de elementos
    for (const item of data.palettes) {
      // Creamos la lista de colores
      let colorList = '<ul>';
      for (const color of item.colors) {
        colorList += `<li>${color}</li>`;
      }
      colorList += '</ul>';

      // Creamos cada elemento con el nombre y la lista de colores
      list += `<li>${item.name}${colorList}</li>`;
    }
    list += '</ol>';

    // Pintamos el contenido en la página
    container.innerHTML = list;
  });
