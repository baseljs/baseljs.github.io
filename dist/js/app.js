var app = angular.module("basel", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "views/home.html",
		controller: "homeController"
	})
	.when('/documentation',{
		templateUrl : "views/documentation.html"
	})
	.when('/prerequisites',{
		templateUrl : "views/prerequisites.html"
	})
	.when('/plataforms',{
		templateUrl : "views/plataforms.html"
	})
	.when('/instalation',{
		templateUrl : "views/instalation.html"
	})
	;
});