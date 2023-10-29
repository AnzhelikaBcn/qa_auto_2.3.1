// 8. Массив игроков с разными баллами (одинаковыми и отрицательными)
const players = [
    { "id": 1, "name": "Jon", "scorePoints": 10000 },
    { "id": 2, "name": "Eve", "scorePoints": 4500 },
    { "id": 3, "name": "Frank", "scorePoints": -3600 },
    { "id": 4, "name": "Grace", "scorePoints": 10000 },
    { "id": 5, "name": "Arvid", "scorePoints": 3433 },
    { "id": 6, "name": "Hank", "scorePoints": 10000 }
  ];
  
  

function findPlayersWithMaxScore(players) {
    if (players.length === 0) {
      return "Массив игроков пуст.";
    }
  
    const maxScore = Math.max(...players.map(player => player.scorePoints));
  
    if (maxScore < 0) {
      console.log("Предупреждение: Максимальное количество очков отрицательное.");
    }
  
    const topPlayers = players.filter(player => player.scorePoints === maxScore);
  
    return topPlayers;
  }
  
  // Вызов функции для поиска игроков с максимальными очками
  const topPlayers = findPlayersWithMaxScore(players);
  
  // Вывод результатов
  if (Array.isArray(topPlayers)) {
    console.log("Игроки с максимальными очками:", topPlayers);
  } else {
    console.log(topPlayers);
  }