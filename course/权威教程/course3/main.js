var myApp = angular.module('myApp',[]);

myApp.factory('Date', [function () {
	return {
		message:"I'm date from a service"
	};
}])

myApp.filter('reverse', [function() {
	return function(text){
		return text.split("").reverse().join("");
	}
}])

function FirstCtrl($scope,Date){
	$scope.data = Date;
}

function SecondCtrl($scope,Date){
	$scope.data = Date;
	$scope.reveredMessage = function(message){
		return message.split("").reverse().join("");
	}
}
