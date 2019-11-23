/*8. Напишите свой собственный Array.prototype.myFilter (), 
который должен вести себя точно так же, как Array.prototype.filter().
 Можно использовать цикл for или метод Array.prototype.forEach ().
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  let newArray = [];
  // Добавьте свой код здесь
   
  return newArray;
};
let new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_s);
*/

let s = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback){
  let newArray = [];
  for (let i = 0; i<s.length; i++){
    if (callback(s[i])===true){
      newArray.push(s[i]);
    }
  }
  return newArray;
};

let new_s = s.myFilter(function(item){
  return item % 2 == 1;
});
console.log(`${new_s}`);