// Напишите функцию, которая в качестве параметра получает целое число и возвращает true,
// если число простое и false, если нет.

function isSimple(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isSimple(2));
