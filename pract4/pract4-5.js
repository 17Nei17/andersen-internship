/* 5. Имеется массив чисел. 
Используя встроенную функцию высшего порядка map(), 
создайте новый массив, который будет содержать удвоенные значения первого.
const arr = [2, 15, 20, 45];
// ваш код
console.log(newarr); // [2, 15, 20, 45]
*/
const arr = [2, 15, 20, 45];
const newarr = arr.map(n => {
  return 2 * n;
});
console.log(`${newarr}`);
