"use strict";
app.factory("facebookService", function($http, $q){
	var get = function(){
		return $http.get('https://graph.facebook.com/v2.3/1729814457236827?fields=likes&access_token=EAACEdEose0cBADeJ1xhRuyxuvBMRrWvLhpaeK7lUUk5RqUD2IMa7p1dNWnl4ZCRClU57ovD4JIMgLkNuBZCOr12uY9tD5YGyN332WoFqZBGRYX4PamnWZCJ0WZC8VAc6nwVwhBQjYIljK5BHembZADYAhFqnRIVjGySHCEWysYJgZDZD');
	}
	var get2 = function(){
		var deferred = $q.defer();
        FB.api('/baselfwk', {
            fields: 'likes'
        }, function(response) {
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
		get : get,
		get2: get2
	}
});