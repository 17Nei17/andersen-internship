function paragraph() {
  let paragraph = document.getElementById('paragraph');
  let arr;
  arr = paragraph.getAttribute('id') + ',  ';
  arr += paragraph.getAttribute('class') + ',  ';
  arr += paragraph.getAttribute('type');
  paragraph.innerHTML = arr;
}
