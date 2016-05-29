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




	var frases=[
	'"Las plantas y árboles amazónicos juegan un papel crítico en la regulación del cambio climático" – WWF.',
	'El 11/11 de 2011 la selva amazónica fue declarada como una de las siete maravillas naturales del mundo. Necesitamos tu ayuda para protegerla.',
	'La Amazonía Peruana es una de las regiones de mayor riqueza biológica del mundo. Apoya a los guardianes que protegen el bosque.',
	'Al proteger los árboles del bosque se cuida el ecosistema completo:  toda la vegetación (palmeras, trepadoras, arbustos, helechos, etc.), mamíferos, reptiles, aves, anfibios, peces, hongos, insectos, y muchos seres vivos que interactúan entre sí en perfecta armonía.',
	'Actualmente el único valor económico que se da al bosque es el Carbono, sin considerar la riqueza genética y los servicios que brindan a la humanidad. Adoptando árboles nativos  se reconoce que el bosque es más que carbono, se valora la VIDA.'];



	$scope.header1={
		img:'img/img-home.jpg',
		frase:frases[Math.floor((Math.random() * 5))]	
	};


	$scope.arbol={};


	//http://arbio.somosazucar.org/api/trees/_random



}]);
//http://arbio.somosazucar.org/api/trees/_random