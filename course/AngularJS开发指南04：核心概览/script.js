angular.module('drag', []).
directive('draggable', function($document) {
    var startX=0, startY=0, x = 0, y = 0;
    return function(scope, element, attr) {
      element.css({
       position: 'relative',
       border: '1px solid red',
       backgroundColor: 'lightgrey',
       cursor: 'pointer'
      });
      element.bind('mousedown', function(event) {
        startX = event.screenX - x;
        startY = event.screenY - y;
        $document.bind('mousemove', mousemove);
        $document.bind('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.screenY - startY;
        x = event.screenX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.unbind('mousemove', mousemove);
        $document.unbind('mouseup', mouseup);
      }
    }
 });

// 0401
function GreetCtrl($scope) {
  $scope.name = 'World';
}

function ListCtrl($scope) {
  $scope.names = ['Igor', 'Misko', 'Vojta'];
}

// 0402
function MyCtrl($scope) {
  $scope.action = function() {
    $scope.name = 'OK';
  }

  $scope.name = 'World';
}

// modeule & injector
angular.module('timeExampleModule', []).
  // Declare new object call time,
  // which will be available for injection
  factory('time', function($timeout) {
    var time = {};

    (function tick() {
      time.now = new Date().toString();
      $timeout(tick, 1000);
    })();
    return time;
  });

// Notice that you can simply ask for time
// and it will be provided. No need to look for it.
function ClockCtrl($scope, time) {
  $scope.time = time;
}