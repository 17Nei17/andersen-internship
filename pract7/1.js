//1. Применяя принципы функционального программирования вывести «Hello World» n количество раз без использования циклов
// (пример f(“Hello World”, 5) выведет Hello World 5 раз.

function f(text, n) {
  console.log(text);
  if (n > 1) {
    n--;
    return f(text, n);
  }
}
f("Hello World", 5);
