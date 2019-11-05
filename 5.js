//Среди трех чисел найти среднее. Если среди чисел есть равные, вывести сообщение Ошибка;.
let num1,num2,num3;
num1=20;
num2=10;
num3=30;
if ((num1==num2)||(num1==num3)||(num2==num1)||(num2==num3)){
  console.log ("Ошибка");
}
else {
  let s=(num1+num2+num3)/3;
  console.log(s);
}

