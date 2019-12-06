/* Напишите скрипт, который находит площадь прямоугольника высота 23см. (в
числовую переменную height), шириной 10см (в числовую переменную width),
значение площади должно храниться в числовой переменной s.
*/

const height = 23;
const width = 10;
function area(h, w) {
  return h * w;
}
const s = area(height, width);
console.log(s);
