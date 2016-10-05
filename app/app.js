var app = angular.module('app', ["ngRoute"]);

app.controller('gitHubDataController', ['$scope', '$http', function ($scope, $http) {

    // old approach
    $scope.method = 'GET';
    $scope.urlI = 'tetris';
    $scope.urlR = 'css';
    $scope.reposLoaded = false;
    $scope.userLoaded = false;
    $scope.searchRepositories = function (url) {
            $scope.repositories = $scope.fetch(url, 'repositories');
        }
        //old approach
    $scope.searchIssues = function (url) {
            $scope.issues = $scope.fetch(url, 'issues');
        }
        //old approach
    $scope.predicate = '-updated_at';

    $scope.fetch2 = function (url, param) {
        $scope.code = null;
        $scope.response = null;

        $http({
            method: $scope.method,
            url: 'https://api.github.com/search/' + param + '?q=' + url,
            cache: $templateCache
        }).
        then(function (response) {
            $scope.status = response.status;
            $scope.data = response.data;
        }, function (response) {
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
        });

        return $scope.data;
    };

    $scope.search = "tetris";

    function fetch() {
        $http.get("https://api.github.com/search/repositories?q=" + $scope.search)
            .then(function (response) {
                $scope.repositories = response.data;
            });

        $http.get("https://api.github.com/search/issues?q=" + $scope.search)
            .then(function (response) {
                $scope.issues = response.data;
            });
    }
    $scope.$watch('search', function () {
        fetch();
    });

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

}]);