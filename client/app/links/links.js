angular.module('shortly.links', ['shortly.services' ])

.controller('LinksController',['$scope', 'Links', '$http', function ($scope, Links, $http) {
  // Your code here
  $scope.data = {
    links:[{},{},{}]
  };
  $scope.getLinks = function(){
    return Links.getLinks();
  };

  $scope.getLinks();
}]);
