/**
 * Created by obito on 21/05/17.
 */
angular.module('app')
    .controller('ProductCtrl', ['$scope','$state','$stateParams','$http', ProductCtrl]);

function ProductCtrl($scope  , $state , $stateParams,$http ) {

    console.log('Hello I am ProductCtrl');

    $scope.getDescription = function (id){
        let holder = $http.get('/api/product/'+id);
        holder.then(function (res) {
            $scope.product = res.data;
        },function (err) {
            $state.go('/home');
        });
    }
    $scope.start = function(){
        $scope.id = $stateParams.id;
        $scope.getDescription($scope.id);
        // $scope.product =  $stateParams.object;
    };
    $scope.start();
}