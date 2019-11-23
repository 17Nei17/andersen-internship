/*Определить класс Children, который содержит такие поля (члены класса): закрытые – имя ребенка, фамилию и возраст,
 публичные – методы ввода данных и отображения их на экран. Создать два объекта класса, внести данные и показать их. */


let Children = (name, surname, age) => {
  let newName = name;
  let newSurname = surname;
  let newAge = age;
  let getInfoChildren = function () {
    console.log (`${newName} ${newSurname} ${newAge}`);
  }
  let setName = function (name) {
    newName = name;
  }
  let setSurname= function (surname) {
    newSurname = surname;
  }
  let seAge = function (age) {
    newAge =age;
  }
  return {getInfoChildren ,setName,setSurname,seAge };
};
let vasia = Children ('Василий','Васильевич',36);

vasia.getInfoChildren();
vasia.setName('Петя');
vasia.getInfoChildren();
