var app = window.angular.module('app', [])

app.factory("memeFetcher",memeFetcher)
app.controller("mainCtrl", mainCtrl)

function memeFetcher ($http) {

  var API_ROOT = 'memes'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    },
  }

}

function mainCtrl ($scope, memeFetcher,$http) {

  $scope.meme = []
  $scope.politics = [];

  memeFetcher.get()
    .then(function (data) {
      $scope.meme = data
    })
  $scope.addMeme = function() {
  var formData = {name:$scope.Name,avatarUrl:$scope.Url};
  console.log(formData);
  var memeURL = 'memes';
  $http({
     url: memeURL,
     method: "POST",
     data: formData
  }).success(function(data, status, headers, config) {
    console.log("Post worked");
  }).error(function(data, status, headers, config) {
    console.log("Post failed");
  });
}

}
