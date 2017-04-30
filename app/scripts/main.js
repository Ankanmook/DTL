var dtlApp = angular.module('dtlApp', ['ngRoute']);

	// configure our routes
	dtlApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/home', {
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})			
	});


	// create the controller and inject Angular's $scope
	dtlApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

