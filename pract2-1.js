//Создать массив, содержащий список членов вашей семьи.
// С помощью методов встроенного объекта Array добавить в массив двоюродных братьев (в начало массива) 
//и сестер (в конец массива), определить его длину.
let family = ['Cвета','Андрей', 'Ольга', 'Сергей'];
family.push('Настя');
family.unshift (`Рома`);
console.log (`${family}`);
console.log (`${family.length}`);