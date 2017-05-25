/**
 * Created by obito on 25/05/17.
 */
'use strict';

angular.module('app')
    .directive('productRating', productRating)
    .controller("productRatingController", productRatingController);

function productRatingController($scope) {

    this.initialize = function (min, max) {
        $scope.preview = -1;
        $scope.stars = new Array(max - min + 1);
    };

    $scope.click = function ($index) {
        $scope.value = $index + 1;
    };

    $scope.mouseover = function ($index) {
        $scope.preview = $index;
    };

    $scope.mouseout = function () {
        $scope.preview = -1;
    };

    $scope.styles = function ($index) {
        return {
            "glyphicon": true,
            "glyphicon-star": $index < $scope.value,
            "glyphicon-star-empty": $index >= $scope.value,
            "ratingpreview": $index <= $scope.preview
        };
    };
};

function productRating() {

    return {
        scope: {
            value: "="
        },
        require: "productRating",
        templateUrl: "/templates/rating.drctv.html",
        controller: "productRatingController",
        link: function (scope, element, attributes, controller) {

            var min = parseInt(attributes.min || "1");
            var max = parseInt(attributes.max || "10");

            controller.initialize(min, max);
        }
    };
};