var dataset = [1,2,3,4,10,4,3,1,7];
var svgWidth = 500, svgHeight = 300;
var barPadding = 1, barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

var createBar = svg.selectAll('rect')
              .data(dataset)
              .enter()
              .append('rect')
              .attr('y', function(d){
                return svgHeight - d;
              })
              .attr('height', function(d){
                return d;
              })
              .attr('width', barWidth - barPadding)
              .attr('transform', function(d,i){
                var translate = [barWidth*i, 0]
                return 'translate('+translate+')'
              });

createBar;
