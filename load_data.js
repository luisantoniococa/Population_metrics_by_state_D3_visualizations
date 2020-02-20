d3.csv("js/data.csv").then(function(metricsData, err) {
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
    console.log(metricsData)
});  





