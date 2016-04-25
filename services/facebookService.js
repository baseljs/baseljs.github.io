"use strict";
app.factory("facebookService", function($http, $q){
	var get = function(){
		return $http.get('https://graph.facebook.com/v2.3/1729814457236827?fields=likes&access_token=215280912186066|2m1TrZ6Mt_he_PHqNqIdi9R-y7k');
	}
	var get2 = function(){
		var deferred = $q.defer();
		FB.api(
			'/baselfwk',
			'GET',
			{"fields":"fan_count"},
			function(response) {
				console.log(response)
				if (!response || response.error) {
					deferred.reject('Error occured');
				} else {
					deferred.resolve(response);
				}
			}
			);
		return deferred.promise;
	}
	return {
		get : get,
		get2: get2
	}
});