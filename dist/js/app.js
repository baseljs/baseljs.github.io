var app = angular.module("basel", ["ngRoute",'ngProgress']);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "views/home.html",
		controller : "homeController"
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
	.when('/init',{
		templateUrl : "views/init.html",
		controller : "documentationController"
	})
	.otherwise({
        redirectTo: "/"
    });
	;
});

app.run(function($rootScope,$anchorScroll, ngProgressFactory) {
	var ngProgress = ngProgressFactory.createInstance();
	$rootScope.$on('$routeChangeStart', function() {
	    ngProgress.start();
	});

	$rootScope.$on('$routeChangeSuccess', function() {
	    ngProgress.complete();
	});
});

app.run(['$anchorScroll', function($anchorScroll) {
 	$anchorScroll.yOffset = 80;   // always scroll by 50 extra pixels
}])