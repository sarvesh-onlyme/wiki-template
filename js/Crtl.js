app.controller("wikiCtrl", function($scope, $http){
	$http.get("./data/contributors.json").success(function (response) {
		$scope.data = response;
		contributorsList = response;
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
	}
	$('.nav-sidebar a[href="./"]')[0].parentElement.className = "active-sidebar";

	$scope.showEditRow = function(x) {
		var id = this.x.id;
		if(!this.active) {
			$("[name="+id+"] > td > input").removeClass("ng-hide");
			$("[name="+id+"] > td > span").addClass("ng-hide");
			$("[name="+id+"] > td > a:first-child > span").text("Save");
		}
		else {
			$("[name="+id+"] > td > input").addClass("ng-hide");
			$("[name="+id+"] > td > span").removeClass("ng-hide");
			$("[name="+id+"] > td > a:first-child > span").text("Edit");

			/* Save edited data*/
			var newData = {};
			for (var i = 0; i < attributes.length; i++) {
				var value = $("[name="+id+"] [name="+attributes[i]+"] input").val();
				newData[attributes[i]] = value; 	
			};

			/* Send newData to backend */
			console.log(newData);
		}
		this.active = !this.active;
	};

	$scope.deleteRow = function(x) {
		var id = this.x.id;
		
		/* Send id to backend */
		console.log(id);
	}
});

app.controller("accountCtrl", function($scope, $routeParams, $http){
	$scope.param = $routeParams.param;
	
	/* Get user's details from backend */
	/*$http.get("http://localhost/templates/data/contributors.json").success(function (response) {
		console.log(response);
	});*/

	user = {
		"id": 1,
		"name": "john",
		"username": "john",
		"email": "john@mediawiki.org",
		"organization": "wikimedia",
		"country": "Spain",
		"start_date": "2014-1-1",
		"end_date": "currently"
	};
	$scope.user = user;

	$scope.showEditRow = function(x) {
		if(!this.active) {
			$("table > td > input").removeClass("ng-hide");
			$("table > td > span").addClass("ng-hide");
			$(".edit > a:first-child > span").text("Save");
		}
		else {
			$("name > td > input").addClass("ng-hide");
			$("name > td > span").removeClass("ng-hide");
			$(".edit > a:first-child > span").text("Edit");

			/* Save edited data*/
			var newData = {};
			for (var i = 0; i < attributes.length; i++) {
				var value = $("[name="+attributes[i]+"] input").val();
				newData[attributes[i]] = value; 	
			};

			/* Send newData to backend */
			console.log(newData);
		}
		this.active = !this.active;
	};

});

app.controller("signinCtrl", function($scope, $routeParams){
	$scope.param = $routeParams.param;
});

app.controller("seachCtrl", function($scope, $routeParams){
	$scope.param = $routeParams.param;
});