"use strict";
app.controller("documentationController", function($scope, $location, $anchorScroll){
	$scope.init = function(){
		if($location.hash()){
			$scope.gotoAnchor($location.hash())
		}
	}
	$scope.gotoAnchor = function(newHash) {
		if ($location.hash() !== newHash) {
	        $location.hash(newHash);
	    } else {
	        $anchorScroll();
	    }
	};
});