/*document.addEventListener('deviceready',function(){

},false);['ngSanitize']*/

var app = angular.module('app',['ngRoute','ngSanitize','ngStorage']);



 app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home/', {
        templateUrl: 'partials/home.html'
      })
      .when('/group/', {
        templateUrl: 'partials/gbach.html'
      })
      .when('/register/', {
        templateUrl: 'partials/register.html'
      })
      .when('/event/', {
        templateUrl: 'partials/event.html'
      })
      .when('/user/', {
        templateUrl: 'partials/user.html'
      }).
      otherwise({
        redirectTo: '/home/'
      });
  }]); /**/
