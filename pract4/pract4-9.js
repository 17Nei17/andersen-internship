/* 9. Добавьте в Array.prototype метод myReducer(), возвращающий новый массив, 
содержащий числа-элементы, делящиеся на 5 (решение аналогично предыдущей задаче). */

const s = [23, 65, 98, 5];
Array.prototype.myReducer = function(callback) {
  const newArray = [];
  for (let i = 0; i < s.length; i += 1) {
    if (callback(s[i]) === true) {
      newArray.push(s[i]);
    }
  }
  return newArray;
};

const news = s.myReducer(function(item) {
  return item % 5 === 0;
});
console.log(`${news}`);
