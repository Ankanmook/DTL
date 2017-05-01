(function(){

angular.module('dtlApp')
.controller('dataController',  ['$routeParams', '$scope',function($routeParams,$scope) {
		// create a message to display in our view
		console.log("access data");
		$scope.message = 'Everyone come and see how good I look!';
	}]);
})();