/* 9. Создать абстрактный класс Figure с методами вычисления площади и периметра, а также методом,
 выводящим информацию о фигуре на экран.
  Создать производные классы: Rectangle (прямоугольник), Circle (круг), Triangle (треугольник) 
  со своими методами вычисления площади и периметра. Создать массив n фигур и вывести полную информацию о фигурах на экран. */
class Figure {
  constructor(x1) {
    if (this.constructor.name === 'Figure') {
      throw new Error(`${this.constructor.name}: Абстрактный класс`);
    }
    this.x1 = x1;
  }

  viewFigure() {
    console.log(this.x, this.y);
  }
}

class Restangle extends Figure {
  constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
    super(x1, y1);
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.x4 = x4;
    this.y4 = y4;
  }

  getArea() {
    const lenght1 = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)); // длины сторон прямоугольника
    const lenght2 = Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2));
    const S = lenght1 * lenght2;
    return S;
  }

  getPerimeter() {
    const lenght1 = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)); // длины сторон прямоугольника
    const lenght2 = Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2));
    const P = (lenght1 + lenght2) * 2;
    return P;
  }

  getRestangle() {
    console.log(
      `Текущие значения координат прямоугольника: сторона X1(${this.x1},${this.y1}) сторона X2(${this.x2},${this.y2}) cторона X3(${this.x3},${this.y3}) сторона X4 (${this.x4},${this.y4})`
    );
  }
}

class Circle extends Figure {
  constructor(x1) {
    super(x1);
  }

  getArea() {
    return this.x1 * 2 * Math.PI;
  }

  gerCircle() {
    console.log(`Радиус круга: ${this.x1}`);
  }
}

class Triangle extends Figure {
  constructor(x1, y1, x2, y2, x3, y3) {
    super(x1);
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }

  square() {
    const lenght1 = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)); // длины сторон треугольника
    const lenght2 = Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2));
    const lenght3 = Math.sqrt(Math.pow(this.x3 - this.x1, 2) + Math.pow(this.y3 - this.y1, 2));
    const P = (lenght1 + lenght2 + lenght3) / 2;
    const S = Math.sqrt(P * (P - lenght1) * (P - lenght2) * (P - lenght3));
    console.log(S);
  }

  perimeter() {
    const lenght1 = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)); // длины сторон треугольника
    const lenght2 = Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2));
    const lenght3 = Math.sqrt(Math.pow(this.x3 - this.x1, 2) + Math.pow(this.y3 - this.y1, 2));
    const P = lenght1 + lenght2 + lenght3;
    console.log(P);
  }

  getTriangle() {
    console.log(
      `Текущие значения координат прямоугольника: сторона X1(${this.x1},${this.y1}) сторона X2(${this.x2},${this.y2}) cторона X3(${this.x3},${this.y3})`
    );
  }
}

const Restangle1 = new Restangle(1, 1, 2, 2, 3, 3, 4, 4);
// Restangle1.getRestangle();
const Circle1 = new Circle(10);
// Circle1.gerCircle();
const Triangle1 = new Triangle(1, 1, 2, 2, 1, 3);

const arrCustomers = [Restangle1, Circle1, Triangle1];
for (const i in arrCustomers) {
  console.log(arrCustomers[i]);
}
