// 1. Применяя принципы функционального программирования вывести «Hello World» n количество раз без использования циклов
// (пример f(“Hello World”, 5) выведет Hello World 5 раз.

function f(text, num) {
  return console.log(`${text}\n`.repeat(num));
}
f('Hello World', 5);
