// Создайте форму с input, при вводе данных, под Input они повторяются (без кнопки, событие на изменение содержимого).
const input = document.forms.form5.fname;
input.oninput = function() {
  document.getElementById('result').innerHTML = input.value;
};
