var myapp = angular.module('day04',['ngRoute']);
		myapp.config(["$routeProvider",function($routeProvider){
			$routeProvider.when('/page1',{
				templateUrl: 'view/page1View.html',
				controller: 'page1Controller'
			}).otherwise({
				redirectTo: '/page1'
			});
		}]);