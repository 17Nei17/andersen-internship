/* 7. Объявить основной класс с именем point, с следующими данными: координаты точки ( х, у), функция ввода данных.
 Создать второстепенный класс Graphicpoint.
  В этом классе добавляются новые данные: цвет точки, функция вывода координат точки.
   Продемонстрировать работу объектов данного класса. */
/*
class Point {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  setPoint(x,y){
    this.x = x;
    this.y = y;
  }
}

class Graphicpoint extends Point {
  constructor (x,y, color){
    super(x);
    this.y = y;
    this.color = color;
  }
  vievPoint (){
    console.log(this.x , this.y ,this.color);
  }
}
let point2 = new Graphicpoint();
point2.setPoint(22,33,'red');
point2.vievPoint ();
*/

const Point = function(x, y) {
  this.x = x;
  this.y = y;
};
Point.prototype.setPoint = function(x, y) {
  this.x = x;
  this.y = y;
};
const Graphicpoint = function(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
};
Graphicpoint.prototype = Object.create(Point.prototype);

Graphicpoint.prototype.vievPoint = function() {
  console.log(this.x, this.y, this.color);
};

const point1 = new Point(10, 54);
const point2 = new Graphicpoint(5, 2, 'red');

point2.vievPoint();
point1.setPoint(2, 5);
console.log(point1);
