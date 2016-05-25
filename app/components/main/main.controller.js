(function() {
    'use strict';

    angular
        .module('AppModule')
        .controller('MainController', mainController);

    mainController.$inject = ['stock'];

    /* @ngInject */
    function mainController(stock) {
        var vm = this;
        console.log(vm.info);
        vm.brand = 'Sony';
        vm.brands = [
          {'name': "Sony"},
          {'name': "Samsung"},
          {'name':"Apple"},
          {'name':"Nokia"},
          {'name':"LG"}
        ];
      vm.stock = stock.get();
      vm.showDetails = function(mobileObj) {
        vm.info = mobileObj
      }
      vm.searchMobiles = function() {
        vm.results = [];
        vm.info = ''
        angular.forEach(stock.get(),function(mobile) {
          console.log(mobile.Model == vm.model && mobile.Brand == vm.brand);
          if (mobile.Model == vm.model && mobile.Brand == vm.brand) {
            vm.results.push(mobile);
          }
        });
        vm.stock = vm.results;
      }
    }
})();
