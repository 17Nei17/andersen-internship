// Создайте форму с input и двумя кнопками. Нажатие на первую кнопку блокирует возможность изменения содержимого input, а вторая - разблокирует
function blockInput() {
  const input = document.forms.form4.fname.value;
  form4.fname.outerHTML = `<input type = "text" name = "fname" value = "${input}" readonly>`;
}
function unBlockInput() {
  const input = document.forms.form4.fname.value;
  form4.fname.outerHTML = `<input type = "text" name = "fname" value = "${input}" >`;
}
