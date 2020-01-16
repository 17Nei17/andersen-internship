// Напишите функцию JavaScript, при каждом новом нажатии кнопки, изменяющую цвет фона абзаца на другой.
let i = 0;
function setBackgroundColor() {
  const colors = [
    '#FF0000',
    '#C71585',
    '#FF4500',
    '#FFA500',
    '#8A2BE2',
    '#0000CD',
    '#00FF00',
    '#C0C0C0',
  ];
  const background = document.getElementById('background');
  background.outerHTML = `<p id ='background' style="background: ${colors[i]}">Меняем цвет абзаца</p>`;
  i++;
  if (i >= 8) {
    i = 0;
  }
}
