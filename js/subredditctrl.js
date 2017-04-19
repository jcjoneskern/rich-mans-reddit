(function() {
  var app = angular.module('redditMod');

  app.controller('subredditCtrl', ['$scope', 'reqStore', function($scope, reqStore) {
    reqStore.setPosts().then(function() {
      $scope.posts = reqStore.getPosts();
    });
  }]);

}());
