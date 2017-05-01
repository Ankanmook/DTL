(function(){

angular.module('dtlApp')
.controller('mainController',  ['$routeParams', '$scope', '$http',function($routeParams,$scope,$http) {

	$scope.choice = [];
	$scope.busy = true;
	$scope.error = '';

	$scope.message = 'Everyone come and see how good I look!';
	$http.get('../deals.json')
	.then(function(response){
		angular.copy(response.data, $scope.choice);
	},function(err){
		console.log(err);
		$scope.error = err;
	})
	.finally(function(){
		$scope.busy = false;
	});


    }]);
})();