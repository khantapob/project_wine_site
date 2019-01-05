var trace7= {
    x: y_avgg.Year,
    y: y_avgg.Comp,
    mode: "markers",
    type: "scatter",
    name: "YearComp",
    marker: {
      color: "#2077b4",
      symbol: "hexagram"
    }
  };
  yrData= [trace7]
  // Define the plot layout
  var layout = {
    title: "Sentiment Analysis based on Year",
    xaxis: { title: "Year" },
    yaxis: { title: "Compound" }
  };
  
  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot7", yrData, layout);

  var trace8= {
    x: y_avgg.Year,
    y: y_avgg.Price_Year,
    mode: "markers",
    type: "scatter",
    name: "YearPrice",
    marker: {
      color: "#2077b4",
      symbol: "hexagram"
    }
  };
  yrPData= [trace8]
  // Define the plot layout
  var layout = {
    title: "Average Price Per Year",
    xaxis: { title: "Year" },
    yaxis: { title: "Average Price" }
  };
  
  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot8", yrPData, layout);

  var trace9= {
    x: y_avgg.Year,
    y: y_avgg.Rating_Year,
    mode: "markers",
    type: "scatter",
    name: "YearRate",
    marker: {
      color: "#2077b4",
      symbol: "hexagram"
    }
  };
  yrRData= [trace9]
  // Define the plot layout
  var layout = {
    title: "Average Rating Per Year",
    xaxis: { title: "Year" },
    yaxis: { title: "Average Rating" }
  };
  
  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot9", yrRData, layout);