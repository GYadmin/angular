var app = angular.module('app',[]);

app.controller('MyCtrl', ['$scope', function (a) {
	console.log(a);
}]);

app.directive('mydirective', [function () {
	return {
		restrict:'E',
		link: function (element,scope,attrs) {
			console.log(element);
		}
	};
}])

