function paragraph2() {
  for (let i = 1; i < document.getElementsByTagName('p').length; i++) {
    document.getElementsByTagName('DIV')[0].getElementsByTagName('p')[i].innerHTML = i;
  }
}
