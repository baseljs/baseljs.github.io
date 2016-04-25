"use strict";
app.factory("npmService", function($http){
	var get = function(){
		return $http.get('https://api.npmjs.org/downloads/point/last-month/basel');
	}

	return {
		get : get
	}
});