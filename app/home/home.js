'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl'
	});
}])

.controller('HomeCtrl', ['$scope', '$mdDialog', '$http', function($scope, $mdDialog, $http) {
	$scope.showModal = function(ev) {
		$mdDialog.show(
			$mdDialog.alert()
			.parent(angular.element(document.querySelector('#popupContainer')))
			.clickOutsideToClose(true)
			.textContent('Arbio trabaja en la conservación de 916 hectáreas de bosque amazónico en Tambopata, Madre de Dios, generando soluciones económicamente viables y sostenibles para los guardianes del bosque.  Busca involucrar a más personas en la protección de la amazonia.')
			.ariaLabel('Alert Dialog Demo')
			.ok('CERRAR')
			.targetEvent(ev)
		);
	}



	var frases = [
		'"Las plantas y árboles amazónicos juegan un papel crítico en la regulación del cambio climático" – WWF.',
		'El 11/11 de 2011 la selva amazónica fue declarada como una de las siete maravillas naturales del mundo. Necesitamos tu ayuda para protegerla.',
		'La Amazonía Peruana es una de las regiones de mayor riqueza biológica del mundo. Apoya a los guardianes que protegen el bosque.',
		'Al proteger los árboles del bosque se cuida el ecosistema completo:  toda la vegetación (palmeras, trepadoras, arbustos, helechos, etc.), mamíferos, reptiles, aves, anfibios, peces, hongos, insectos, y muchos seres vivos que interactúan entre sí en perfecta armonía.',
		'Actualmente el único valor económico que se da al bosque es el Carbono, sin considerar la riqueza genética y los servicios que brindan a la humanidad. Adoptando árboles nativos  se reconoce que el bosque es más que carbono, se valora la VIDA.'
	];



	$scope.header1 = {
		img: 'img/img-home.jpg',
		frase: frases[Math.floor((Math.random() * 5))]
	};


	var arboles = [{
		"code": "370-21",
		"comments": "",
		"common_name": "Caucho macho",
		"coord_lat": -12.171895865700323,
		"coord_lon": -69.38621981100411,
		"coord_utm_e": 457983.0,
		"coord_utm_n": 8654408.48,
		"coord_utm_zone_letter": "L",
		"coord_utm_zone_n": 19,
		"cost": 50.0,
		"currency": "USD",
		"diameter": 50,
		"family": "",
		"function": "wood",
		"height": 23,
		"id": 424,
		"photo": "",
		"scientific_name": "",
		"sponsor": []
	}, {
		"code": " 369-9",
		"comments": "14-OCT-12 11:16:20AM",
		"common_name": "Leche leche",
		"coord_lat": -12.170820322871476,
		"coord_lon": -69.38677151321232,
		"coord_utm_e": 457922.81,
		"coord_utm_n": 8654527.33,
		"coord_utm_zone_letter": "L",
		"coord_utm_zone_n": 19,
		"cost": 50.0,
		"currency": "USD",
		"diameter": 35,
		"family": "Moraceae",
		"function": "wood",
		"height": 21,
		"id": 282,
		"photo": "",
		"scientific_name": "Ficus sp.",
		"sponsor": []
	}, {
		"code": "403-80",
		"comments": "Soy polinizado por una especie de avispa de la familia Agaonidae que penetra y pone sus huevos en el interior de mis peque\u00f1as flores y luego muere.   Sus cr\u00edas se alimentan de mis semillas y completan su desarrollo. Solo esta avispa es capaz de fertilizar mis flores por lo que plantaciones fuera del mi \u00e1mbito nativo soy est\u00e9ril, es decir, no puedo dar frutos. ",
		"common_name": "Renaco",
		"coord_lat": -12.171729769301782,
		"coord_lon": -69.3874287596884,
		"coord_utm_e": 457851.45,
		"coord_utm_n": 8654426.66,
		"coord_utm_zone_letter": "L",
		"coord_utm_zone_n": 19,
		"cost": 50.0,
		"currency": "USD",
		"diameter": 170,
		"family": "Moraceae",
		"function": "medicine,mammal,bird,wood",
		"height": 23,
		"id": 143,
		"photo": "",
		"scientific_name": "Ficus trigona",
		"sponsor": []
	}, {
		"code": "404-22",
		"comments": "",
		"common_name": "Fari\u00f1a seca",
		"coord_lat": -12.172146164304863,
		"coord_lon": -69.38758553299111,
		"coord_utm_e": 457834.46,
		"coord_utm_n": 8654380.59,
		"coord_utm_zone_letter": "L",
		"coord_utm_zone_n": 19,
		"cost": 50.0,
		"currency": "USD",
		"diameter": 35,
		"family": "",
		"function": "wood",
		"height": 21,
		"id": 22,
		"photo": "",
		"scientific_name": "Celtis schippii",
		"sponsor": []
	}];


	$scope.arbol = arboles[Math.floor((Math.random() * 4))];

	//$http.get('http://arbio.somosazucar.org/api/trees/_random').success(function(respuesta) {
		//$scope.arbol=respuesta;
	//});

	$http.get('http://arbio.somosazucar.org/api/trees/'+$scope.arbol.id+'/image').success(function(rpta) {
		$scope.arbol.img='http://arbio.somosazucar.org'+rpta.src;
	});

}]);