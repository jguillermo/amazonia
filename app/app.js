'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngMaterial',
	'ngRoute',
	'jgTools',
	'myApp.home',
	'myApp.buscar'
]).
config(['$locationProvider', '$routeProvider','$mdThemingProvider', function($locationProvider, $routeProvider,$mdThemingProvider) {
	$mdThemingProvider.theme('default')
                          .primaryPalette('brown')
                          .accentPalette('red');
	$locationProvider.hashPrefix('!');

	$routeProvider.otherwise({
		redirectTo: '/home'
	});
}]).controller('AppCtrl', [function($scope,$mdSidenav) {
	$scope.toggleList=function(){
		$mdSidenav('left').toggle();
	}
}]);