var app = angular.module('behaviorApp',[]);

app.directive('enter', [function () {
	return function (scope, iElement,attributes){
		iElement.bind("mouseenter",function(){
			iElement.addClass(attributes.enter);
		})
	}
}])

app.directive('leave', [function () {
	return function (scope, iElement,attributes){
		iElement.bind("mouseleave",function(){
			iElement.removeClass(attributes.enter);
		})
	}
}])
