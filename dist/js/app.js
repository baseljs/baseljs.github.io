var app = angular.module("basel", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "views/home.html",
		controller: "homeController"
	})
	.when('/prerequisites',{
		templateUrl : "views/prerequisites.html"
	})
	.when('/plataforms',{
		templateUrl : "views/plataforms.html"
	})
	;
});