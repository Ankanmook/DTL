(function(){
angular.module('dtlApp', ['ngRoute'])
.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'views/main.html',
				controller  : 'mainController'
			})
			.when('/home', {
				templateUrl : 'views/main.html',
				controller  : 'mainController'
			});

			$routeProvider.otherwise({ redirectTo: "/" });			
	});

	// create the controller and inject Angular's $scope
	// dtlApp.controller('mainController', function($scope) {
	// 	// create a message to display in our view
	// 	$scope.message = 'Everyone come and see how good I look!';
	// });
})();
