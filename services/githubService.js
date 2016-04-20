"use strict";
app.factory("githubService", function($http){
	var __repo = function(){
		return $http.get('https://api.github.com/repos/baseljs/basel');
	}

	var __releases = function(){
		return $http.get('https://api.github.com/repos/baseljs/basel/releases');
	}

	return {
		repo: __repo,
		releases: __releases
	};
});