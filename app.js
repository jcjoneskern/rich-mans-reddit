var app = angular.module("redditMod", []);

app.controller('redditCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('https://www.reddit.com/r/aww.json').then(function(response) {
    var redditData = response.data.data.children;
    console.log(redditData);
    $scope.posts = redditData;
  });


}]);
