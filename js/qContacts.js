var qContactsModule = angular.module('qContacts', []);

/* Controllers */
qContactsModule.controller('ContactsListController', function($scope, $http) {

	var url = 'dummy_contacts.json';

	$http.get(url).success(function(data, status, headers, config) {
		var lista = JSON.parse(data);
		$scope.contacts = lista;
		console.log('contactos recibidos : ' + lista);
	}).
	error(function(error) {
		console.log('error :: ' + error);
	});

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

