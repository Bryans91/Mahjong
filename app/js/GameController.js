// GameController.js
module.exports = function($scope, GameFactory, $http){
  //$scope.games = GameFactory.games;
  //$scope.games;

  $scope.getGames = function() {
    $http.get('https://mahjongmayhem.herokuapp.com/games/')
      .success(function(res) {
        pagination(res);
      });
  }

  function pagination(res){
    $scope.games = res;
    $scope.gamesPerPage = 5;
    $scope.currentPage = 0;
    $scope.total = res.length;
    $scope.pagedGames = $scope.games.slice($scope.currentPage * $scope.gamesPerPage, $scope.currentPage + $scope.gamesPerPage);
    console.log($scope.pagedGames.length);
  }

  $scope.loadMore = function() {
    $scope.currentPage++;
    var newPagedGames = $scope.games.slice($scope.currentPage * $scope.gamesPerPage, $scope.currentPage * $scope.gamesPerPage + $scope.gamesPerPage);
    $scope.pagedGames = $scope.pagedGames.concat(newPagedGames);
    console.log($scope.pagedGames.length);
  };

  $scope.nextPageDisabledClass = function() {
    return $scope.currentPage === $scope.pageCount()-1 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.total/$scope.gamesPerPage);
  };

  $scope.addGame = function() {
    GameFactory.addGame();
  }
  $scope.joinGame = function(game) {
    GameFactory.joinGame(game);
  }
}
