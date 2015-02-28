var app = angular.module('choreApp',[]);

app.controller('AppCtrl', ['$scope', function ($scope) {
	$scope.ctrlFlavor = "blackberry";
}]);

app.directive('drink', [function () {
	return {
		scope:{
			flavor:"@"
		},
		template:'<div>{{flavor}}</div>',
	};
}])


