/**
 * Created by obito on 21/05/17.
 */
angular.module('app')
    .controller('ProductsCtrl', ['$scope','$uibModal','DB','$http','$state',ProductsCtrl]);

function ProductsCtrl($scope,$uibModal,DB,$http,$state) {

    console.log('Hello I am ProductsCtrl');

    $scope.products = [];

    $scope.products = DB.get('products');

    if($scope.products==undefined || $scope.products==null){
        let holder = $http.get('/api/products');
        holder.then(function (res) {
            $scope.products = res.data;
            DB.set('products' , $scope.products);
        },function (err) {
            $state.go('/home');
        });
    }

    $scope.buy = function (productID) {

        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '/templates/product.dialog.html',
            controller: ['$scope','$uibModalInstance','product',
                function($scope,$uibModalInstance , product) {
                $scope.product = product;
                    $scope.ok = function(){ $uibModalInstance.close(product); };
                    $scope.cancel = function () { $uibModalInstance.dismiss('cancel'); };
                }],
            size: 'lg',
            resolve: {
                product: function() {
                    return $scope.products[productID];
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
            console.info('Modal closed at: ' + new Date());
        }, function () {
            console.info('Modal dismissed at: ' + new Date());
        });
    };


}