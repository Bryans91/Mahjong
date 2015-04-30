// GameController.js
module.exports = function($scope, GameFactory){
  $scope.games = GameFactory.games;
  $scope.addGame = function() {
    GameFactory.addGame();
  }
  $scope.joinGame = function(game) {
    GameFactory.joinGame(game);
  }
}
