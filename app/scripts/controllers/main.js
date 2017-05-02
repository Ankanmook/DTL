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

		console.log($scope.deals);
		console.log($scope);
	},function(err){
		console.log(err);
		$scope.error = err;
	})
	.finally(function(){
		$scope.busy = false;
	});

	$scope.filterDeals = function(deal){
		console.log(deal.productTypes);
		console.log($scope.Filter);

		console.log(deal.productTypes.indexOf($scope.Filter.TV !== -1)||
		deal.productTypes.indexOf($scope.Filter.Phone !== -1) ||
			deal.productTypes.indexOf($scope.Filter.BroadBand !== -1));

		return deal.productTypes.indexOf($scope.Filter.TV !== -1)||
		deal.productTypes.indexOf($scope.Filter.Phone !== -1) ||
			deal.productTypes.indexOf($scope.Filter.BroadBand !== -1);
		};


    }]);
})();