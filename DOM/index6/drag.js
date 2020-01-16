// Создайте таблицу из 2 строк и двух столбцов.
// В первую ячейку поместите картинку. Реализуйте возможность перетаскивания изображения между ячейками.

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
}
