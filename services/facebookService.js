"use strict";
app.factory("facebookService", function($http, $q){
	var get = function(){
		return $http.get('https://graph.facebook.com/v2.3/1729814457236827?fields=likes&access_token=EAACEdEose0cBADeJ1xhRuyxuvBMRrWvLhpaeK7lUUk5RqUD2IMa7p1dNWnl4ZCRClU57ovD4JIMgLkNuBZCOr12uY9tD5YGyN332WoFqZBGRYX4PamnWZCJ0WZC8VAc6nwVwhBQjYIljK5BHembZADYAhFqnRIVjGySHCEWysYJgZDZD');
	}
	return {
		get : get
	}
});