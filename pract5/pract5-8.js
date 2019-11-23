/*8. Создать иерархию классов: линия - прямоугольник - пирамида. 
Все классы должны содержать методы для фиксации и получения значений всех координат,
 а производные классы методы вычисления площади (прямоугольник), площади поверхности и объема (пирамида). */
class Line {
  constructor(x1,y1,x2,y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  setCoordinate(x1,y1,x2,y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  getCoordinate(){
    console.log (`1-я точка:(${this.x1},${this.y1})   2-я точка: (${this.x2},${this.y2})`);
  }
}
let line = new Line (1,1,4,4);
line.getCoordinate();
class Rectangle extends Line{
  constructor(x1,y1,x3,y3){
    super(x1,y1);
    this.x3 = x3;
    this.y3 = y3;//т.к это прямоугольник то некоторые координаты должны быть равны, поэтому нет смысла их загонять в конструктор
    this.x2 = x1;
    this.x4 = x3;
    this.y4 = y1;
    this.y2 = y3;
  }
  getArea(){
    let lenght1 = Math.sqrt(Math.pow(this.x2-this.x1,2)+Math.pow(this.y2-this.y1,2)); //длины сторон прямоугольника
    let lenght2 = Math.sqrt(Math.pow(this.x3-this.x2,2)+Math.pow(this.y3-this.y2,2)); 
    let S = lenght1*lenght2;
    return S;
  }
}
let restangle = new Rectangle(1,1,4,4);
console.log (restangle.getArea());

class Pyramide extends Rectangle {
  constructor(x1,y1,z1,x2,y2,z2,x3,y3,z3,s1,s2,s3){//s- вершина пирамиды
    super(x1,y1);
    this.z1 =z1;
    this.x2 = x2;
    this.y2 = y2;
    this.z2 = z2;
    this.x3 = x3;
    this.y3 = y3;
    this.z3 = z3;
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }
  // getArea(){//площадь поверности пирамиды
    
  //}
}
let pyramide = new Pyramide()


