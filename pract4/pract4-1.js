/* 1. Следующий код создает массив функций-игроков players. По замыслу, каждый игрок должен выводить свой номер:
 
function makeTeam() {
 let players = [];
 for ( i = 0; i < 10; i++) {
   var player = function() { // функция-игрок
   console.log( i ); // выводит свой номер
    };
 players.push(player);
 }
return players;
}
let team = makeTeam();
team[0](); // игрок выводит 10, а должен 0
team[5](); // игрок выводит 10…
// .. все игроки выводят 10 вместо 0,1,2...9
*/

function makeTeam() {
  const players = [];
  for (let i = 0; i < 10; i += 1) {
    const player = function() {
      console.log(`${i}`); // выводит свой номер
    };
    players.push(player);
  }
  return players;
}
const team = makeTeam();
team[0]();
team[5]();
