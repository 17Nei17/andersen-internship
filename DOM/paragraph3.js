/* <p>В следующем HTML-коде замените содержимое элементов с классом zzz на их порядковый номер в коде.</p>
  <h2 class="zzz">Заголовок с классом zzz.</h2>
  <p class="zzz">Абзац с классом zzz.</p>
  <p class="zzz">Абзац с классом zzz.</p>
  <p>Просто абзац, не поменяется.</p> */
function paragraph3() {
  for (let i = 0; i < document.getElementsByClassName('zzz').length; i++) {
    document.getElementsByClassName('zzz')[i].innerHTML = i;
  }
}
