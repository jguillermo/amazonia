'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngMaterial',
	'ngRoute',
	'myApp.view1',
	'myApp.view2',
	'myApp.version'
]).
config(['$locationProvider', '$routeProvider','$mdThemingProvider', function($locationProvider, $routeProvider,$mdThemingProvider) {
	$mdThemingProvider.theme('default')
                          .primaryPalette('brown')
                          .accentPalette('red');
	$locationProvider.hashPrefix('!');

	$routeProvider.otherwise({
		redirectTo: '/view1'
	});
}]);