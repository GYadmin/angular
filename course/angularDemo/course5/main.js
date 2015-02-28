var app = angular.module('twitterApp',[]);

app.controller('AppCtrl', ['$scope', function ($scope) {
	$scope.loadMoreTweets = function(){
		alert("Load tweets!");
	}

	$scope.deleteTweets = function(){
		alert("deleteing tweets!");
	}
}])

app.directive('enter', [function () {
	return {
		link: function (scope, iElement, iAttrs) {
			iElement.bind("mouseenter",function(){
				scope.$apply(iAttrs.enter);
			})
		}
	};
}])