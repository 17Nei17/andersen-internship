// Создайте форму с двумя input и кнопкой. По нажатию на кнопку содержимое input элементов меняется местами.
function switchInput() {
  const input1 = document.forms.form2.fname.value;
  const input2 = document.forms.form2.lname.value;
  document.forms.form2.fname.value = input2;
  document.forms.form2.lname.value = input1;
}
