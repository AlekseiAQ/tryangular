'use strict';

angular.module('blogList').
    component('blogList', {
        templateUrl: '/templates/blog-list.html',
        controller: function($scope){
            var blogItems = [
                {title: 'Some Title', id: 1, description: "This is a book", publishDate: "2017-02-03"},
                {title: 'Django', id: 2, description: "This is a book"},
                {title: 'Python', id: 3, description: "This is a book"},
                {title: 'JS', id: 4, description: "This is a book"},
            ]

            $scope.items = blogItems

            $scope.title = 'Hi there'
            $scope.clicks = 0
            $scope.someClickTest = function() {
                $scope.clicks += 1
                $scope.title = 'Clicked ' + $scope.clicks + ' times'
            }
        }
    });

// controller('BlogListController', function($scope) {
//     console.log('hello')
//     $scope.title = 'Hi there'
//     $scope.clicks = 0
//     $scope.someClickTest = function() {
//         $scope.clicks += 1
//         $scope.title = 'Clicked ' + $scope.clicks + ' times'
//     });
