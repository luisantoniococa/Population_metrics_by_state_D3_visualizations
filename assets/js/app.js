// We are going to create the height and the width of the canvas

var svgWidth = 960;
var svgHeight = 500;
// adding the margin for the canvas
var margin = {
  top: 20,
  right: 40,
  bottom: 100,
  left: 100
};
// calculating the width and the height for later code
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Initial Params
var chosenXAxis = "poverty";
var chosenYAxis = "obesity";  


function xScale(dataForXAxis, chosenXAxis) {
    // create scales
    var xLinearScale = d3.scaleLinear()
      .domain([d3.min(dataForXAxis, d => d[chosenXAxis]) * 0.8,
        d3.max(dataForXAxis, d => d[chosenXAxis]) * 1.2
      ])
      .range([0, width]);
  
    return xLinearScale;
  
  }

  function yScale(dataForYAxis, chosenYAxis) {
    // create scales
    var yLinearScale = d3.scaleLinear()
      .domain([d3.min(dataForYAxis, d => d[chosenYAxis]) * 0.8,
        d3.max(dataForYAxis, d => d[chosenYAxis]) * 1.2
      ])
      .range([height,0]);
  
    return yLinearScale;
  
  }

  function renderAxesX(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);
  
    xAxis.transition()
      .duration(1000)
      .call(bottomAxis);
  
    return xAxis;
  }
  
  function renderAxesY(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);
  
    yAxis.transition()
      .duration(1000)
      .call(leftAxis);
  
    return yAxis;
  }
  
  function renderCircles(circlesGroup, newXScale, chosenXAxis) {

    circlesGroup.transition()
      .duration(1000)
      .attr("cx", d => newXScale(d[chosenXAxis]));
  
    return circlesGroup;
  }
  function renderCirclesText(circlesText, newXScale, chosenXAxis) {

    circlesText.transition()
      .duration(1000)
      .attr("x", d => newXScale(d[chosenXAxis]));
  
    return circlesText;
  }
  function renderCirclesY(circlesGroup, newYScale, chosenYAxis) {

    circlesGroup.transition()
      .duration(1000)
      .attr("cy", d => newYScale(d[chosenYAxis]));
  
    return circlesGroup;
  }
  function renderCirclesTextY(circlesText, newYScale, chosenYAxis) {

    circlesText.transition()
      .duration(1000)
      .attr("y", d => newYScale(d[chosenYAxis])+5);
  
    return circlesText;
  }


  function updateToolTip(chosenXAxis, chosenYAxis,circlesGroup, circlesText) {

    if (chosenXAxis === "poverty") {
      var labelx = "Poverty %:";
    }
    else if(chosenXAxis === "age") {
      var labelx = "Age (Median):";
    }
    else {
      var labelx = "Household Income:";
    }

    if (chosenYAxis === "obesity") {
      var labely = "Obesity %:";
    }
    else if(chosenYAxis === "smokes") {
      var labely = "Smokes %:";
    }
    else {
      var labely = "Lack of HealthCare %:";
    }

  
    var toolTip = d3.tip()
      .attr("class", "d3-tip")
      .offset([80, -60])
      .html(function(d) {
        return (`State : ${d.state} <br> ${labely} ${d[chosenYAxis]}<br>${labelx} ${d[chosenXAxis]} <br> <img src="https://3o15h033zmpwracwx2i00rqx-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/welcome_to_florida_sign.jpg" alt="Smiley face" height="42" width="42">`);
      });
  
    circlesGroup.call(toolTip);
    // circlesText.call(toolTip);
  
    circlesGroup.on("mouseover", function(data) {
      
      toolTip.show(data);
      d3.select(this)
      .style("stroke", "black")
      .style("opacity", 1);
    })
      // onmouseout event
      .on("mouseout", function(data, index) {
        toolTip.hide(data);
        d3.select(this)
        .style("stroke", " #e3e3e3")
        .style("opacity", 1);
      });
    circlesText.on("mouseover", function(data) {
      
        toolTip.show(data);
        d3.select(circlesGroup)
        .style("stroke", "black")
        .style("opacity", 1);
      })
        // onmouseout event
        .on("mouseout", function(data, index) {
          toolTip.hide(data);
          d3.select(circlesGroup)
          .style("stroke", " #e3e3e3")
          .style("opacity", 1);
        });
    return circlesGroup,circlesText;
  }
  









