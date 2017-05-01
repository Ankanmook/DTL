(function(){
angular.module('dtlApp', ['ngRoute'])
.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'views/main.html',
				controller  : 'mainController'
			})
			.when('/data', {
				templateUrl : 'views/main.html',
				controller  : 'dataController'
			})
			.when('/filter', {
				templateUrl : 'views/main.html',
				controller  : 'filterController'
			})
			.when('/home', {
				templateUrl : 'views/main.html',
				controller  : 'mainController'
			});

			$routeProvider.otherwise({ redirectTo: "/data" });			
	});
})();
