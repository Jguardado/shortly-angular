"use strict";

describe('LinksController', function () {
  var $scope, $rootScope, createController, Links, $httpBackend, $controller;
  
  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('shortly'));
  beforeEach(inject(function($injector) {

    // mock out our dependencies
    console.log('before each running >>>>>>>>>>');
    $rootScope = $injector.get('$rootScope');
    console.log('<<<<<<<<<<<<<<<0>>>>>>>>>>', $controller);
    $httpBackend = $injector.get('$httpBackend');
    console.log('<<<<<<<<<<<<<<<00>>>>>>>>>>', $injector);
    //broken!!
    Links = $injector.get('Links'); 
    console.log('<<<<<<<<<<<<<<<1>>>>>>>>>>', $controller);
    $scope = $rootScope.$new();
    console.log('<<<<<<<<<<<<<<<2>>>>>>>>>>', $controller);
    $controller = $injector.get('$controller');

    createController = function () {
      console.log('creating controller! >>>', $controller);
      $controller('LinksController', {
        $scope: $scope,
        Links: Links,
      });
      return $controller;
    };
    console.log('injected controller >>>>>>>>>>', $controller);
  }));

  it('should have a data property on the $scope', function() {
    console.log("HERE!!!!", createController);
    createController();
    console.log("ALSO HERE!!!!")
    expect($scope.data).to.be.an('object');
  });

  it('should have a getLinks method on the $scope', function () {
    createController();
    expect($scope.getLinks).to.be.a('function');
  });
  it('should call getLinks() when controller is loaded', function () {
    var mockLinks = [{},{},{}];
    $httpBackend.expectGET("/api/links").respond(mockLinks);
    createController();
    $httpBackend.flush();
    expect($scope.data.links).to.eql(mockLinks);
  });
});
