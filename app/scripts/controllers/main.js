(function(){

angular.module('dtlApp')
.controller('mainController',  ['$routeParams', '$scope',function($routeParams,$scope) {
		// create a message to display in our view
		console.log("hi");
		$scope.message = 'Everyone come and see how good I look!';
	}]);
})();