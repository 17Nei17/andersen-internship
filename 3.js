//Напишите скрипт, который, используя оператор while, выведет все числа от 45 до 670, кратные 10.
let start=45;
while ( start<=670){
  if(start%10==0){
    console.log(start);
  }
  start++;
}