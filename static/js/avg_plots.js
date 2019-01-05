// Sort the data array using the greekSearchResults value
data.sort(function(a, b) {
  return parseFloat(b.average_price) - parseFloat(a.average_price);
});

// Slice the first 10 objects for plotting
data = data.slice(0, 12);

// Reverse the array due to Plotly's defaults
data = data.reverse();

// Trace1 for the Greek Data
var trace1 = {
  x: data.map(row => row.average_price),
  y: data.map(row => row.country),
  text: data.map(row => row.country),
  name: "Wine Price",
  type: "bar",
  orientation: "h",
  marker: {
  color: "#36ad47",
  }
};

// data
var data = [trace1];

// Apply the group bar mode to the layout
var layout = {
  // title: "Average Wine Price by Country (Top 12)",
  xaxis: { title: "Price" },
  
  margin: {
    l: 100,
    r: 100,
    t: 30,
    b: 80
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);

