
/*
// 1. Игрок с максимальными баллами в начале массива
const players = [
    { "id": 1, "name": "Alice", "scorePoints": 10000 },
    { "id": 2, "name": "Bob", "scorePoints": 4500 },
    { "id": 3, "name": "Carol", "scorePoints": 3600 },
    { "id": 4, "name": "David", "scorePoints": 3433 }
    ];

     // 2. Игрок с максимальными баллами в конце массива
const players = [
    { "id": 1, "name": "Eve", "scorePoints": 4500 },
    { "id": 2, "name": "Frank", "scorePoints": 3600 },
    { "id": 3, "name": "Grace", "scorePoints": 3433 },
    { "id": 4, "name": "Hank", "scorePoints": 10000 }
  ];
  
  // 3. Игроки с минимальными и максимальными баллами
const players = [
    { "id": 1, "name": "Isabel", "scorePoints": 0 },
    { "id": 2, "name": "Jack", "scorePoints": 10000 }
  ];

  // 4. Пустой массив игроков
  const players = [];
  
  // 5. Один игрок
  const players = [
    { "id": 1, "name": "Sam", "scorePoints": 2500 }
  ];
  
  // 6. Игроки с отрицательными баллами
  const players = [
    { "id": 1, "name": "Megan", "scorePoints": -100 },
    { "id": 2, "name": "Nick", "scorePoints": -500 }
  ];
  
  // 7. Массив из 100 игроков со случайными именами и баллами
  const players = [];
  for (let i = 1; i <= 100; i++) {
    const randomName = "Player" + i;
    const randomScore = Math.floor(Math.random() * 10000); // Генерация случайных баллов
    players.push({ "id": i, "name": randomName, "scorePoints": randomScore });
  }

  */

//    8. Игроки с одинаковыми максимальными баллами в  массиве
const players = [
    { "id": 1, "name": "Jon", "scorePoints": 10000 },
    { "id": 2, "name": "Eve", "scorePoints": 4500 },
    { "id": 3, "name": "Frank", "scorePoints": 3600 },
    { "id": 4, "name": "Grace", "scorePoints": 10000 },
    { "id": 5, "name": "Arvid", "scorePoints": 3433 },
    { "id": 6, "name": "Hank", "scorePoints": 10000 }
  ];
  
  
  // Создание пустого массив для хранения очков
  const scores = [];
  
  // Заполнение массив значениями очков из массива players
  for (let i = 0; i < players.length; i++) {
    scores.push(players[i].scorePoints);
  }
  
  // Использование объекта Math и метода Math.max для поиска максимального значения
  const maxScore = Math.max(...scores);
  
  // Найхождение игрока с максимальным значением scorePoints
  const playerWithMaxScore = players.find(player => player.scorePoints === maxScore);
  console.log(players);
  console.log("Игрок с максимальным значением scorePoints:");
  console.log(playerWithMaxScore);

  