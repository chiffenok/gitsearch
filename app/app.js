angular.module('app', [])
    .controller('gitHubDataController', ['$scope', '$http', '$templateCache', function ($scope, $http, $templateCache) {





        $scope.method = 'GET';
        $scope.url = 'tetris';

        $scope.fetch = function () {
            $scope.code = null;
            $scope.response = null;

            $http({
                method: $scope.method,
                url: 'https://api.github.com/search/repositories?q=' + $scope.url,
                cache: $templateCache
            }).
            then(function (response) {
                $scope.status = response.status;
                $scope.data = response.data;
            }, function (response) {
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });
        };

        $scope.reposLoaded = false; //don't use it on this version

        $scope.userLoaded = false;

        $scope.username = "pdsullivan";

        $scope.repoData = "";

        //$scope.loadRepos = function () {
        //    $http.get("https://api.github.com/search/repositories?q=tetris")
        //        .success(function (data) {
        //            $scope.repoData = data;
        //            //loadRepos();
        //        });
        //};
        //loadRepos("angular");

        //var loadRepos = function () {
        //    $http.get($scope.userData.repos_url)
        //        .success(function (data) {
        //            $scope.repoData = data;
        //        });
        //};


        $scope.predicate = '-updated_at';


}]);




/*
{
  "login": "pdsullivan",
  "id": 2042218,
  "avatar_url": "https://avatars.githubusercontent.com/u/2042218?v=2",
  "gravatar_id": "",
  "url": "https://api.github.com/users/pdsullivan",
  "html_url": "https://github.com/pdsullivan",
  "followers_url": "https://api.github.com/users/pdsullivan/followers",
  "following_url": "https://api.github.com/users/pdsullivan/following{/other_user}",
  "gists_url": "https://api.github.com/users/pdsullivan/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/pdsullivan/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/pdsullivan/subscriptions",
  "organizations_url": "https://api.github.com/users/pdsullivan/orgs",
  "repos_url": "https://api.github.com/users/pdsullivan/repos",
  "events_url": "https://api.github.com/users/pdsullivan/events{/privacy}",
  "received_events_url": "https://api.github.com/users/pdsullivan/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Patrick Sullivan",
  "company": "I work at Greenway Health by day and for the voices in my head by night.",
  "blog": "http://www.pdsullivan.com",
  "location": "Birmingham, Alabama",
  "email": "patrick@pdsullivan.com",
  "hireable": true,
  "bio": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 4,
  "following": 7,
  "created_at": "2012-07-25T18:55:33Z",
  "updated_at": "2014-09-26T20:04:12Z"
}

*/