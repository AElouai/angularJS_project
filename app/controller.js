/**
 * Created by obito on 23/05/17.
 */
angular.module('app')
    .controller('MainCtrl', ['$scope','DB','Options', MainCtrl]);

function MainCtrl($scope,DB,Options) {

    $scope.style = {};
    $scope.style.color = Options.getColor() ;
    
    console.log('Hello I am MainCtrl');

    $scope.setColor = function (color) {
        Options.setColor('color' , color);
    }

}