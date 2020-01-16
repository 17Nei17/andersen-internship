// Напишите функцию JavaScript, удаляющую указанный элемент из выпадающего списка формы.
function deleteElement() {
  const select = document.getElementById('select');
  const i = prompt('Номер строки?');
  select[i - 1].remove();
}
