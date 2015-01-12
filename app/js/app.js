"use strict";

var app = angular.module('app', [

    // Load Angular modules
    'ngRoute',

])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider
    .when('/login',{
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
    })
    .otherwise({
        redirectTo: '/'
    });

}])
.constant('API_URL', 'http://softuni-ads.azurewebsites.net/api');
