// GameController.js
module.exports = function($scope, GameFactory, $http){
  $scope.games = GameFactory.games;
  $scope.addGame = function() {
    GameFactory.addGame();
  }
  $scope.joinGame = function(game) {
    GameFactory.joinGame(game);
  }
  $scope.getBoard = function(gameid) {
    $http.get('https://mahjongmayhem.herokuapp.com/games/'+gameid+'/tiles')
      .success(function(res) {
        $scope.tiles = res;
      });
    // console.log($scope.tiles);
  }
}
