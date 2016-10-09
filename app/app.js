var app = angular.module('app', ["ngRoute"]);

app.controller('gitHubDataController', ['$scope', '$http', function ($scope, $http) {

    $scope.searchR = "tetris";
    $scope.searchI = "teta";
    $scope.addSearch = false;
    $scope.lang = "assembly";
    $scope.stars = "30";
    $scope.itemsSigns = [
        {
            id: 1,
            name: '>='
        },
        {
            id: 2,
            name: '>'
        },
        {
            id: 3,
            name: '<='
        },
        {
            id: 4,
            name: '<'
        }
   ];
    $scope.itemsSort = [
        {
            id: 1,
            name: 'stars'
        },
        {
            id: 2,
            name: 'forks'
        },
        {
            id: 3,
            name: 'updated'
        }
   ];
    $scope.itemsOrder = [
        {
            id: 1,
            name: 'asc'
        },
        {
            id: 2,
            name: 'desc'
        }
   ];

    function fetchR() {
        var urlRLang = ($scope.lang != '' && $scope.addSearch && $scope.lang) ? ("+language:" + $scope.lang) : "",
            urlRStars = ($scope.stars != '' && $scope.addSearch && $scope.stars) ? ("+stars:" + $scope.selectedItem.name + $scope.stars) : "",
            urlRSort = ($scope.selectedSort != '' && $scope.addSearch && $scope.selectedSort) ? ("&sort=" + $scope.selectedSort.name) : "",
            urlROrder = ($scope.selectedOrder != '' && $scope.addSearch && $scope.selectedOrder) ? ("&order=" + $scope.selectedOrder.name) : "",
            urlR = "https://api.github.com/search/repositories?q=" + $scope.searchR + urlRLang + urlRStars + urlRSort + urlROrder;
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
    $scope.$watchGroup(['searchR', 'addSearch', 'lang', 'stars', 'selectedItem', 'selectedSort', 'selectedOrder'], function () {
        $scope.repositories = '';
        if ($scope.searchR != '') {
            fetchR();
        } else {
            $scope.repositories = '';
        };
    });
    $scope.$watchGroup(['searchI'], function () {
        $scope.issues = '';
        if ($scope.searchI != '') {
            fetchI();
        } else {
            $scope.issues = '';
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