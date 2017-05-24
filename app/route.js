/**
 * Created by obito on 24/05/17.
 */
function config($stateProvider, $urlRouterProvider,$locationProvider) {


    $urlRouterProvider.otherwise("/Home");

    $stateProvider
        .state('Home', {
            url: "/Home",
            templateUrl: "templates/Home.html"
        })
        .state('Products', {
            url: "/Products",
            templateUrl: "templates/Products.html"
        })
        .state('Product', {
            url: "/Product",
            templateUrl: "templates/Product.html"
        })
        .state('About', {
            url: "/About",
            templateUrl: "templates/About.html"
        });


    // $locationProvider.html5Mode(true).hashPrefix('!');

}
angular.module('app')
    .config(config);