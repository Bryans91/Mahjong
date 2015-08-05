// BoardController.js
module.exports = function($scope, $http, $routeParams){
  $scope.getBoard = function(gameid) {
    $http.get('https://mahjongmayhem.herokuapp.com/games/'+$routeParams.boardid+'/tiles')
      .success(function(res) {
        $scope.tiles = res;
      });
  }
}
