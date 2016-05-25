(function() {
    'use strict';

    angular
        .module('AppModule')
        .factory('stock', stock);

    // factory.$inject = [];

    /* @ngInject */
    function stock() {
        var service = {
            save: function(mobile) {
              var stock = localStorage.getItem('stock');
              if (stock) {
                stock = JSON.parse(stock);
                stock.push(mobile);
                stock = JSON.stringify(stock);
                localStorage.setItem('stock', stock);
              } else {
                stock = [];
                stock.push(mobile);
                stock = JSON.stringify(stock);
                localStorage.setItem('stock', stock);
              }
            },
            get: function() {
              return localStorage.getItem('stock');
            }
        };
        return service;
    }
})();
