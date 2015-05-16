// app.js

var app = angular.module('FinalApp', []);

app.controller('FinalCtrl', function($scope){
  $scope.name = "Hello";
  
});

/**
app.factory('Homework', function($http){
  return{[
    { assignment: 'Test First JavaScript',
      url: 'https://github.com/ninasabado/FullstackTestFirst',
      status: 'completed',
      clicked: false
    },
    { assignment: 'Flashcards Day 1',
      url: 'https://github.com/ninasabado/Angular-Flashcards',
      status: 'completed',
      clicked: false
    },
    { assignment: 'Final Assessment',
      url: 'TO DO LATERGRAM',
      status: 'completed',
      clicked: false
    }]
  }); */