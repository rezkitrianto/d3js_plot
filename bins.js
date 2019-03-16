const m0 = {
  id: "8d5ef3030dfd3bad@233",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Histogram

Unemployment rate by county, August 2016. Source: [Bureau of Labor Statistics](http://www.bls.gov/lau/#tables).`
)})
    },
    {
      name: "chart",
      inputs: ["d3","DOM","width","height","bins","x","y","xAxis","yAxis"],
      value: (function(d3,DOM,width,height,bins,x,y,xAxis,yAxis)
{
  const svg = d3.select(DOM.svg(width, height));

  const bar = svg.append("g")
      .attr("fill", "steelblue")
    .selectAll("rect")
    .data(bins)
    .join("rect")
      .attr("x", d => x(d.x0) + 1)
      .attr("width", d => Math.max(0, x(d.x1) - x(d.x0) - 1))
      .attr("y", d => y(d.length))
      .attr("height", d => y(0) - y(d.length));

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  return svg.node();
}
)
    },
    {
      name: "data",
      inputs: ["d3"],
      value: (async function(d3){return(
Object.assign(await d3.csv("https://gist.githubusercontent.com/mbostock/682b782da9e1448e6eaac00bb3d3cd9d/raw/0e0a145ded8b1672701dc8b2a702e51c648312d4/unemployment.csv", ({rate}) => +rate), {x: "Unemployment (%)", y: "Counties"})
)})
    },
    {
      name: "bins",
      inputs: ["d3","x","data"],
      value: (function(d3,x,data){return(
d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(40))
  (data)
)})
    },
    {
      name: "x",
      inputs: ["d3","data","margin","width"],
      value: (function(d3,data,margin,width){return(
d3.scaleLinear()
    .domain(d3.extent(data)).nice()
    .range([margin.left, width - margin.right])
)})
    },
    {
      name: "y",
      inputs: ["d3","bins","height","margin"],
      value: (function(d3,bins,height,margin){return(
d3.scaleLinear()
    .domain([0, d3.max(bins, d => d.length)]).nice()
    .range([height - margin.bottom, margin.top])
)})
    },
    {
      name: "xAxis",
      inputs: ["height","margin","d3","x","width","data"],
      value: (function(height,margin,d3,x,width,data){return(
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .call(g => g.append("text")
        .attr("x", width - margin.right)
        .attr("y", -4)
        .attr("fill", "#000")
        .attr("font-weight", "bold")
        .attr("text-anchor", "end")
        .text(data.x))
)})
    },
    {
      name: "yAxis",
      inputs: ["margin","d3","y","data"],
      value: (function(margin,d3,y,data){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 4)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y))
)})
    },
    {
      name: "height",
      value: (function(){return(
500
)})
    },
    {
      name: "margin",
      value: (function(){return(
{top: 20, right: 20, bottom: 30, left: 40}
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("d3@5")
)})
    }
  ]
};

const notebook = {
  id: "8d5ef3030dfd3bad@233",
  modules: [m0]
};

export default notebook;
