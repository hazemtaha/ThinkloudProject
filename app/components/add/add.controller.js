(function() {
    'use strict';

    angular
        .module('AppModule')
        .controller('AddController', addController);

    // Controller.$inject = [];

    /* @ngInject */
    function addController() {
        var vm = this;
        vm.mobile = {};
        vm.mobile.Brand = 'Sony';
        vm.mobile.Memory = '16G';
        vm.memorySizes = ['16G','32G','64G','128G'];
        vm.brands = [
          {'name': "Sony"},
          {'name': "Samsung"},
          {'name':"Apple"},
          {'name':"Nokia"},
          {'name':"LG"}
        ];
        vm.addMobile = function() {
          var stock = localStorage.getItem('stock');
          if (stock) {
            stock = JSON.parse(stock);
            stock.push(vm.mobile);
            stock = JSON.stringify(stock);
            localStorage.setItem('stock', stock);
          } else {
            stock = [];
            stock.push(vm.mobile);
            stock = JSON.stringify(stock);
            localStorage.setItem('stock', stock);
          }
        }
    }
})();
