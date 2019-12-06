/* Определить класс Children, который содержит такие поля (члены класса): закрытые – имя ребенка, фамилию и возраст,
 публичные – методы ввода данных и отображения их на экран. Создать два объекта класса, внести данные и показать их. */

const Children = (name, surname, age) => {
  let newName = name;
  let newSurname = surname;
  let newAge = age;
  const getInfoChildren = function() {
    console.log(`${newName} ${newSurname} ${newAge}`);
  };
  const setName = function(name) {
    newName = name;
  };
  const setSurname = function(surname) {
    newSurname = surname;
  };
  const seAge = function(age) {
    newAge = age;
  };
  return { getInfoChildren, setName, setSurname, seAge };
};
const vasia = Children('Василий', 'Васильевич', 36);
const sanya = Children('Александр', 'Александрович', 22);
vasia.getInfoChildren();
sanya.getInfoChildren();
vasia.setName('Петя');
