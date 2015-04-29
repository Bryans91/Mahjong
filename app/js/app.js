require('angular/angular');

// Create your app
var app = angular.module('mahjong', []);

// GameFactory
var gameFactory = require('./GameFactory');
app.factory('GameFactory', gameFactory);

// GameController
var gameController = require('./GameController');
app.controller('GameController', gameController, gameFactory);

console.log("Application started..");


