// function(prarm,prarm1,prarm2) 依赖的组件 $timeout $route $http
// controller("控制器名字",function(){})
myapp.controller("mycontrol01",function($scope){
	$scope.username = "tom";
	$scope.count = 0;
	$scope.add = function(){
		$scope.count++;
	}
});