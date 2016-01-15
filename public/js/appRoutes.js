angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/component', {
			templateUrl: 'views/component.html',
			controller: 'ComponentController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		});

	$locationProvider.html5Mode(true);

}]);