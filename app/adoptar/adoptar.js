'use strict';

angular.module('myApp.adoptar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/adoptar/:id', {
		templateUrl: 'adoptar/adoptar.html',
		controller: 'AdoptarCtrl'
	});
}])

.controller('AdoptarCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	//console.log($routeParams.id);
	$scope.user={
		nombre:'',
		email:'',
		year:1,
		precio:50.00
	};
	/*
	{
  "code": "404-1",
  "comments": "",
  "common_name": "Ubos",
  "coord_lat": -12.172729420173384,
  "coord_lon": -69.3876664399811,
  "coord_utm_e": 457825.75,
  "coord_utm_n": 8654316.08,
  "coord_utm_zone_letter": "L",
  "coord_utm_zone_n": 19,
  "cost": 50.0,
  "currency": "USD",
  "diameter": 95,
  "family": "",
  "function": "medicine,mammal,wood",
  "height": 20,
  "id": 1,
  "photo": "",
  "scientific_name": "Spondias mombin",
  "sponsor": []
}
	*/
	$scope.arbol = {};

	$http.get('http://arbio.somosazucar.org/api/trees/' + $routeParams.id).success(function(respuesta) {
		$scope.arbol = respuesta;

		$http.get('http://arbio.somosazucar.org/api/trees/' + $scope.arbol.id + '/image').success(function(rpta) {
			$scope.arbol.img = 'http://arbio.somosazucar.org' + rpta.src;
		});

	});



}]);