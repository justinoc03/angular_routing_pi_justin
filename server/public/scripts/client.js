console.log('client.js is sourced');

//must bring in the angular-route via $ngRoute
//angular-route is dependent on having angular already installed
var myApp = angular.module("myApp", ["ngRoute"]);

//config method doesnt take a name, we are just configuring myApp,
//It does take in a dependency injection array
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when('/home',{
        templateUrl: "/views/partials/home.html"
      }).
      when('/cat',{
        templateUrl: "/views/partials/cat.html"
      }).
      when('/lizards',{
        templateUrl: "/views/partials/lizards.html"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
