/**
 * Created by obito on 24/05/17.
 */
'use strict';

function config($stateProvider, $urlRouterProvider,$locationProvider) {


    $urlRouterProvider.otherwise("/Home");

    $stateProvider
        .state('Home', {
            url: "/Home",
            controller: "HomeCtrl",
            templateUrl: "templates/Home.html"
        })
        .state('Products', {
            url: "/Products",
            controller: "ProductsCtrl",
            templateUrl: "templates/Products.html"
        })
        .state('Product', {
            url: "/Product/:id",
            controller: "ProductCtrl",
            params: {object: null},
            templateUrl: "templates/Product.html"
        })
        .state('About', {
            url: "/About",
            controller: "AboutCtrl",
            templateUrl: "templates/About.html"
        })


    // $locationProvider.html5Mode(true).hashPrefix('!');

}
angular.module('app')
    .config(config)