//Напишите функцию getDivisors, которая на вход получает число и возвращает массив его делителей
// (чисел, на которое делится данное число).
function getDivisors(x){
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
