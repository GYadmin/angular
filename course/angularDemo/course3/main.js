var myApp = angular.module('superhero',[]);

myApp.directive('superman', [function () {
	return {
		restrict: 'A',
		link:function(){
			alert("I am working strong");
		}
	};
}])

myApp.directive('flash', [function () {
	return {
		restrict: 'A',
		link:function(){
			alert("I am working faster");
		}
	};
}])