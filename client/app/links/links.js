angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links:[{},{},{}]
  };
  $scope.getLinks = function(){};

  $scope.getLinks();
});
