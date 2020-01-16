// Модифицируйте html-документ так,
// чтобы при нажатии кнопки размер текста увеличивался на 5 пунктов, а начертание становилось полужирным.
const jsstyle = document.getElementById('jsstyle');
let clk = 15;
jsstyle.onclick = function() {
  clk += 5;
  const text = document.getElementById('text');
  text.outerHTML = `<p id ='text' style="font-size: ${clk}px"><b>Измени меня</b></p>`;
  console.log(text.outerHTML);
};
