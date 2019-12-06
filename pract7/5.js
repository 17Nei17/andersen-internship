//5. Дано действительное b>0. Последовательность a1, a2,... образована по следующему закону
//a1=b,ai=ai-1-1/sqr(i), i=2, 3, .... Найти первые K отрицательных членов последовательности a1, a2, … (воспользуйтесь шаблоном мемоизации).
function memoize(func) {
  let cashe = {};
  return function memo(n) {
    if (cashe[n] != undefined) {
      return cashe[n];
    }
    let result = func(n);
    cashe[n] = result;
    return result;
  };
}

function order(n) {
  let result =[];
  for (i = 2; i < n; i++) {
    if (i === 1) {
      return i;
    }
    result[i] = result[i - 1] - 1 / Math.sqrt(i);
    return result[i];
  }
}
let ordered = memoize(order);
console.log(ordered(5));
