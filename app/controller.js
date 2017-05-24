/**
 * Created by obito on 23/05/17.
 */
angular.module('app')
    .controller('MainCtrl', ['$scope', MainCtrl]);

function MainCtrl($scope) {

    $scope.name = 'Angular JS ';
    $scope.showQuota = false;

    $scope.style = {};
    $scope.style.color = "white";

    console.log('Hello I am MainCtrl');

    $scope.clickMe = function () {
        $scope.showQuota = !$scope.showQuota;
    }

}