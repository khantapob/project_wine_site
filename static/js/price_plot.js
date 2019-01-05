
// Create the Traces
var trace1 = {
  x: data.point,
  y: data.price,
  mode: "markers",
  type: "scatter",
  name: "high jump",
  marker: {
    color: "#36ad47",
    symbol: "hexagram"
  }
};

// Create the data array for the plot
var data = [trace1];

// Define the plot layout
var layout = {
  //title: "Wine Price vs Score",
  xaxis: { title: "Point" },
  yaxis: { title: "Price" }
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);
