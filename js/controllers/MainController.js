app.controller('MainController', ['$scope', 'application', function($scope, application) {
  application.success(function(data){
    $scope.applications = data;
  });
}]);
