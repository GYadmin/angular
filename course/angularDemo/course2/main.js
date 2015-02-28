var myApp = angular.module('myApp',[]);

myApp.factory('Avengers', [function () {
	var Avengers = {};
	Avengers.cast = [
		{
			name:"a",
			character:"a"
		},
		{
			name:"b",
			character:"b"
		},
		{
			name:"c",
			character:"c"
		}
	]
	return Avengers;
}])

function AvengersCtrl($scope,Avengers){
	$scope.avengers = Avengers;
}
