(function() {
    'use strict';

    angular
        .module('AppModule')
        .directive('donutChart', donutChart);

    donutChart.$inject = ['stockData'];
    /* @ngInject */
    function donutChart(stockData) {
        var donutChart = {
            restrict: 'E',
            scope: {},
            link: linkFunc,
        };

        return donutChart;

        function linkFunc(scope, el, attr, ctrl) {
            var data = d3.values(stockData.byBrand());

            var width = 500,
                height = 250,
                radius = Math.min(width, height) / 2;

            var color = d3.scale.ordinal()
                .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

            var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(radius - 70);

            var pie = d3.layout.pie()
                .sort(null)
                .value(function(d) {
                    return d.count;
                });

            var svg = d3.select(el[0]).append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            var g = svg.selectAll(".arc")
                .data(pie(data))
                .enter().append("g")
                .attr("class", "arc");

            g.append("path")
                .attr("d", arc)
                .style("fill", function(d) {
                    return color(d.data.brand);
                });

            g.append("text")
                .attr("transform", function(d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .attr("dy", ".35em")
                .text(function(d) {
                    return d.data.brand;
                });

            function type(d) {
                d.count = +d.count;
                return d;
            }
        }
    }
})();
