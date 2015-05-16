// app.js

var app = angular.module('Finals', []);

app.controller('FinalCtrl', function($scope, Homework){
	$scope.homeworks = Homework;

	$scope.show = function(homework){
		if(homework.clicked)
			homework.clicked = false;
		else
			homework.clicked = true;
	}

});

app.factory('Homework', function(){
  return[
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
      url: 'https://github.com/ninasabado/js_final',
      status: 'completed',
      clicked: false
    }];
  });