/**
 * Created by obito on 21/05/17.
 */
angular.module('app')
    .controller('HomeCtrl', ['$scope',HomeCtrl]);

function HomeCtrl($scope) {

    console.log('Hello I am HomeCtrl');

    $scope.name = 'Angular JS ';
    $scope.showQuota = false;


    $scope.clickMe = function () {
        $scope.showQuota = !$scope.showQuota;
    }
}