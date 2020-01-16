// По нажатию на кнопку, заголовок h1 трансформируется в h3
let h = 3;
function Headline() {
  const Headline = document.getElementById('Headline');
  if (h === 1) {
    Headline.outerHTML = `<h${h} id = 'Headline'>По нажатию на кнопку, заголовок h1 трансформируется в h3</h${h}>`; // 1 заголовок
    h = 3;
  } else {
    Headline.outerHTML = `<h${h} id = 'Headline'>По нажатию на кнопку, заголовок h1 трансформируется в h3</h${h}>`;
    h = 1;
  }
}
