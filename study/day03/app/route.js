'use strict';
var app = angular.module("routeApp",["ngRoute"]);
app.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/homepage', {
          templateUrl: 'view/homepageView.html',
          controller: 'homepageController'
        }).
        when('/detail', {
          templateUrl: 'view/detailView.html',
          controller: 'detailController'
        }).
        otherwise('/homepage');
    }
  ]);
