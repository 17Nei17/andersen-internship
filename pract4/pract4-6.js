/* 6.  Имеется массив, содержащий годы рождения нескольких людей.
 Используя встроенную функцию высшего порядка map(), создайте новый массив,
  который будет содержать их возрасты в 2019 году.
const peopleBirthDate = [2015, 1940, 1990, 1986];
// ваш код
console.log(peopleAge); // [4, 79, 29, 33]
*/

const peopleBirthDate = [2015, 1940, 1990, 1986];
const peopleAge = peopleBirthDate.map(n => {
  return 2019 - n;
});
console.log(`${peopleAge}`);
