var myapp = angular.module('day05',['ngRoute']);
myapp.config(["$routeProvider",function($routeProvider){
	$routeProvider.when('/homepage',{
		templateUrl: 'view/homepageView.html',
		controller: 'homepageController'
	}).when('/musiclist',{
		templateUrl: 'view/musiclistView.html',
		controller: 'musiclistController'
	}).when('/music/:musicname',{
		templateUrl: 'view/musicView.html',
		controller: 'musicController'
	}).when('/phonelist',{
		templateUrl: 'view/phonelistView.html',
		controller: 'phonelistController'
	}).when('/phone/:phoneid',{
		templateUrl: 'view/phoneView.html',
		controller: 'phoneController'
	}).otherwise({
		redirectTo: '/homepage'
	});
}]);