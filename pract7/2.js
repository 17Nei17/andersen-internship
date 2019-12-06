/*2. Определить функцию removeEven, которая выбрасывает чётные цифры из десятичного представления целого положительного числа.
 Например, из числа 523424 должно получиться число 53. 
Тело функции не должно использовать циклы. При необходимости примените функциональную композицию. */
function toString(str) {
  let x = str.toString().split("");
  return x;
}
function maps(str) {
  str = str.filter(function(str) {
    if (str % 2 != 0) {
      return str;
    }
  });
  return str.join("");
}
const compose = (...functions) => args =>
  functions.reduceRight((arg, fn) => fn(arg), args);
let removeEven = compose(maps, toString);

console.log(removeEven(52342));
