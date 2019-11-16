/*3. Напишите функцию, которая принимает 1 параметр. 
При первом вызове, она его запоминает, при втором,-  суммирует переданный параметр с тем,
 что передали первый раз и т.д. Например:
sum(3) = 3
sum(5) = 8
sum(228)
*/


function sum(x) {
  if (sum.sum===undefined){
    sum.sum=x;
  }
  else sum.sum=x+sum.sum;
  return sum.sum;
}

console.log(sum(3)); 
console.log(sum(5)); 
console.log(sum(3)); 







