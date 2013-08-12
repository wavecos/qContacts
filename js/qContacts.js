var qContactsModule = angular.module('qContacts', []);

/* Controllers */
qContactsModule.controller('ContactsListController', function($scope, $http) {

	// var url = 'dummy_contacts.json';

	var contacts = [
				{
					"code": "CAD001",
					"name": "Coca - Cola",
					"representant": "Juan Perez",
					"city": "Cochabamba",
					"country": "Bolivia",
					"phone_number": "4487215",
					"fax_number": "4434765",
					"mobile_number": "70467564",
					"website": "http://www.google.com",
					"facebook": "http://fb.me/negocio",
					"twitter": "@negocio"
				},
				{
					"code": "CAD001",
					"name": "Coca - Cola",
					"representant": "Juan Perez",
					"city": "Cochabamba",
					"country": "Bolivia",
					"phone_number": "4487215",
					"fax_number": "4434765",
					"mobile_number": "70467564",
					"website": "http://www.google.com",
					"facebook": "http://fb.me/negocio",
					"twitter": "@negocio"
				},
				{
					"code": "CAD001",
					"name": "Coca - Cola",
					"representant": "Juan Perez",
					"city": "Cochabamba",
					"country": "Bolivia",
					"phone_number": "4487215",
					"fax_number": "4434765",
					"mobile_number": "70467564",
					"website": "http://www.google.com",
					"facebook": "http://fb.me/negocio",
					"twitter": "@negocio"
				},				
	];

	$scope.contacts = contacts;

	/*
	$http.get(url).success(function(data, status, headers, config) {
		var lista = JSON.parse(data);
		$scope.contacts = lista;
		console.log('contactos recibidos : ' + lista);
	}).
	error(function(error) {
		console.log('error :: ' + error);
	});
	*/

});

/* Routes */
qContactsModule.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			controller: 'ContactsListController',
			templateUrl: 'partials/list.html'
		}).
		when('/view/:id', {
			controller: 'ContactController',
			templateUrl: 'partials/contact.hml'
		}).
		otherwise({
			redirectTo: '/'
		});
});

