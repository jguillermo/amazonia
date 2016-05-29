'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngMaterial',
	'ngRoute',
	'jgTools',
	'myApp.home',
	'myApp.buscar',
	'myApp.certificado',
	'myApp.adoptar'
])
.config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function($locationProvider, $routeProvider, $mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('light-green')
		.accentPalette('brown');
	$locationProvider.hashPrefix('!');

	$routeProvider.otherwise({
		redirectTo: '/home'
	});
}])
.controller('AppCtrl', ['$scope', '$mdSidenav',function($scope, $mdSidenav) {
	$scope.toggleList = function() {
		$mdSidenav('left').toggle();
	}
}]);