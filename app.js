(function() {
  var app = angular.module("redditMod", []);

  app.controller('redditCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('https://www.reddit.com/r/aww.json').then(function(response) {
      $scope.posts = response.data.data.children;
    });
  }]);
})();
