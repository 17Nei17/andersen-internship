//Проверить трехзначное число на четность и найти сумму его цифр, если число
//четное, или произведение его цифр, если число нечетное.
let start=234;
let sum=0;
let proiz=1;

if (start%2!=0){  
  while (start!=0){
    proiz*=start%10;
    start=Math.floor(start/10);
  }
    console.log("не четное");
    console.log(proiz);
}
if((start%2)==0){
    while (start>0){
      sum+=start%10;
      start=Math.floor(start/10);
    }
    console.log("четное");
    console.log(sum);
}

