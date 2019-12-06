// Найти сумму чисел от 100 до 200 кратных 17

let sum = 0;
const start = 100;
const end = 200;
for (let i = start; i <= end; i += 1) {
  if (i % 17 === 0) {
    sum += i;
  }
}
console.log(sum);
