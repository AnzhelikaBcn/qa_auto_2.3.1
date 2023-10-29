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
  for (let i = 0; i < players.length; i++) {
    scores.push(players[i].scorePoints);
  }
  
  // Использование объекта Math и метода Math.max для поиска максимального значения
  const maxScore = Math.max(...scores);
  
  // Найхождение игрока с максимальным значением scorePoints
  const playerWithMaxScore = players.find(player => player.scorePoints === maxScore);
  
  console.log("Игрок с максимальным значением scorePoints:");
  console.log(playerWithMaxScore);