"use strict";

app.controller('LoginController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService){
	$scope.login = function (c) {
		AuthService.login(c,
		function success(data) {
			$scope.notification = "You have been successfully logged in!";
			$scope.notifyClass = "success";
			$location.path('/');
		},
		function error(err) {
			$scope.notification = err.error_description;
			$scope.notifyClass = "danger";
		});        
    }
}]);