(function() {
    'use strict';

    angular
        .module('AppModule')
        .controller('AddController', addController);

    addController.$inject = ['stock'];

    /* @ngInject */
    function addController(stock) {
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
          stock.save(vm.mobile);
          window.location = '../main/main.html'
        }
    }
})();
