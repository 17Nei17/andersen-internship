// Напишите функцию, которая в качестве параметра получает целое число и возвращает true,
// если число простое и false, если нет.
let flags = true;
function getSimple(x) {
  for (let i = 2; i < x; i += 1) {
    if (x % i !== 0) {
      continue;
    } else flags = false;
  }
  console.log(`${flags}`);
}
getSimple(4);
