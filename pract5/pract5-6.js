/*6. Класс Покупатель: Фамилия, Имя, Отчество, Адрес, Номер кредитной карточки, Номер банковского счета; Конструктор; 
Методы: установка значений атрибутов, получение значений атрибутов, вывод информации. 
Создать массив объектов данного класса. 
Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне. */

class Customer {
  constructor(surname,name,midname,adress, numberCard, numberBankAcc){
    this.surname = surname;
    this.name = name;
    this.midname = midname;
    this.adress = adress;
    this.numberCard = numberCard;
    this.numberBankAcc = numberBankAcc;
  }
  setAllCustomer(surname,name,midname,adress, numberCard, numberBankAcc){
    this.surname = surname;
    this.name = name;
    this.midname = midname;
    this.adress = adress;
    this.numberCard = numberCard;
    this.numberBankAcc = numberBankAcc;
  }
  setCustomerSurname(surname){
    this.surname = surname;
  }
  setCustomerName(name){
    this.name = name;
  }
  setCustomerMidname(midname){
    this.midname = midname;
  }
  setCustomerAdress(adress){
    this.adress = adress;
  }
  setCustomerNumberCard(numberCard){
    this.numberCard = numberCard;
  }
  setCustomerNumberBankAcc(numberBankAcc){
    this.numberBankAcc = numberBankAcc;
  }
  viewCustomer(){
    console.log (`${this.surname},${this.name},${this.midname},${this.adress}, ${this.numberCard}, ${this.numberBankAcc}`)
  }
}

let customer1 = new Customer();
customer1.setAllCustomer('Новак','Светлана','Сергеевна','город Мозырь',100,123321);
let customer2 = new Customer('Пунтус','Руслан','Леонидович','город Мозырь', 210,985743);
let customer3 = new Customer('Блоцкая','Дарья','Степановна','город Мозырь', 295,547263);
let arrCustomers = [customer1,customer2,customer3];

arrCustomers.sort(function(a, b){//Вывести список покупателей в алфавитном порядке
  return a.surname > b.surname;
});
console.log ('Список покупателей по алфавитному порядку (сортировка по фамилии) :');
console.log (arrCustomers);
//список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

console.log ('Покупатели у которых номер кредитной карты 300>x>200 :');
for (let i of arrCustomers){
  if (i.numberCard>200&&i.numberCard<300){
    console.log(i);
  }
}

