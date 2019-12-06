/*7. Измените функцию partial из предыдущей задачи так, чтобы она позволяла зафиксировать не только первые аргументы,
 а любые (пропущенные аргументы обозначаются с помощью undefined). Новую функцию назовите partialAny, чтобы не путать с предыдущей:

function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
var test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3 */
function test(a, b, c) {
  return "a=" + a + ",b=" + b + ",c=" + c;
}
let test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3

function partialAny(f, ...arg) {
 // for (let i in arg){
  //  if (arg[i]==undefined)
  return function(...args) {
    return f.apply(this, arg.concat(args));
  };
}