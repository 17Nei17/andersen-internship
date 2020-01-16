// Напишите функцию JavaScript, добавляющую строки в таблицу.
let col = 3;
function insertRow() {
  sampleTable.insertAdjacentHTML(
    'beforeend',
    `<tr><td>Столбец ${col} Ячейка 1</td> <td>Столбец ${col} Ячейка 2</td></tr>`
  );
  col++;
}
// Напишите функцию JavaScript, запрашивающую номер столбца и номер строки,
// и заменяет ее содержимое на указанное пользователем.
function changeTable() {
  let column = 0;
  let rows = 0;
  while (column > col || column < 1) {
    column = prompt('Номер столбца?');
  }
  while (rows < 1 || rows > 2) {
    rows = prompt('Номер строки?');
  }
  const inputs = sampleTable.getElementsByTagName('td');
  const i = Number(column) + Number(rows) - 1;
  console.log(inputs[i].firstChild.textContent);
  inputs[i].firstChild.textContent = prompt('На какое значение заменить ячейку?');
  console.log(inputs[i].firstChild.textContent);
}
