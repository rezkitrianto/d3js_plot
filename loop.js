var dataset = [1,2,3,4,5];

d3.select('body')
  .selectAll('ul')
  .data(dataset)
  .enter()
  .append('li')
  .text(function(num){
    return num;
  });
