var app = angular.module('qmgj',['ui.router']);
app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	// 官网首页
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home',{
			url: '/home',
			templateUrl: 'view/home.html',
			controller: 'homeController'
		})
		.state('detail',{
			url: '/detail',
			templateUrl: 'view/detail.html',
			controller: 'detailController'
		})
}]);
app.controller("homeController",["$scope",function($scope){
	alert('home')
}]);
app.controller("detailController",["$scope",function($scope){
	alert('detail')
}]);
