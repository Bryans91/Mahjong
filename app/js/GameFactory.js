// GameFactory.js
module.export = function(){
  var factory = {};

  factory.games = [
    { maxPlayers: 16},
    { maxPlayers: 32}
  ];

  factory.addGame = function(maxPlayers){
    factory.games.push({ maxPlayers: maxPlayers })
  }

  return factory;
};
