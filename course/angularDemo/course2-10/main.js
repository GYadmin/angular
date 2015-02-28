var app = angular.module('app',[]);

app.controller('MyCtrl', ['$scope', function ($scope) {
	$scope.loadData = function(){
		console.log("Loading");
	}
}])

app.controller('MyCtrl2', ['$scope', function ($scope) {
	$scope.loadData2 = function(){
		console.log("Loading");
	}
}])

app.directive('loader', [function () {
	return {
		restrict: 'AE',
		link: function (scope, iElement, iAttrs) {
			element.bind("mouseenter",function(){
				//scope.loadData();
				scope.$apply("loadData()");
			});
		}
	};
}])
