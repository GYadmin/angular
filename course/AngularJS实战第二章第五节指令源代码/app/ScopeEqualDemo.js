var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor="百威";
	$scope.DEFAULT_LEAVES = [{
			id: 'default_',
			name: 'Green Leaf',
			description: 'My Green leaf'
		}];
	$scope.loadData=function(){
		var date =	[{
				id: 'default_',
				name: 'Blue Leaf',
				description: 'My Blue leaf'
			}, {
				id: 'default_',
				name: 'Yellow Leaf',
				description: 'My Yellow leaf'
			}, {
				id: 'default_',
				name: 'Happy Green Leaf',
				description: 'My Happy Green leaf'
			}, {
				id: 'default_',
				name: 'Red Leaf',
				description: 'My Red leaf'
			}, {
				id: 'default_',
				name: 'Pink Leaf',
				description: 'My Pink leaf'
			}, {
				id: 'default_',
				name: 'Lucky Leaf',
				description: 'My Lucky leaf'
			}, {
				id: 'default_',
				name: 'Bright Star Leaf',
				description: 'My Bright Star leaf'
			}, {
				id: 'default_',
				name: 'Purple Leaf',
				description: 'My Purple leaf'
			}, {
				id: 'default_',
				name: 'Violet Leaf',
				description: 'My Violet leaf'
			}];
		    $scope.DEFAULT_LEAVES.push(date);
    }
}])
myModule.directive("hello", function() {
    return {
    	restrict: 'AECM',
        templateUrl: 'table.html',
        link:function(scope,element,attrs){
    		element.bind('onload', function(event) {
    			scope.loadData();
    		});
        }
    }
});