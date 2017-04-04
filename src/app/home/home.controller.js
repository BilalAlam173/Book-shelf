(function () {
    'use strict';

    angular.module('bookshelf')
        .controller('homeControler', homeController);


    function homeController($scope) {
        console.log('loaded');
    }

})();
