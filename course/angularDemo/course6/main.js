var app = angular.module('superApp',[]);

app.directive('superhero', [function () {
	return {
		restrict: 'E',
		scope:{},
		controller:function($scope){
			$scope.abilities = [];

			this.addStength = function(){
				$scope.abilities.push("strength");
			}

			this.addSpeed = function(){
				$scope.abilities.push("speed")
			}

			this.addFlight = function(){
				$scope.abilities.push("flight");
			}
		},
		link: function (scope, iElement, iAttrs) {
			iElement.addClass("button");
			iElement.bind("mouseenter",function(){
				console.log(scope.abilities);
			});
		}
	};
}])

app.directive('strength', [function () {
	return {
		require:"superhero",
		link: function (scope, iElement, iAttrs,superheroCtrl) {
			superheroCtrl.addStength();
		}
	};
}])

app.directive('speed', [function () {
	return {
		require:"superhero",
		link: function (scope, iElement, iAttrs,superheroCtrl) {
			superheroCtrl.addSpeed();
		}
	};
}])

app.directive('flight', [function () {
	return {
		require:"superhero",
		link: function (scope, iElement, iAttrs,superheroCtrl) {
			superheroCtrl.addFlight();
		}
	};
}])