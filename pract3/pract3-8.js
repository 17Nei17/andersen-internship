// 8. Реализуйте предыдущие задачи используя функциональные выражения и стрелочные функции.
// 1.  Создайте функцию, принимающую на входе целое число и возвращающую количество цифр  в этом числе.
/*
 Function Expression:
let givNumeral = function(x){
  let numeral = String(x);
  console.log (`${numeral.length}`);
}
givNumeral(325443);

стрелочная функция:
 let givNumeral = (x) => {
  let numeral = String(x);
  console.log (`${numeral.length}`);
}
givNumeral(325443);
*/
// 2.     Создайте функцию, принимающую на входе целое число и возвращающую наибольшую цифру в этом числе.

// Function Expression:
/*
let givNumeral = function (val){
  let max = 0;
  let x = String(val);
  for (let i=0;i<x.length;i++){
    if (max<(+x[i])){
      max=+x[i];
    }
  }
  console.log (max);
}
givNumeral(2294802);

//стрелочная функция:
let givNumeral =  (val) =>{
  let max = 0;
  let x = String(val);
  for (let i=0;i<x.length;i++){
    if (max<(+x[i])){
      max=+x[i];
    }
  }
  console.log (max);
}
givNumeral(2294802);
*/
// 3. Напишите функцию, которая в качестве параметра получает целое число и возвращает true, если число простое и false, если нет.
// Function Expression:
/*
let getSimple = function (x){
  let flags = true;
  for(let i=2;i<x;i++){
    if (x%i!=0){ //если не делится без остатка то это просто число (возврат true)
      continue;
    }
    else flags=false;
  }
  console.log (`${flags}`);
}
getSimple(11);

//cтрелочная функция:
let getSimple = (x) =>{
  let flags = true;
  for(let i=2;i<x;i++){
    if (x%i!=0){ //если не делится без остатка то это просто число (возврат true)
      continue;
    }
    else flags=false;
  }
  console.log (`${flags}`);
}
getSimple(11);
*/

// 4. Напишите функцию, которая принимает ряд чисел и возвращает их сумму, количество чисел на входе может быть произвольным (sum(2, 3) -> 5, sum(1, 2, 3) ->6).
// Function Expression:
/*
let foo = () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum+=arguments[i];
  }
  console.log (sum);
}
foo(0,2,3,5,10,20);
//стрелочная функция: 
let foo () =>{
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum+=arguments[i];
  }
  console.log (sum);
}
foo(0,2,3,5,10,20);
*/
// 5. Напишите функцию getDivisors, которая на вход получает число и возвращает массив его делителей (чисел, на которое делится данное число).
/*
let getDivisors = function (x){
  let arr=[];
  for(let i=1;i<=x;i++){
    if (x%i!=0){
      continue;
    }
    else arr.push(i);
  }
  console.log (arr)
}
getDivisors(120);

let getDivisors = (x) =>{
  let arr=[];
  for(let i=1;i<=x;i++){
    if (x%i!=0){
      continue;
    }
    else arr.push(i);
  }
  console.log (arr)
}
getDivisors(120);
*/
// 6. Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит все числа из него, включая начальное и конечное.Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает 55 для range(1, 10).В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].
// console.log(sum(range(1, 10)));
// → 55
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

/* let sum = function (x){
  let arrSum = 0;
  for (let i=0;i<=x.length;i++){
    arrSum+=i;
  }
  return arrSum;
}
*/
const sum = x => {
  let arrSum = 0;
  for (let i = 0; i <= x.length; i += 1) {
    arrSum += i;
  }
  return arrSum;
};

/*
let range = function (a,z,step){
  if (step==undefined){
    step = 1;
  }
  let arr=[];
  if (step>0){
    for (let i=a; i<=z; i=i+step){
      arr.push(i);
    }
    return arr;
  }
  else {
    for (let i=a;i>=z;i=i+step){
      arr.push(i);
    }
    return arr;
  }
}
*/

const range = (a, z, step) => {
  if (step === undefined) {
    step = 1;
  }
  const arr = [];
  if (step > 0) {
    for (let i = a; i <= z; i += step) {
      arr.push(i);
    }
    return arr;
  }

  for (let i = a; i >= z; i += step) {
    arr.push(i);
  }
  return arr;
};

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

// 7. Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.
// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
// var arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/* let reverseArray = function (arrayValue){
  let newArray= [];
  for(let i = arrayValue.length-1; i>=0 ;i--){
    newArray.push(arrayValue[i]); 
  }
  return newArray;
}
*/
const reverseArray = arrayValue => {
  const newArray = [];
  for (let i = arrayValue.length - 1; i >= 0; i -= 1) {
    newArray.push(arrayValue[i]);
  }
  return newArray;
};
/*
let reverseArrayInPlace = function (arrayValue){
  for(let i = arrayValue.length-1; i>=0 ;i--){
    arrayValue.push(arrayValue[i]);  
  }
  arrayValue.splice(0, arrayValue.length/2);
  return arrayValue;  
}
*/
const reverseArrayInPlace = arrayValue => {
  for (let i = arrayValue.length - 1; i >= 0; i -= 1) {
    arrayValue.push(arrayValue[i]);
  }
  arrayValue.splice(0, arrayValue.length / 2);
  return arrayValue;
};

console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
