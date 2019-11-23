/*3. Преобразовать строки двумерного массива в столбцы. 
Класс будет содержать два метода: один заполнит массив значениями, второй произведет замену значений строк на значения столбцов. */

class Matrix {
  constructor(s1,s2,s3){ //массив в 3 столбца предпологается
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }
  addElements (s1,s2,s3){
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }
  viewElements(){
    let arr =[];
    arr.push(this.s1);
    arr.push(this.s2);
    arr.push(this.s3);
    console.log (arr);
  }
  changeMatrix(){
    let newArr =[];
    this.s1 = 

  }
}
let arr1 = new Matrix();
arr1.addElements ([1,2,3],[11,22,33],[111,222,333]);
arr1.viewElements();
