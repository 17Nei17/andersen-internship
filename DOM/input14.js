const input = document.forms.form5.fname;
input.oninput = function() {
  document.getElementById('result').innerHTML = input.value;
};
