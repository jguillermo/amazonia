'use strict';

angular.module('myApp.certificado', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/certificado', {
		templateUrl: 'certificado/certificado.html',
		controller: 'CertificadoCtrl'
	});
}])

.controller('CertificadoCtrl', ['$scope',function($scope) {

	$scope.imageCertificado='img/certificado.jpg';

	


}]);