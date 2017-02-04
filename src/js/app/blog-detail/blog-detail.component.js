'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function($http, $location, $routeParams, $scope){

            $http.get("/json/posts.json").then(successCallback, errorCallback);

            function successCallback(response, status, config, statusText) {
                $scope.notFound = true
                console.log(response.data)
                var blogItems = response.data
                $scope.posts = blogItems
                angular.forEach(blogItems, function(post){
                    if (post.id == $routeParams.id){
                        $scope.notFound = false
                        $scope.post = post
                    }
                })
            }

            function errorCallback(response, status, config, statusText) {
                console.log(response)
            }

            if ($scope.notFound){
                console.log('Not found')
                // change location
                $location.path("/")
            }



            // console.log($routeParams)
            // $scope.title = "Blog " + $routeParams.id


        }
    });
