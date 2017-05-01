(function(){

angular.module('dtlApp')
.controller('mainController',  ['$routeParams', '$scope', '$http',function($routeParams,$scope,$http) {

	$scope.response = {};
	$scope.busy = true;
	$scope.error = '';

	// $scope.message = 'Everyone come and see how good I look!';
	$http.get('../deals.json')
	.then(function(response){
		$scope.response = response.data; 
		//angular.copy(response.data, $scope.deals);
				console.log($scope.response.deals);
	},function(err){
		console.log(err);
		$scope.error = err;
	})
	.finally(function(){
		$scope.busy = false;
	});


    }]);
})();