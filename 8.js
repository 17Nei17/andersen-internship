//Найти сумму чисел от 100 до 200 кратных 17

let sum=0;
let start=100;
let end=200;
for(let i=start;i<=end;i++){
    if (i%17==0){
        sum=sum+i;
    }
}
console.log(sum);