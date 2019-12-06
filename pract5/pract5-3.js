/* 3. Преобразовать строки двумерного массива в столбцы. 
Класс будет содержать два метода: один заполнит массив значениями, второй произведет замену значений строк на значения столбцов. */

class Matrix {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.arr = new Array(this.x);
    for (let i = 0; i < this.x; i++) {
      this.arr[i] = new Array(y);
    }
  }

  addElements() {
    for (let i = 0; i < this.x; i++) {
      for (let j = 0; j < this.y; j++) {
        this.arr[i][j] = i;
      }
    }
  }

  viewElements() {
    for (let i = 0; i < this.x; i++) {
      for (let j = 0; j < this.y; j++) {
        console.log(this.arr[i][j]);
      }
    }
  }

  changeMatrix() {
    for (let i = 0; i < this.x; i++) {
      for (let j = 0; j < this.y; j++) {
        this.arr[i][j] = this.arr[j][i];
      }
    }
  }
}
const arrs = new Matrix(2, 2);
arrs.addElements();
arrs.viewElements();
console.log('Измененный массив:');
arrs.changeMatrix();
arrs.viewElements();
