"use strict";
app.factory("facebookService", function($http, $q){
	var get = function(){
		console.log('aa')
		var deferred = $q.defer();
		FB.api('/baselfwk/insights', function(response) {
			console.log(response)
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