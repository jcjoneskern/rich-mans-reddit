(function() {
  var app = angular.module("redditMod", []);

  app.directive("postView", function(){
    return {
      restrict: "E",
      templateUrl: "postpartial.html",
      replace: false
    }
  });

})();


// TODO:
// * add text input to allow searching
// * try making the subreddit selectable like the old version
