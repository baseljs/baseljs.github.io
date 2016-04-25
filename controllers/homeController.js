"use strict";
app.controller("homeController", function($scope, $location, githubService, npmService, facebookService){
	$scope.init = function(){
		githubService.repo().success(function(data){
			$scope.repo = data;
			$scope.repo.latest_commit = (new Date(data.pushed_at)).toString().substring(4,15);
		});
		githubService.releases().success(function(data){
			$scope.releases = data;
			$scope.latest = data[0];
		});
		npmService.get().success(function(data){
			$scope.npm = data;
		});
		facebookService.get().success(function(data){
			$scope.facebook = data;
		});
		facebookService.get2().then(function(response) {
      		console.log(response)
     	});

     	FB.api('/me', function(res) {

    		console.log(res)

    	});

	}
});