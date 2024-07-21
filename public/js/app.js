var app = angular.module('mydia',['ngRoute','ngSanitize']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: '../../app/views/home.html',
        controller:'homeCtrl'
    })
    .when('/detail/:id',{
        templateUrl: '../../app/views/detail.html',
        controller:'detailCtrl'
    })
    .otherwise({
        redirectTo: '/'
    })
})