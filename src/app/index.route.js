(function () {
    'use strict';

    angular.module('bookshelf')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '', 
            templateUrl: 'app/home/home.html',
            controller: 'homeController',
            controllerAs: 'homeControllerVm'


        });
       
    });
})();
