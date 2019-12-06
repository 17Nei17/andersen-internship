/* 10. Напишите свой собственный Array.prototype.myMap(), который должен вести себя точно так же, как Array.prototype.map().
 Можно использовать цикл for или метод Array.prototype.forEach (). 
 Решение аналогично задачам 8-9. */

const s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < s.length; i += 1) {
    callback(newArray.push(s[i] * 2)); // значение массива*2
  }
  return newArray;
};
const news = s.myMap(function(item) {
  return item;
});
console.log(`${news}`);
