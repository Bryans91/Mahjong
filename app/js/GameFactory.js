// GameFactory.js
module.exports = function(){
  var factory = {};

  factory.games = [
    {
      "layout": "Dragon", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
      "createdOn": "2015-04-26T18:00:00Z", // date + time
      "startedOn": "date", // date + time
      "endedOn": "date", // date + time
      "createdBy": {
        "id": "string", // Avans username
        "name": "string", // fullname
        "email": "string", // avans e-mail
        "nickname": "Xyzer" // maybe filled later?
      },
      "minPlayers": "16", // 35 <= x >= 1, Required number of players to start
      "maxPlayers": "32",  // 35 <= x >= 1
      "players": [
        {
          "id": "string", // Avans username
          "name": "string", // fullname
          "email": "string", // avans e-mail
          "nickname": "Xyzer" // maybe filled later?
          // Properties like score and isWinner maybe filled later
        },
        {
          "id": "string", // Avans username
          "name": "string", // fullname
          "email": "string", // avans e-mail
          "nickname": "BryanDragon" // maybe filled later?
          // Properties like score and isWinner maybe filled later
        }
      ],
      "state": "open" // -> 'open'|'playing'|'finished'
    },
    {
      "layout": "Monkey", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
      "createdOn": "2015-04-26T16:00:00Z", // date + time
      "startedOn": "date", // date + time
      "endedOn": "date", // date + time
      "createdBy": {
        "id": "string", // Avans username
        "name": "string", // fullname
        "email": "string", // avans e-mail
        "nickname": "Martijnnn" // maybe filled later?
      },
      "minPlayers": "2", // 35 <= x >= 1, Required number of players to start
      "maxPlayers": "6",  // 35 <= x >= 1
      "players": [
        {
          "id": "string", // Avans username
          "name": "string", // fullname
          "email": "string", // avans e-mail
          "nickname": "Martijnnn" // maybe filled later?
          // Properties like score and isWinner maybe filled later
        },
        {
          "id": "string", // Avans username
          "name": "string", // fullname
          "email": "string", // avans e-mail
          "nickname": "SlimJoe" // maybe filled later?
          // Properties like score and isWinner maybe filled later
        }
      ],
      "state": "open" // -> 'open'|'playing'|'finished'
    }
  ];

  factory.addGame = function(){
    factory.games.push(
      {
        "layout": "Snake", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
        "createdOn": "2015-04-26T20:00:00Z", // date + time
        "startedOn": "date", // date + time
        "endedOn": "date", // date + time
        "createdBy": {
          "id": "string", // Avans username
          "name": "string", // fullname
          "email": "string", // avans e-mail
          "nickname": "Nicky" // maybe filled later?
        },
        "minPlayers": "12", // 35 <= x >= 1, Required number of players to start
        "maxPlayers": "24",  // 35 <= x >= 1
        "players": [
          {
            "id": "string", // Avans username
            "name": "string", // fullname
            "email": "string", // avans e-mail
            "nickname": "Nicky" // maybe filled later?
            // Properties like score and isWinner maybe filled later
          },
          {
            "id": "string", // Avans username
            "name": "string", // fullname
            "email": "string", // avans e-mail
            "nickname": "Louise" // maybe filled later?
            // Properties like score and isWinner maybe filled later
          }
        ],
        "state": "open" // -> 'open'|'playing'|'finished'
      }
    )
  }

  factory.joinGame = function(player){
    console.log(player);
  }

  return factory;
};
