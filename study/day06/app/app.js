var myapp = angular.module('day06',['ui.router']);
myapp.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/root');
	$stateProvider
	.state('root',{
		url: '/root',
		templateUrl: 'view/state1.html'
	})
	.state('music',{
		url: '/music',
		templateUrl: 'view/music.html'
	})
	.state('music.detail',{
		url: '/detail',
		templateUrl: 'view/music.detail.html'
	});
}]);