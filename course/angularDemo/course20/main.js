var app = angular.module('choreApp',[]);

app.controller('AppCtrl', ['$scope', function ($scope) {
	$scope.leaveVoicemail = function(number,message){
		alert("Number:"+number+" said:"+message);
	}
}]);

app.directive('phone', [function () {
	return{
		restrict:"E",
		scope:{
			number:"@",
			network:"=",
			makeCall:"&"
		},
		template:'<div class="panel">Number:{{number}} Network:<select ng-model="network" ng-options="network"></select></div>'+
		'<input type="text" ng-model="value" />'+
		'<div class="button" ng-click="makeCall({number:number,message:value})">Call</div>',
		link:function(scope){
			scope.network = ["Verizon","AT&T","sprint"];
			scope.network = scope.network[0]
		}		
	}
}])


