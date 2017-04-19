(function() {
  var app = angular.module('redditMod');

  app.factory('searchStore', function($http) {
    var results = [];

    return {
      setQuery: function(subreddit, q) {
        if(q !== undefined) {
          var promise = $http({
            method: 'GET',
            url: 'https://www.reddit.com/r/' + subreddit + '/search/.json?q=' + q +'&restrict_sr=true'
          }).then(function successfulCallback(response) {
            results = response.data.data.children;
          }, function errorCallback(error) {
            results = 'Please try your search again.'
            console.log(error);
          });
          return promise;
        } else {
          var promise = $http({
            method: 'GET',
            url: 'https://www.reddit.com/r/' + subreddit + '/.json'
          }).then(function successfulCallback(response) {
            results = response.data.data.children;
          }, function errorCallback(error) {
            console.log(error);
          });
          return promise;
        }
      },
      getResults: function() {
        return results;
      }
    };

  });

}());
