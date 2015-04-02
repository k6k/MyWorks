/*document.addEventListener('deviceready',function(){

},false);['ngSanitize']*/

var app = angular.module('app',['ngRoute','ngSanitize','ngStorage']);



 app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home/', {
        templateUrl: 'partials/home.html'
      })
      .when('/user/', {
        templateUrl: 'partials/gbach.html'
      }).
      otherwise({
        redirectTo: '/home/'
      });
  }]); /**/

/* app.config(function($routeProvider){
	$routeProvider
	.when('/',{templateUrl:'partials/home.html'})
	.when('/home',{templateUrl:'partials/home.html'})
	.when('/about',{templateUrl:'partials/home.html'})
	.when('/login',{templateUrl:'partials/home.html'})
	.otherwhise({redirectTo:'/home'})

}) */