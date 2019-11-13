/* 
11. Используя метод call(), привяжите this в функции func к объекту obj так, чтобы вызов функции func выводил на экран значение свойства a объекта obj (исправлять в последней строке).
let phrase = {
  value: "привет"
};
function func(surname, name) {
  console.log(`${this.value}, ${surname} ${name}`);
}
func(); //тут должно вывести 'привет, Иванов Иван'
12. Переделайте решение предыдущей задачи так, чтобы место метода call() был метод apply().
*/


let phrase = {
  value: "привет"
};
function func(surname, name) {
  console.log(`${this.value}, ${surname} ${name}`);
}
func.apply(phrase,['Иванов','Иван']); //тут должно вывести 'привет, Иванов Иван'