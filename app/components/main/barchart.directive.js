(function() {
    'use strict';

    angular
        .module('AppModule')
        .directive('barChart', barChart);

        barChart.$inject = ['stockData'];
    /* @ngInject */
    function barChart(stockData) {
        var barChart = {
            restrict: 'E',
            scope: {},
            link: linkFunc,
        };

        return barChart;

        function linkFunc(scope, el, attr, ctrl) {
          var data = d3.values(stockData.byYear());
          var margin = {
                  top: 20,
                  right: 30,
                  bottom: 30,
                  left: 40
              },
              width = 500 - margin.left - margin.right,
              height = 250 - margin.top - margin.bottom;

          // bars width scale
          var x = d3.scale.ordinal()
              .rangeRoundBands([0, width], .2);
          // bars height scale
          var y = d3.scale.linear()
              .range([height, 0]);

          // positioning x
          var xAxis = d3.svg.axis()
              .scale(x)
              .orient("bottom");
          // positioning y
          var yAxis = d3.svg.axis()
              .scale(y)
              .orient("left");
          // injecting group element to group shapes in it
          var chart = d3.select(el[0])
              .append('svg')
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          // convert x values to a suitable range
          x.domain(data.map(function(d) {
              return d.year;
          }));
          // convert y values to a suitable range
          y.domain([0, d3.max(data, function(d) {
              return d.count;
          })]);


          chart.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis);

          chart.append("g")
              .attr("class", "y axis")
              .call(yAxis);

          chart.selectAll(".bar")
              .data(data)
              .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) {
                  return x(d.year);
              })
              .attr("y", function(d) {
                  return y(d.count);
              })
              .attr("height", function(d) {
                  return height - y(d.count);
              })
              .attr("width", x.rangeBand());
          chart.append("g")
              .attr("class", "y axis")
              .call(yAxis)
              .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 5)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Mobile Count");
          // });

          function type(d) {
              d.count = +d.count;
              return d;
          }

        }
    }

})();
