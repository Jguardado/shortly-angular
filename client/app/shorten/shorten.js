angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.showMessage = false;
  $scope.message = "";

   var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  $scope.addLink = function(url){
    
    Links.addLink(url);

  }

  $scope.submitForm = function(valid,url){
    if(!valid || !url.match(rValidUrl)){
      $scope.message = "Invalid URL";
      $scope.showMessage = true;
    }else{
      console.log(url);
      $scope.message = "Shortening URL";
      $scope.showMessage = true;
      Links.addLink(url).then(function(resp){
        console.log(resp);
        
        if(resp.status === 200){
          $scope.message = "Successfully added";
        }else{
          $scope.message = "Server broke :(";
        }
        $scope.showMessage = true;

      });
    }
  }

});
