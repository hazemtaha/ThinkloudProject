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
                var index = stock.push(mobile);
                stock[index-1].id = index-1;
                stock = JSON.stringify(stock);
                localStorage.setItem('stock', stock);
              } else {
                stock = [];
                var index = stock.push(mobile);
                stock[index-1].id = index-1;
                stock = JSON.stringify(stock);
                localStorage.setItem('stock', stock);
              }
            },
            get: function() {
              return JSON.parse(localStorage.getItem('stock'));
            }
        };
        return service;
    }
})();
