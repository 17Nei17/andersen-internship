/* 9. Создайте функцию filter(arr, func) , которая получает массив arr и возвращает новый, 
в который входят только те элементы arr , для которых func возвращает true.
 .. ваш код для filter
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log( filter(arr, function(a) { return a % 2 == 0 }) ); // 2,4,6
*/

var arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func) {
  const newArr = [];
  const filt = func;
  for (let i = 0; i < arr.length; i += 1) {
    if (filt(arr[i]) === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  filter(arr, function(a) {
    return a % 2 === 0;
  })
);
