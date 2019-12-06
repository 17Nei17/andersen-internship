/* 8. Создать иерархию классов: линия - прямоугольник - пирамида. 
Все классы должны содержать методы для фиксации и получения значений всех координат,
 а производные классы методы вычисления площади (прямоугольник), площади поверхности и объема (пирамида). */
class Line {
  constructor(A, B) {
    this.A = A;
    this.B = B;
  }

  setCoordinate(A, B) {
    this.A = A;
    this.B = B;
  }

  getCoordinate() {
    console.log(`1-я точка:(${this.A})   2-я точка: (${this.B})`);
  }
}

class Rectangle extends Line {
  constructor(A, B, C, D) {
    super(A, B);
    this.C = C;
    this.D = D;
  }

  setCoordinate(A, B, C, D) {
    this.A = A;
    this.B = B;
    this.C = C;
    this.D = D;
  }

  getArea() {
    const lenght1 = Math.sqrt(
      Math.pow(this.A[1] - this.A[0], 2) + Math.pow(this.B[1] - this.B[0], 2)
    ); // длины сторон прямоугольника
    const lenght2 = Math.sqrt(
      Math.pow(this.C[1] - this.C[0], 2) + Math.pow(this.D[1] - this.D[0], 2)
    );
    const S = lenght1 * lenght2;
    return S;
  }

  getCoordinate() {
    console.log(
      `1-я точка:(${this.A})   2-я точка: (${this.B})  3-я точка: (${this.C}) 4-я точка: (${this.D})`
    );
  }
}

const restangle = new Rectangle([1, 1], [1, 3], [3, 3], [3, 1]);
console.log(restangle.getArea());
restangle.getCoordinate();

class Pyramide extends Rectangle {
  constructor(A, B, C, D, S) {
    // s- вершина пирамиды
    super(A, B, C, D);
    this.S = S;
  }

  setCoordinate(A, B, C, D, S) {
    this.A = A;
    this.B = B;
    this.C = C;
    this.D = D;
    this.S = S;
  }

  getVolume() {
    const lenght1 = Math.sqrt(
      Math.pow(this.A[1] - this.A[0], 2) + Math.pow(this.B[1] - this.B[0], 2)
    ); // длины сторон прямоугольника
    const lenght2 = Math.sqrt(
      Math.pow(this.C[1] - this.C[0], 2) + Math.pow(this.D[1] - this.D[0], 2)
    );
    const area = lenght1 * lenght2;
    const H = this.S[2] - this.A[2];
    const V = (H * area) / 3;
    return V;
  }
}
