var app = angular.module('app', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/repositories", {
            templateUrl: "templates/repos.html"
        })
        .when("/issues", {
            templateUrl: "templates/issues.html"
        })
        .otherwise({
            templateUrl: "templates/repos.html"
        });
});

app.controller('gitHubDataController', ['$scope', '$http', '$templateCache', '$routeParams', function ($scope, $http, $templateCache, $routeParams) {

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

    console.log($routeParams);

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