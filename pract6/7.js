/* 7. Измените функцию partial из предыдущей задачи так, чтобы она позволяла зафиксировать не только первые аргументы,
 а любые (пропущенные аргументы обозначаются с помощью undefined). Новую функцию назовите partialAny, чтобы не путать с предыдущей:

function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
var test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3 */

function test(a, b, c) {
  return 'a=' + a + ',b=' + b + ',c=' + c;
}

function partialAny(f, ...arg) {
  return function(...args) {
    arg = arg.map(function(x) {
      if (x === undefined) {
        return args.shift();
      }
      return x;
    });
    return f(...arg, ...args);
  };
}

const test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3
