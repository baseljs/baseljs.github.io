var app = angular.module("basel", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "views/home.html"
	})
});