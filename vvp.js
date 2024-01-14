

// Генерируем случайное число от 1 до 100 (включительно)
const hiddenNumber = Math.floor(Math.random() * 100) + 1;

// Теперь загаданное число содержится в переменной "загаданное_число"
// console.log(hiddenNumber);
let game = true;
let answer;
do 
{
  answer = prompt('Угадай число от 1 до 100?');
  if (answer == null)  
    {
      alert('game over');
      game = false;
    } 
  else if (isNaN(answer)) 
    alert('Это не число');
  else if (hiddenNumber > answer) 
    alert('Загаданное число больше');
  else if (hiddenNumber < answer)
    alert('Загаданное число меньше');
  else if (hiddenNumber == answer)
    {
      alert('Вы угадали!');  
      game = false;
    }
  

}
while (game == true)

const a1;








                                                                                                                                                                                                                                                                   
//  let value; //рамдомное число, загаданное ботом

// function f() {
//   let value = Math.random();

//   return function() { alert(value); };
// }
                                                                             







