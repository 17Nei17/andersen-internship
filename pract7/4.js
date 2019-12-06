//4. Создайте мемоизированный вариант функции, вычисляющей факториал.
function memoize(func) {
  let cashe = {};
  return function(n) {
    if (cashe[n] !== undefined) {
      console.log("из кэша");
      return cashe[n];
    }
    let result = func(n);
    cashe[n] = result;
    console.log("посчитано");
    return result;
  };
}

function factorial(n) {
  if (n !== 1) {
    return n * factorial(n - 1);
  }
  return n;
}

let fact = memoize(factorial);
console.log(fact(5));
console.log(fact(5));
console.log(fact(6));
