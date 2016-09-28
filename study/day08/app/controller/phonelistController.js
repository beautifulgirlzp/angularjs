myapp.controller("phonelistController",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
	$rootScope.title = "手机列表页面";
	$http({
		url: 'phones/phones.json',
		type: 'get'
	}).success( function(res){
		$scope.phonelist = res;
	} );
}]);