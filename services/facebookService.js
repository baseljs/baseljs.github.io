"use strict";
app.factory("facebookService", function($http, $q){
	var get = function(){
		var deferred = $q.defer();
		FB.api('/baselfwk', function(response) {
			if (!response || response.error) {
				deferred.reject('Error occured');
			} else {
				deferred.resolve(response);
			}
		});
		return deferred.promise;
	}



	return {
		get : get
	}
});