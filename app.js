var app = angular.module('appDemo', [
  'ngRoute',
  'demoControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/listado.html',
        controller: 'DemoListadoCtrl'
      }).
      when('/ver/:id', {
        templateUrl: 'partials/ver.html',
        controller: 'DemoVerCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);