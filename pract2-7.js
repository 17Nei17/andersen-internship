//С помощью встроенного объекта Date получить текущую дату и вычислить дату, которая наступит через 100 дней.function now() {

let nowDate = new Date();
console.log (`${nowDate}`);
nowDate.setDate(nowDate.getDate()+100);
console.log (`${nowDate}`);


