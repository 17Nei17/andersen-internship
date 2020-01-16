/* 3. Напишите функцию, которая принимает 1 параметр. 
При первом вызове, она его запоминает, при втором,-  суммирует переданный параметр с тем,
 что передали первый раз и т.д. Например:
sum(3) = 3
sum(5) = 8
sum(228)
*/

// решение:

function getSum() {
  let buff = 0;
  function buffer(x) {
    buff += x;
    return buff;
  }
  return buffer;
}
const sum = getSum();

console.log(sum(3));
console.log(sum(5));
