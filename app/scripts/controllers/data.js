(function(){

angular.module('dtlApp')
.controller('dataController',  ['$routeParams', '$scope', '$http',function($routeParams,$scope, $http) {
		// create a message to display in our view
		console.log("access data");
		$scope.message = 'Everyone come and see how good I look!';
    // $http.get('dtl_resource/deals.json').success(function(data) {
    //     $scope.message = data;
    // });

	}]);
})();