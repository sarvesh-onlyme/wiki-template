app.config(function($routeProvider){
	$routeProvider
		.when( '/', {
			controller: 'homeCtrl',
			templateUrl: 'views/home.html',
		})
		.when( '/account', {
			controller: 'accountCtrl',
			templateUrl: 'views/account.html',
		})
		.when( '/signin', {
			controller: 'signinCtrl',
			templateUrl: 'views/signin.html',
		})
		.when( '/country', {
			controller: 'countryCtrl',
			templateUrl: 'views/country.html',
		})
		.when( '/company', {
			controller: 'companyCtrl',
			templateUrl: 'views/company.html',
		});
});