//Вводится четырёхзначное число (abcd). Вывести сумму ab + cd.
var A=5175;
var sum1=0;
var sum2=0;
while (A>1){
  for (i=0;i<4;i++){
      if (i<2){
        sum1=sum1+(A%10);
          A=Math.floor(A/10);
          
      }
      else {
        Math.floor(sum2);
        sum2+=A%10;
          A=Math.floor(A/10); //округляет вниз
      } 
  }
}
console.log("Результат ab+cd:");
    console.log(sum1+sum2);