myapp.controller("phoneController",["$scope","$rootScope","$routeParams","$http",function($scope,$rootScope,$routeParams,$http){
	$rootScope.title = "手机详情页面";
	$scope.id = $routeParams.phoneid;
	$http({
		url: "phones/"+$scope.id + ".json",
		type: 'get'
	}).success(function(res){
		$scope.phone = res;
	});
}]);