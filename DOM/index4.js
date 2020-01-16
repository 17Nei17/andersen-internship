/* Создайте поле из белых клеток (размер примерно 30×30 пикселей). При клике на клеточку она должна менять цвет на черный. Под таблицей должны быть кнопки:
 «поменять цвета» (при нажатии все цвета клеток меняются на противоположные)
«сброс» (при нажатии все клетки становятся белыми).
Примечание:
1.    Поле можно создать с помощью таблицы <table>. Таблицу следует сгенерировать и добавить в DOM страницы используя JS.
2.    Обработчик события должен быть один на всю таблицу, а не отдельный на каждую клетку.
3.    Для изменения цвета всех клеток сразу, пометить их отдельным классом, а затем поменять класс на таблице.
4.    Предпочтительно использовать событие mousedown, срабатывающее при нажатии кнопки.
5.   Средствами CSS3 сделать таблицу невыделяемой. */

const rowsСount = 30;
const columnsСount = 30;
let i;
let j;
document.write('<table id ="table" border="3">');
for (i = 0; i < rowsСount; i++) {
  document.write(`<tr>`); // это строка
  for (j = 0; j < columnsСount; j++) {
    document.write(
      `<td id = "tr${i}td${j}">` + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '</td>' // это столбец
    );
  }
  document.write('</tr>');
}
document.write('</table>');

table.onmousedown = function() {
  const target = event.target;
  paint(target);
};

function paint(td) {
  $(td).toggleClass('black');
}

function inversion() {
  $('table td').each(function() {
    $(this).toggleClass('black');
  });
}

function whiteall() {
  $('table td').each(function() {
    this.classList.remove('black');
  });
}
