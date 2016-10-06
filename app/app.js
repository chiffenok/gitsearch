var app = angular.module('app', ["ngRoute"]);

app.controller('gitHubDataController', ['$scope', '$http', function ($scope, $http) {

    $scope.searchR = "tetris";
    $scope.searchI = "teta";
    $scope.addSearch = false;
    $scope.lang = "assembly";
    $scope.stars = ">30";

    function fetchR() {
        var urlRLang = ($scope.lang != '' && $scope.addSearch) ? ("+language:" + $scope.lang) : "",
            urlRStars = ($scope.stars != '' && $scope.addSearch) ? ("+stars:" + $scope.stars) : "",
            urlR = "https://api.github.com/search/repositories?q=" + $scope.searchR + urlRLang + urlRStars;
        $http.get(urlR)
            .then(function (response) {
                $scope.repositories = response.data;
            });
        console.log(urlR);
    }

    function fetchI() {
        var urlI = "https://api.github.com/search/issues?q=" + $scope.searchI;
        $http.get(urlI)
            .then(function (response) {
                $scope.issues = response.data;
            });
        console.log(urlI);
    }
    $scope.$watchGroup(['searchR', 'addSearch', 'lang', 'stars'], function () {
        if ($scope.searchR != '') {
            fetchR();
        } else {
            $scope.repositories = '';
        };
    });
    $scope.$watchGroup(['searchI'], function () {
        if ($scope.searchI != '') {
            fetchI();
        } else {

        };
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