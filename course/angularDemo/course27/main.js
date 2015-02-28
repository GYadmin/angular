var app = angular.module('app',[]);

app.directive('zippy', [function () {
	return {
		restrict:'E',
		transclude:true,
		scope:{
			title:"@"
		},
		templateUrl:'zippy.html',
		link: function (scope) {
			scope.isContentVisible = false;

			socpe.toggleContent = function(){
				scope.isContentVisible = !scope.isContentVisible;
			}
		}
	};
}])

