(function() {
  var app = angular.module('redditMod');

  app.controller('subredditCtrl', ['$scope', 'reqStore', 'searchStore', function($scope, reqStore, searchStore) {
    reqStore.setPosts().then(function() {
      $scope.posts = reqStore.getPosts();
    });

    $scope.receiveQuery = function(q) {
      searchStore.setQuery($scope.q).then(function() {
        $scope.posts = searchStore.getResults();
      });
    }

  }]);

}());
