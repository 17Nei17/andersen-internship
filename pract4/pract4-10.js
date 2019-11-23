/*10. Напишите свой собственный Array.prototype.myMap(), который должен вести себя точно так же, как Array.prototype.map().
 Можно использовать цикл for или метод Array.prototype.forEach (). 
 Решение аналогично задачам 8-9. */

let s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback){
  let newArray = [];
  for (let i = 0; i<s.length; i++){
    callback(newArray.push(s[i]*2)); //значение массива*2
  }
  return newArray;
};
let new_s = s.myMap(function(item){
  return item;
});
console.log(`${new_s}`);