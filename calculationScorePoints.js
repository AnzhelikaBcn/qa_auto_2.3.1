/*
Тестовые данные — дан массив объектов players.

Задача: вывеcти в консоль игрока с максимальным значением scorePoints. 
Использовать цикл, обращение к свойству через точку и метод глобального 
объекта Math, позволяющий найти большее число из всех возможных.


1. Для начала создать пустой массив для хранения очков
2. Используя цикл, заполнить новый массив значениями очков из данного вам массива players
здесь будет удобно использовать цикл for..in. 
*/


const players = [
    {
      "id": 1,
      "name": "Ivan",
      "scorePoints": 4500
    },
    {
      "id": 2,
      "name": "Petr",
      "scorePoints": 3600
    },
    {
      "id": 3,
      "name": "Vadim",
      "scorePoints": 3433
    },
    {
      "id": 4,
      "name": "Olga",
      "scorePoints": 2356
    }
  ];
  
  // Создание пустой массив для хранения очков
  const scores = [];
  
  // Заполнение массив значениями очков из массива players
//   Обычный цикл:
//   for (let i = 0; i < players.length; i++) {
//     scores.push(players[i].scorePoints);
//   }

//   Цикл for in
  for (const player of players) {
    for (const key in player) {
      if (key === "scorePoints") {
        scores.push(player[key]);
      }
    }
  }
  
  // Использование объекта Math и метода Math.max для поиска максимального значения
  const maxScore = Math.max(...scores);
  
  // Нахождение игрока с максимальным значением scorePoints
  const playerWithMaxScore = players.find(player => player.scorePoints === maxScore);
  
  console.log("Игрок с максимальным значением scorePoints:");
  console.log(playerWithMaxScore);