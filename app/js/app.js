require('angular/angular');

// Create your app
var app = angular.module('mahjong', ['ngRoute']);

// GameFactory
var gameFactory = require('./GameFactory');
app.factory('GameFactory', gameFactory);

// GameController
var gameController = require('./GameController');
app.controller('GameController', gameController, gameFactory);

// BoardController
var boardController = require('./BoardController');
app.controller('BoardController', boardController);


app.config(function($routeProvider){
  $routeProvider.
    when("/", {
      templateUrl: "views/front.html",
      controller: "GameController"
    }).
    when("/board/:boardid", {
      templateUrl: "views/board.html",
      controller: "BoardController"
    });
});

console.log("Application started..");


