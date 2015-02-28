var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/map/:country/:state/:city',{templateUrl:'app.html',controller:'AppCtrl'})
	.when('/pizza',{
		redirectTo:function(routeParams,path,search){
			console.log(routeParams);
			console.log(path);
			console.log(search);
			return "/"
		};
	})
	.otherwise(
		{redirectTo:"/"}
	)

});

app.controller('AppCtrl', ['$scope','$routeParams', function($scope,$routeParams){
	$scope.model = {
		message: "Address: " + $routeParams.country + " ,"+
		$routeParams.state + " ,"+
		$routeParams.city
	};
}]);