d3.csv("assets/js/data.csv").then(function(metricsData, err) {
  if (err) throw err;

  // parse data
  metricsData.forEach(function(data) {
    data.poverty = +data.poverty;
    data.povertyMoe = +data.povertyMoe;
    data.age = +data.age;
    data.ageMoe = +data.ageMoe;
    data.income = +data.income;
    data.incomeMoe = +data.incomeMoe;
    data.healthcareLow = +data.healthcareLow;
    data.healthcareHigh = +data.healthcarelow;
    data.healthcare = +data.healthcare;
    data.obesity = +data.obesity;
    data.obesityLow = +data.obesityLow;
    data.obesityHigh = +data.obesityHigh;
    data.smokes = +data.smokes;
    data.smokesLow = +data.smokesLow;
    data.smokesHigh = +data.smokesHigh;
  
  });

  // xLinearScale function above csv import
  var xLinearScale = xScale(metricsData, chosenXAxis);

  // Create y scale function
  // var yLinearScale = d3.scaleLinear()
  //   .domain([0, d3.max(hairData, d => d.num_hits)])
  //   .range([height, 0]);
  var yLinearScale = yScale(metricsData, chosenYAxis);

  // Create initial axis functions
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // append x axis
  var xAxis = chartGroup.append("g")
    .classed("x-axis", true)
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // append y axis
  var yAxis = chartGroup.append("g")
    .classed("y-axis", true)
    .attr("transform", `translate(0, 0)`)
  
    .call(leftAxis);

  // append initial circles
  var circlesGroup = chartGroup.selectAll("circle")
    .data(metricsData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d[chosenXAxis]))
    .attr("cy", d => yLinearScale(d[chosenYAxis]))
    .attr("r", 10)
    .classed("stateCircle",true)
    .attr("opacity", ".8");

  var circleText = chartGroup.selectAll(".circleText")
  .data(metricsData)
  .enter()
  .append('text')
  .attr("x", d => xLinearScale(d[chosenXAxis]))
  .attr("y", d => yLinearScale(d[chosenYAxis])+5)
  .classed("stateText",true)
  .text(d=>d.abbr);

  // Create group for  3 x- axis labels
  var xlabelsGroup = chartGroup.append("g")
    .attr("transform", `translate(${width / 2}, ${height + 20})`);
  var ylabelsGroup = chartGroup.append("g")
    .attr("transform", `translate(${-40}, ${height / 2})`);

  var povertyLabel = xlabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 20)
    .attr("value", "poverty") // value to grab for event listener
    .classed("active", true)
    .classed("inactive", false)
    .text("Poverty %");

  var ageLabel = xlabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 40)
    .attr("value", "age") // value to grab for event listener
    .classed("inactive", true)
    .classed("active", false)
    .text("Age (Median)");
  
  var householdincomeLabel = xlabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 60)
    .attr("value", "income") // value to grab for event listener
    .classed("inactive", true)
    .classed("active", false)
    .text("Household Income (Median)");

  var obesityLabel = ylabelsGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", 0) 
    .attr("y", 0)
    .attr("value", "obesity") // value to grab for event listener
    .classed("active", true)
    .text("Obesity %");
  var smokingLabel = ylabelsGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", 0) 
    .attr("y", -20)
    .attr("value", "smokes") // value to grab for event listener
    .classed("inactive", true)
    .text("Smoker %");
  var lackhealthcareLabel = ylabelsGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", 0) 
    .attr("y", -40)
    .attr("value", "healthcare") // value to grab for event listener
    .classed("inactive", true)
    .text("Lacks Healthcare %");

  // append y axis
  // chartGroup.append("text")
  //   .attr("transform", "rotate(-90)")
  //   .attr("y", 0 - margin.left)
  //   .attr("x", 0 - (height / 2))
  //   .attr("dy", "1em")
  //   .classed("axis-text", true)
  //   .text("Number of Billboard 500 Hits");

  // updateToolTip function above csv import




  var circlesGroup, circleText = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup, circleText);
  



  // x axis labels event listener
  xlabelsGroup.selectAll("text")
    .on("click", function() {
      // get value of selection
      var value = d3.select(this).attr("value");
      if (value !== chosenXAxis) {

        // replaces chosenXAxis with value
        chosenXAxis = value;

        // console.log(chosenXAxis)

        // functions here found above csv import
        // updates x scale for new data
        xLinearScale = xScale(metricsData, chosenXAxis);

        // updates x axis with transition
        xAxis = renderAxesX(xLinearScale, xAxis);

        yAxis = renderAxesY(yLinearScale, yAxis);

        // updates circles with new x values
        circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis);
        circleText = renderCirclesText(circleText,xLinearScale, chosenXAxis);
        circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

        // updates tooltips with new info
        // circlesGroup = updateToolTip(chosenXAxis, circlesGroup);

        // changes classes to change bold text
        if(chosenXAxis === "poverty") {
          povertyLabel
            .classed("active", true)
            .classed("inactive", false);
          ageLabel
            .classed("active", false)
            .classed("inactive", true);
          householdincomeLabel
            .classed("active", false)
            .classed("inactive", true);
          console.log("We are in the first condition")
        }
        else if(chosenXAxis === "age" ) {
          povertyLabel
            .classed("active", false)
            .classed("inactive", true);
          ageLabel
            .classed("active", true)
            .classed("inactive", false);
          householdincomeLabel
            .classed("active", false)
            .classed("inactive", true);
            console.log("We are in the second condition condition")
        }
        else {
          povertyLabel
            .classed("active", false)
            .classed("inactive", true);
          ageLabel
            .classed("active", false)
            .classed("inactive", true);
          householdincomeLabel
            .classed("active", true)
            .classed("inactive", false);
          console.log("We are in the third and last condition condition")
        }
      }
    });
    ylabelsGroup.selectAll("text")
    .on("click", function() {
      // get value of selection
      var yvalue = d3.select(this).attr("value");
      if (yvalue !== chosenYAxis) {

        // replaces chosenXAxis with value
        chosenYAxis = yvalue;

        // console.log(chosenXAxis)

        // functions here found above csv import
        // updates x scale for new data
        yLinearScale = yScale(metricsData, chosenYAxis);

        // updates x axis with transition
        // xAxis = renderAxesX(xLinearScale, xAxis);

        yAxis = renderAxesY(yLinearScale, yAxis);

        // updates circles with new x values
        circlesGroup = renderCirclesY(circlesGroup, yLinearScale, chosenYAxis);
        circleText = renderCirclesTextY(circleText,yLinearScale, chosenYAxis);
        updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

        // updates tooltips with new info
        // circlesGroup = updateToolTip(chosenXAxis, circlesGroup);
        // obesity smokes healthcare
        // changes classes to change bold text
        if (chosenYAxis === "obesity") {
          obesityLabel
            .classed("active", true)
            .classed("inactive", false);
          smokingLabel
            .classed("active", false)
            .classed("inactive", true);
          lackhealthcareLabel
            .classed("active", false)
            .classed("inactive", true);
        }
        else if(chosenYAxis === "smokes" ) {
          obesityLabel
            .classed("active", false)
            .classed("inactive", true);
          smokingLabel
            .classed("active", true)
            .classed("inactive", false);
          lackhealthcareLabel
            .classed("active", false)
            .classed("inactive", true);
        }
        else {
          obesityLabel
            .classed("active", false)
            .classed("inactive", true);
          smokingLabel
            .classed("active", false)
            .classed("inactive", true);
          lackhealthcareLabel
            .classed("active", true)
            .classed("inactive", false);
        }
      }
    });
}).catch(function(error) {
  console.log(error);
});