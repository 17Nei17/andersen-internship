/*5. Описать класс, представляющий треугольник.
 Предусмотреть методы для создания объектов, вычисления площади, периметра и точки пересечения медиан. 
 Описать свойства для получения состояния объекта. */
/*
class Triangle {
  constructor(x1,y1,x2,y2,x3,y3){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }
  square(){
    let lenght1 = Math.sqrt(Math.pow(this.x2-this.x1,2)+Math.pow(this.y2-this.y1,2)); //длины сторон треугольника
    let lenght2 = Math.sqrt(Math.pow(this.x3-this.x2,2)+Math.pow(this.y3-this.y2,2)); 
    let lenght3 = Math.sqrt(Math.pow(this.x3-this.x1,2)+Math.pow(this.y3-this.y1,2)); 
    let P = (lenght1+lenght2+lenght3)/2;
    let S =Math.sqrt( P*(P-lenght1)*(P-lenght2)*(P-lenght3));
    console.log (S);
  }
  perimeter(){
    let lenght1 = Math.sqrt(Math.pow(this.x2-this.x1,2)+Math.pow(this.y2-this.y1,2)); //длины сторон треугольника
    let lenght2 = Math.sqrt(Math.pow(this.x3-this.x2,2)+Math.pow(this.y3-this.y2,2)); 
    let lenght3 = Math.sqrt(Math.pow(this.x3-this.x1,2)+Math.pow(this.y3-this.y1,2)); 
    let P = (lenght1+lenght2+lenght3);
    console.log (P);
  }
  medians (){
    let Mx1 = (this.x2+this.x3)/2 //медиана из точки x 1-я координа
    let Mx2 =(this.y2+this.y3)/2 //медиана из точки x 2-я коорд
    let My1 = (this.x1+this.x3)/2//медиана из точки y 1-я коорд
    let My2 = (this.y1+this.y3)/2 //медиана из точки y 2-я коорд
    let Mz1 = (this.x1+this.x2)/2 //медиана из точки z 1-я коорд
    let Mz2 = (this.y1+this.y2)/2//медиана из точки z 2-я коорд
    console.log (`координаты пересечения медианы, вышедшей из точки x1y1 (${Mx1};${Mx2})`);
    console.log (`координаты пересечения медианы, вышедшей из точки x2y2 (${My1};${My2})`);
    console.log (`координаты пересечения медианы, вышедшей из точки x3y3 (${Mz1};${Mz2})`);
  }
}
let Triangle1 = new Triangle (1,1,2,2,3,1);
Triangle1.square();
Triangle1.perimeter();
Triangle1.medians();
*/

let Triangle = (x1,y1,x2,y2,x3,y3) =>{
  let perimeter = ()=>{
    let lenght1 = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)); //длины сторон треугольника
    let lenght2 = Math.sqrt(Math.pow(x3-x2,2)+Math.pow(y3-y2,2)); 
    let lenght3 = Math.sqrt(Math.pow(x3-x1,2)+Math.pow(y3-y1,2)); 
    let P = (lenght1+lenght2+lenght3);
    console.log(P.toPrecision(3));
  }
  let square = () =>{
    let lenght1 = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)); //длины сторон треугольника
    let lenght2 = Math.sqrt(Math.pow(x3-x2,2)+Math.pow(y3-y2,2)); 
    let lenght3 = Math.sqrt(Math.pow(x3-x1,2)+Math.pow(y3-y1,2)); 
    let P = (lenght1+lenght2+lenght3)/2;
    let S = Math.sqrt( P*(P-lenght1)*(P-lenght2)*(P-lenght3));
    console.log (S.toPrecision(3));
  }
  let medians = () => {
    let Mx1 = (x2+y3)/2 //медиана из точки x 1-я координа
    let Mx2 =(y2+y3)/2 //медиана из точки x 2-я коорд
    let My1 = (x1+x3)/2//медиана из точки y 1-я коорд
    let My2 = (y1+y3)/2 //медиана из точки y 2-я коорд
    let Mz1 = (x1+x2)/2 //медиана из точки z 1-я коорд
    let Mz2 = (y1+y2)/2//медиана из точки z 2-я коорд
    console.log (`координаты пересечения медианы, вышедшей из точки x1y1: (${Mx1};${Mx2})`);
    console.log (`координаты пересечения медианы, вышедшей из точки x2y2: (${My1};${My2})`);
    console.log (`координаты пересечения медианы, вышедшей из точки x3y3: (${Mz1};${Mz2})`);
  }
  let getInfo = () => {console.log (`координаты треугольника: A(${x1},${y1}) B(${x2},${y2}) C(${x3},${y3})`)}
  return {x1,y1,x2,y2,x3,y3,perimeter,square,medians,getInfo};
}

let Triangle1 = Triangle (0,0,1,1,1,0);
Triangle1.perimeter();
Triangle1.square();
Triangle1.medians();
Triangle1.getInfo();
