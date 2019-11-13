//Напишите функцию, которая в качестве параметра получает целое число и возвращает true, если число простое и false, если нет.
let flags = true;
function getSimple (x){
  for(let i=2;i<x;i++){
    if (x%i!=0){ //если не делится без остатка то это просто число (возврат true)
      continue;
    }
    else flags=false;
  }
  console.log (`${flags}`);
}
getSimple(11);