/* <p>В следующем HTML-коде замените содержимое абзацев на их порядковый номер в коде.</p>
<h2>Заголовок, не поменяется.</h2>
<p>Абзац, поменяется.</p>
<p>Абзац, поменяется.</p>
<p>Абзац, поменяется.</p> */
function paragraph2() {
  for (let i = 1; i < document.getElementsByTagName('p').length; i++) {
    document.getElementsByTagName('DIV')[0].getElementsByTagName('p')[i].innerHTML = i;
  }
}
