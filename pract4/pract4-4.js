/* 4. Напишите функцию высшего порядка myHiOrderFunction, которая принимает в качестве 1 аргумента другую функцию, 
например, sayName, и применяет ее ко всем остальным аргументам.
function sayName(name) {
  console.log(`Я - ${name}`);
};

function miHiOrderFunction(func, ...arg) {
    //ваш код
};

miHiOrderFunction(sayName, 'Вася'); // я - Вася
miHiOrderFunction(sayName, 'Петя', 'Маша', 'John'); // Я -Петя Я - Маша ...
miHiOrderFunction(sayName, 'Иван', 'Слава', 'Крис', 'Толя');
*/
function sayName(name) {
  console.log(`Я - ${name}`);
}

function miHiOrderFunction(func, ...arg) {
  for (let i = 1; i <= arg.length; i += 1) {
    func(arguments[i]);
  }
}
miHiOrderFunction(sayName, 'Петя', 'Маша', 'John'); // Я -Петя Я - Маша ...
