/* 13.  В указанном месте примените конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на объект phrase.
let phrase = {
  value: "привет"
};

function func(surname, name) {
  console.log(`${this.value}, ${surname} ${name}`);
}
// Тут воспользуйтесь bind()
func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'
*/
const phrase = {
  value: 'привет',
};

function func(surname, name) {
  console.log(`${this.value}, ${surname} ${name}`);
}

func.bind(phrase);
const funcbind = func.bind(phrase);
funcbind('Иванов', 'Иван');
funcbind('Петров', 'Петр');
