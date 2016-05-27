(function() {
    'use strict';

    angular
        .module('AppModule')
        .factory('stockData', stockData);

    stockData.$inject = ['stock'];

    /* @ngInject */
    function stockData(stock) {
        var service = {
            byYear: function() {
                var data = stock.get();
                var dataByYear = [];
                angular.forEach(data, function(mobile) {
                    if (dataByYear[mobile.Year]) {
                        dataByYear[mobile.Year].count = ++dataByYear[mobile.Year]['count'];

                    } else {
                        dataByYear[mobile.Year] = {};
                        dataByYear[mobile.Year].count = 1;
                        dataByYear[mobile.Year].year = mobile.Year;
                    }
                });
                return dataByYear;
                console.log(dataByYear);
            },
            byBrand: function() {
                var data = stock.get();
                var dataByBrand = [];
                angular.forEach(data, function(mobile) {
                    if (dataByBrand[mobile.Brand]) {
                        dataByBrand[mobile.Brand].count = ++dataByBrand[mobile.Brand]['count'];

                    } else {
                        dataByBrand[mobile.Brand] = {};
                        dataByBrand[mobile.Brand].count = 1;
                        dataByBrand[mobile.Brand].brand = mobile.Brand;
                    }

                });
                console.log(dataByBrand);
                return dataByBrand;
            }
        };
        return service;
    }
})();
