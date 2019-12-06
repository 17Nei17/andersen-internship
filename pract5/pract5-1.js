/* 1 Описать класс Tiles (кафель), который будет содержать поля с открытым доступом: brand, size_h, size_w, price и метод класса getData().
 Создать пару объектов класса и внести данные в поля.
  Затем отобразить их, вызвав метод getData(). */

/*
class Tiles {
  constructor(brand,size_h,size_w,price){
    this.brand = brand;
    this.size_h =size_h;
    this.size_w = size_w;
    this.price = price;
  }
  getData(){
    console.log (`brand:${this.brand}  size_h:${this.size_h}  size_w:${this.size_w}  price:${this.price}`);
  }
}
let newTiles = new Tiles ('Керамин',10,15, 120);
newTiles.getData();
*/

const Tiles = function(brand, sizeH, sizeW, price) {
  this.brand = brand;
  this.sizeH = sizeH;
  this.sizeW = sizeW;
  this.price = price;
  this.getData = function() {
    console.log(
      `brand:${this.brand}  size_h:${this.sizeH}  size_w:${this.sizeW}  price:${this.price}`
    );
  };
};
const newTiles = new Tiles('Керамин', 10, 15, 120);
newTiles.getData();
