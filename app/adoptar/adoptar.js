'use strict';

angular.module('myApp.adoptar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/adoptar', {
		templateUrl: 'adoptar/adoptar.html',
		controller: 'AdoptarCtrl'
	});
}])

.controller('AdoptarCtrl', ['$scope',function($scope) {

}]);