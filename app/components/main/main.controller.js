(function() {
    'use strict';

    angular
        .module('AppModule')
        .controller('MainController', mainController);

    // Controller.$inject = [];

    /* @ngInject */
    function mainController() {
        var vm = this;
        vm.brand = 'Sony';
        vm.brands = [
          {'name': "Sony"},
          {'name': "Samsung"},
          {'name':"Apple"},
          {'name':"Nokia"},
          {'name':"LG"}
        ];
      var stock = [
        {'id': 1,'Brand': 'Sony','Model': "C3", 'Year': "2015",'Memory': '16G',
         'Dual Sim': true,'NFC': true , 'Color': 'White'},
        {'id': 2,'Brand': 'Apple','Model': "IPhone 6", 'Year': "2016",'Memory': '32G', 'Dual Sim': true,'4G': true , 'Color': 'Black'},
        {'id': 4,'Brand': 'Apple','Model': "IPhone 6", 'Year': "2016",'Memory': '32G', 'Dual Sim': true,'4G': true , 'Color': 'Black'},
        {'id': 3,'Brand': 'Nokia','Model': "3310", 'Year': "1992",'Memory': '64G','Dual Sim': true,'NFC': true , 'Color': 'Blue'},
      ];
      vm.stock = stock;
      vm.showDetails = function(mobileObj) {
        vm.info = mobileObj
      }
      vm.searchMobiles = function() {
        vm.results = [];
        vm.info = ''
        angular.forEach(stock,function(mobile) {
          console.log(mobile.Model == vm.model && mobile.Brand == vm.brand);
          if (mobile.Model == vm.model && mobile.Brand == vm.brand) {
            vm.results.push(mobile);
          }
        });
        vm.stock = vm.results;
      }
    }
})();
