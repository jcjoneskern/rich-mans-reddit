(function() {
  var app = angular.module('redditMod');

  app.factory('searchStore', function($http) {
    var results = [];

    return {
      setQuery: function(q) {
        console.log(q);
        var promise = $http({
          method: 'GET',
          url: 'https://www.reddit.com/r/aww/search/.json?q=' + q +'&restrict_sr=true'
        }).then(function successfulCallback(response) {
          results = response.data.data.children;
          console.log(results);
        }, function errorCallback(error) {
          console.log(error);
        });
        return promise;
      },
      getResults: function() {
        console.log("hi");
        return results;
      }
    };
  });

}());
