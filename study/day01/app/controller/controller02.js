myapp.controller("mycontrol02",function($scope,$rootScope){
	// $rootScope 顶级的作用域，相当于window对象 最高权限，最大范围
	// $scope 控制器的作用范围，所有在页面中用到的函数或变量，都要挂载在$scope上
	$rootScope.mywindow = "angular"
})