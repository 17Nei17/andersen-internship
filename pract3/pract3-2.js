//Создайте функцию, принимающую на входе целое число и возвращающую наибольшую цифру в этом числе.
let max = 0;
function givNumeral (val){
  let x = String(val);
  for (let i=0;i<x.length;i++){
    if (max<(+x[i])){
      max=+x[i];
    }
  }
  console.log (max);
}
givNumeral(2294802);