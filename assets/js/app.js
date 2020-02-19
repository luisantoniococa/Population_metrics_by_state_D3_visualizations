// We are going to create the height and the width of the canvas

var svgWidth = 960;
var svgHeight = 500;
// adding the margin for the canvas
var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};
// calculating the width and the height for later code
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Initial Params
var chosenXAxis = "poverty";
var chosenYAxis = "Obese";  


