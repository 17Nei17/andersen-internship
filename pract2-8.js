/* В следующем программном коде создается объект автомобиль (car) со свойством масса,
а на его основе создается объект автобус bus c дополнительным свойством пассажиры (passengers), но, к сожалению, 
этим же свойством наделяется и исходный объект автомобиль (car).
Исправьте скрипт, чтобы свойство пассажиры (passengers) получал только объект bus.
Добавьте в скрипт функцию, наделяющую объект, переданный в качестве параметра, 
свойством тоннаж (tonnage) и с помощью ее  создайте объект грузовик (autoTruck) на основе объекта car.
Выведите в консоль описание всех созданных объектов со значениями их свойств.
'use strict';
function changeCar(inputObject){
    let newCar = Object.assign(inputObject, {passengers:35}); 
    return newCar;
}
let car = {massa:1};
console.log('Объект car');
console.log(car);
let bus = changeCar(car)
console.log('Объект bus');
console.log(bus);
console.log('Объект car');
console.log(car); 
*/
//первый вариант решения задачи:
'use strict';
function changeCar(inputObject){
  let newCar = JSON.parse(JSON.stringify(inputObject));
  newCar.passengers=35;
  return newCar;
}
function changeCar2(inputObject){
  let newCar = JSON.parse(JSON.stringify(inputObject));
  newCar.tonnage=6;
  return newCar;
}

let car = {massa:1};
let bus = changeCar(car);
let autoTruck = changeCar2(car);
console.log('Объект car');
console.log(car);
console.log('Объект bus');
console.log(bus);
console.log('Объект autoTruck');
console.log(autoTruck); 
console.log('Объект car');
console.log(car); 


//2 вариант решения задачи:
let car = {massa:1};
console.log('Объект car');
console.log (car);
let bus = changeCar(car);
console.log('Объект bus');
console.log (bus);
let autoTruck = changeCar2(car);
console.log('Объект autoTruck');
console.log (autoTruck);
console.log('Объект car');
console.log (car);

function changeCar(inputObject) {
  let objCopy = {}; 
  let key;
  for (key in inputObject) {
    objCopy[key] = inputObject[key]; 
  }
  objCopy.passengers=35;
  return objCopy;
}

function changeCar2(inputObject) {
  let objCopy = {}; 
  let key;
  for (key in inputObject) {
    objCopy[key] = inputObject[key]; 
  }
  objCopy.tonnage='тоннаж ';
  return objCopy;
}
