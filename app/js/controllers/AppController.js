"use strict";

app.controller('AppController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService){
    $scope.AuthService = AuthService;
    $scope.notification = "";
    $scope.notifyClass = "default";
    $scope.logout = function logout() {
    	AuthService.logout();
    	$scope.notification = "You are logged out!";
    	$scope.notifyClass = "warning";
    	$location.path('/');
    };

}]);