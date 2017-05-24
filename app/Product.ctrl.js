/**
 * Created by obito on 21/05/17.
 */
angular.module('app')
    .controller('ProductCtrl', ['$scope','$state','$stateParams', ProductCtrl]);

function ProductCtrl($scope  , $state , $stateParams ) {

    console.log('Hello I am ProductCtrl');


    $scope.start = function(){
        $scope.id = $stateParams.id;
        $scope.product =  $stateParams.object;
    };
    $scope.start();
}