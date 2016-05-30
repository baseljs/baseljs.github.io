var app = angular.module("basel", ["ngRoute",'ngProgress']);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "views/home.html",
		controller : "homeController",
		title: "BASEL - Bootstrap, Angular, SQLite and ELectron"
	})
	.when('/documentation',{
		templateUrl : "views/documentation.html",
		title: "BASEL - Full Documentation"
	})
	.when('/prerequisites',{
		templateUrl : "views/prerequisites.html",
		title : "BASEL - Prerequisite Technologies"
	})
	.when('/plataforms',{
		templateUrl : "views/plataforms.html",
		title: "Supported Platforms"
	})
	.when('/instalation',{
		templateUrl : "views/instalation.html",
		title : "BASEL - Installation"
	})
	.when('/init',{
		templateUrl : "views/init.html",
		controller : "documentationController",
		title: "BASEL - Init a App"
	})
	.when('/database',{
		templateUrl : "views/database.html",
		controller : "documentationController",
		title: "BASEL - Database handle "
	})
	.when('/crud',{
		templateUrl : "views/crud.html",
		controller : "documentationController",
		title: "BASEL - CRUD maker"
	})
	.when('/templates',{
		templateUrl : "views/templates.html",
		controller : "documentationController",
		title: "BASEL - Templates"
	})
	.when('/themes',{
		templateUrl : "views/themes.html",
		controller : "documentationController",
		title: "BASEL - Themes"
	})
	.when('/tutorials',{
		templateUrl : "views/tutorials.html",
		controller : "documentationController",
		title: "BASEL - Tutorials"
	})
	.when('/contact',{
		templateUrl : "views/contact.html",
		title: "BASEL - Contact"
	})
	.otherwise({
        redirectTo: "/"
    });
	;
});

app.run(function($window, $location, $rootScope,$anchorScroll, ngProgressFactory) {
	var ngProgress = ngProgressFactory.createInstance();
	$rootScope.$on('$routeChangeStart', function() {
		ngProgress.setColor('blue');
	    ngProgress.start();
	});

	$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
		document.title = current.$$route.title;
	    ngProgress.complete();
	    $window.ga('send', 'pageview', {
            page: $location.path()
        });
	});
});

app.run(['$anchorScroll', function($anchorScroll) {
 	$anchorScroll.yOffset = 80;   // always scroll by 50 extra pixels
}]);

