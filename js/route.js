app.config(function($routeProvider){
	$routeProvider
		.when( '/contributor', {
			controller: 'contributorCtrl',
			templateUrl: 'views/contributors.html',
		})
		.when( '/home', {
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
		});
});