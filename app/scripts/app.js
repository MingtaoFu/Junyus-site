'use strict';

/**
 * @ngdoc overview
 * @name junyusSiteApp
 * @description
 * # junyusSiteApp
 *
 * Main module of the application.
 */
angular
  .module('junyusSiteApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/body', {
        templateUrl: 'views/body.html'
        //controller: 'AboutCtrl',
          // controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
