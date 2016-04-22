var app = angular.module("basel", ["ngRoute",'ngProgress']);

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

app.run(function($rootScope, ngProgressFactory) {
	var ngProgress = ngProgressFactory.createInstance();
  $rootScope.$on('$routeChangeStart', function() {
    ngProgress.start();
  });

  $rootScope.$on('$routeChangeSuccess', function() {
    ngProgress.complete();
  });
  // Do the same with $routeChangeError
});