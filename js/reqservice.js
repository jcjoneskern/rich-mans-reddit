(function() {
  var app = angular.module('redditMod');

  app.factory('reqStore', function($http) {
    var posts = [];

    return {
      setPosts: function() {
        var promise = $http({
          method: 'GET',
          url: 'https://www.reddit.com/r/aww.json'
        }).then(function successfulCallback(response) {
          posts = response.data.data.children;
        }, function errorCallback(error) {
          console.log(error);
        });
        return promise;
      },
      getPosts: function() {
        return posts;
      }
    };

  });

}());
