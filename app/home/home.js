'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl'
	});
}])

.controller('HomeCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {
	$scope.showModal = function(ev) {
		$mdDialog.show(
			$mdDialog.alert()
			.parent(angular.element(document.querySelector('#popupContainer')))
			.clickOutsideToClose(true)
			.textContent('You can specify some description text in here.')
			.ariaLabel('Alert Dialog Demo')
			.ok('Got it!')
			.targetEvent(ev)
		);
	}
}]);