"use strict";

app.service('AuthService', ['$http', 'API_URL', function ($http, API_URL) {
    return {
        login: function login (credentials, success, error) {
            var request = {
                method: "POST",
                url: API_URL + '/user/login',
                data: credentials
            }

            $http(request).success(function (data){
                sessionStorage['currentUser'] = JSON.stringify(data);
                success(data);
            }).error(error);
            
        },

        logout: function logout () {
            if (sessionStorage['currentUser']) {
                sessionStorage.removeItem('currentUser');
            };
        },

        getCurrentUser: function getCurrentUser() {
            if (sessionStorage['currentUser']) {
                return JSON.parse(sessionStorage['currentUser']);
            };
        },

        isLoggedIn: function isLoggedIn() {
            return (sessionStorage['currentUser']) ? true : false;
        },

        isAdmin: function isAdmin() {
            var currentUser = this.getCurrentUser();
            if (currentUser) {
                return (currentUser.isAdmin) ? true : false;
            };
        },

        getAuthHeaders: function getAuthHeaders() {
            var headers = {};
            var currentUser = this.getCurrentUser();

            if (currentUser) {
                headers['Authorization'] = 'Bearer ' + currentUser.access_token;
            };
        }
    }
}]);