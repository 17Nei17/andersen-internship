/*Напишите функцию partial(fn, a1, a2, ....), которая позволяет зафиксировать один или несколько аргументов функции. Пример:

function add(a, b) { return a + b; }
function mult(a, b, c, d) { return a * b * c * d; }

var add5 = partial(add, 5);
// функция add5 с 1 аргументом,
// которая прибавляет к любому числу 5

console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

var mult23 = partial(mult, 2, 3);
// зафиксированы первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6 */

function add(a, b) {
  return a + b;
}
function mult(a, b, c, d) {
  return a * b * c * d;
}

let add5 = partial(add, 5);
console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13
let mult23 = partial(mult, 2, 3);
console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6 */

/*
function partial(f) {
  return function curried(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    }
    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

*/
function partial(f, ...arg) {
  return function(...args) {
    return f.apply(this, arg.concat(args));
  };
}
