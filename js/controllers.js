 app.controller('controller1', function($scope) {
    $scope.firstName= "sodam yat";
    $scope.changeName = function() {
    	$scope.firstName= "mogo";
    }
  });