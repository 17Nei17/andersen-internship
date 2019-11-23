/*9. Добавьте в Array.prototype метод myReducer(), возвращающий новый массив, 
содержащий числа-элементы, делящиеся на 5 (решение аналогично предыдущей задаче). */

let s = [23, 65, 98, 5];
Array.prototype.myReducer = function(callback){
  let newArray = [];
  for (let i = 0; i<s.length; i++){
    if (callback(s[i])===true){
      newArray.push(s[i]);
    }
  }
  return newArray;
};

let new_s = s.myReducer(function(item){
  return item % 5 == 0;
});
console.log(`${new_s}`);