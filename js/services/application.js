app.factory('application', ['$http', function($http){
	return $http.get('../api.json').success(function(data){
  	return data;
  }).error(function(err){
  	return err;
  });
}]);
