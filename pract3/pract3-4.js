// Напишите функцию, которая принимает ряд чисел и возвращает их сумму,
// количество чисел на входе может быть произвольным (sum(2, 3) -> 5, sum(1, 2, 3) ->6)
function foo() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i += 1) {
    sum += arguments[i];
  }
  console.log(sum);
}
foo(0, 2, 3, 5, 10, 20);
