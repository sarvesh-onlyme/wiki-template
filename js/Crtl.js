app.controller("wikiCtrl", function($scope, $http){
	$http.get("./data/contributors.json").success(function (response) {
		$scope.data = response;
	});
});

app.controller("contributorCtrl", function($scope, $routeParams){
	$scope.param = $routeParams.param;
	var attr = $('.nav-sidebar li');
	for (var i = 0; i < attr.length; i++) {
		attr[i].className = "";
	};
	$('.nav-sidebar a[href="#/contributor"]')[0].parentElement.className = "active-sidebar";
});

app.controller("homeCtrl", function($scope, $routeParams){
	$scope.param = $routeParams.param;
	var attr = $('[role="presentation"]');
	for (var i = 0; i < attr.length; i++) {
		attr[i].className = "";
	};
	$('.nav-sidebar a[href="./"]')[0].parentElement.className = "active-sidebar";
});

app.controller("accountCtrl", function($scope, $routeParams, $http){
	$scope.param = $routeParams.param;
	/* Get user's details from backend
	$http.get("http://localhost/templates/data/contributors.json").success(function (response) {
		console.log(response);
	});*/
	user = {
		"id": 1,
		"name": "john",
		"username": "john",
		"email": "john@mediawiki.org",
		"organization": "wikimedia",
		"start_date": "2014-1-1",
		"end_date": "currently"
	};
	$scope.user = user;
});

app.controller("signinCtrl", function($scope, $routeParams){
	$scope.param = $routeParams.param;
});