(function() {
  var app = angular.module('redditMod');

  app.controller('subredditCtrl', ['$scope', 'searchStore', function($scope, searchStore) {
    $scope.receiveQuery = function(subreddit, q) {
      searchStore.setQuery($scope.subreddit, $scope.q).then(function() {
        $scope.posts = searchStore.getResults();
      });
    }
  }]);

}());
