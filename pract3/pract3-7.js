/* Напишите две функции, reverseArray и reverseArrayInPlace.
  Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов.
  Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве,
  который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.
  console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/

function reverseArray(arrayValue) {
  const newArray = [];
  for (let i = arrayValue.length - 1; i >= 0; i -= 1) {
    newArray.push(arrayValue[i]);
  }
  return newArray;
}

function reverseArrayInPlace(arrayValue) {
  for (let i = arrayValue.length - 1; i >= 0; i -= 1) {
    arrayValue.push(arrayValue[i]);
  }
  arrayValue.splice(0, arrayValue.length / 2);
  return arrayValue;
}

console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
