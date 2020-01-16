function blockInput() {
  const input = document.forms.form4.fname.value;
  form4.fname.outerHTML = `<input type = "text" name = "fname" value = "${input}" readonly>`;
}
function unBlockInput() {
  const input = document.forms.form4.fname.value;
  form4.fname.outerHTML = `<input type = "text" name = "fname" value = "${input}" >`;
}
