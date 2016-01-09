angular.module('shortly.links', ['shortly.services'])

.controller('LinksController',['$scope', 'Links', 'Auth','$http', function ($scope, Links, Auth, $http) {
  // Your code here
  $scope.data = {
    links:[]
  };
  $scope.getLinks = function(){
    $scope.data = {};
  
    Links.getLinks().then(function(value){
      $scope.data = {
        links: value
      }
    }) 
  };

  $scope.useLink = function(code){
    //console.log('controller using link');
    Links.useCode(code).finally(function(){
      console.log('here');
      $scope.getLinks();
    });
  }

  $scope.signOut = function(){
    console.log('signing out');
    Auth.signout();
  }

  $scope.getLinks();
}]);
