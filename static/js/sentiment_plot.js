  var trace1 = {
    x: sent.price,
    y: sent.compound,
    mode: "markers",
    type: "scatter",
    name: "PriceComp",
    marker: {
      color: "#2077b4",
      symbol: "hexagram"
    }
  };
  priceData= [trace1]
  // Define the plot layout
  var layout = {
    title: "Sentiment Analysis based on Price",
    xaxis: { title: "Price" },
    yaxis: { title: "Compound" }
  };
  
  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot", priceData, layout);


  var trace2 = {
    x: sent.Score,
    y: sent.compound,
    mode: "markers",
    type: "scatter",
    name: "ScoreComp",
    marker: {
      color: "red",
      symbol: "circle"
    }
  };
  priceDat= [trace2]
  // Define the plot layout
  var layout = {
    title: "Sentiment Analysis based on Rating",
    xaxis: { title: "Rating" },
    yaxis: { title: "Compound" }
  };
  
  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot2", priceDat, layout);

  var trace3 = {
    x: avgg.Price_Avg,
    y: avgg.Rating_Avg,
    mode: "markers",
    type: "scatter",
    name: "PriceComp",
    marker: {
      color: "red",
      symbol: "hexagram"
    }
  };
  priceDa= [trace3]
  // Define the plot layout
  var layout = {
    title: "Average Price vs Average Rating",
    xaxis: { title: "Average Price" },
    yaxis: { title: "Average Rating" }
  };
  
  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot3", priceDa, layout);

//   var trace4 = {
//     x: avgg.User,
//     y: avgg.Price_Avg,
//     name: 'Average Price',
//     marker: {color: 'rgb(55, 83, 109)'},
//     type: 'bar'
//   };
  
//   var trace5 = {
//     x: avgg.User,
//     y: avgg.Rating_Avg,
//     name: 'Average Rating',
//     yaxis: 'y2',
//     marker: {color: 'rgb(26, 118, 255)'},
//     type: 'bar'
//   };
  
//   var datam = [trace4, trace5];
  
//   var layout = {
//     title: 'Average Price and Rating per Taster',
//     xaxis: {tickfont: {size: 14,color: 'rgb(107, 107, 107)'}},
//     yaxis: {title: 'Average Price'},
//     yaxis2: {
//       title: 'Average Rating',
//       titlefont: {size: 16,color: 'rgb(107, 107, 107)'},
//       tickfont: {size: 14,color: 'rgb(107, 107, 107)'},
//     //   overlaying: 'y',
//       side: 'right'
    
// },
//     legend: {
//       x: 0,
//       y: 1.0,
//       bgcolor: 'rgba(255, 255, 255, 0)',
//       bordercolor: 'rgba(255, 255, 255, 0)'
//     },
//     barmode: 'group',
//     bargap: 0.15,
//     bargroupgap: 0.1
//   };
  
//   Plotly.newPlot('plot4', datam, layout);