// Среди трех чисел найти среднее. Если среди чисел есть равные, вывести сообщение Ошибка;.

const num1 = 20;
const num2 = 10;
const num3 = 30;
if (num1 === num2 || num1 === num3 || num2 === num1 || num2 === num3) {
  console.log('Ошибка');
} else {
  const s = (num1 + num2 + num3) / 3;
  console.log(s);
}
