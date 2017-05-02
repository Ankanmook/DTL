(function(){

angular.module('dtlApp')
.controller('mainController',  ['$routeParams', '$scope', '$http',function($routeParams,$scope,$http) {

	$scope.deals = {};
	$scope.busy = true;
	$scope.error = '';

	// $scope.message = 'Everyone come and see how good I look!';
	$http.get('../deals.json')
	.then(function(response){
		$scope.deals = response.data.deals;
	},function(err){
		console.log(err);
		$scope.error = err;
	})
	.finally(function(){
		$scope.busy = false;
	});

	$scope.filterDeals = function(deal){
		return deal.productTypes.Contains($scope.Filter.TV) || 
			deal.productTypes.Contains($scope.Filter.Phone) ||
			deal.productTypes.Contains($scope.Filter.Broadband);
		};


    }]);
})();