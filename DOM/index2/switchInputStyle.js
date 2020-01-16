// Создайте форму с input и кнопкой. По нажатию на кнопку стиль содержимого input изменяется, например меняется цвет.
function switchInputStyle() {
  let i = 0;
  switchInputStyle = function() {
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
    const input1 = document.forms.form3.fname.value;
    document.forms.form3.fname.outerHTML = `<input type = "text" name = "fname" value = ${input1} style="color: ${colors[i]}" >`;
    i++;
    if (i >= 8) {
      i = 0;
    }
  };
  return switchInputStyle();
}
