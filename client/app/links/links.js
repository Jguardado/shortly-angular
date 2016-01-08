angular.module('shortly.links', ['shortly.services' ])

.controller('LinksController',['$scope', 'Links', '$http', function ($scope, Links, $http) {
  // Your code here
  $scope.data = {
    links:[]
  };
  $scope.getLinks = function(value){
    $scope.data = {};
  
    Links.getLinks().then(function(value){
      $scope.data = {
        links: value
      }
    }) 
  };

  $scope.useLink = function(code){
    //console.log('controller using link');
    Links.useCode(code);
  }

  $scope.getLinks();
}]);
