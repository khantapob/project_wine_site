  
// Extracting and casting the data
console.log(data)


// var name = data.map(data => data.Country);
// var prod = data.map(data => 100*data.production)
// var full = data.map(data => 100*data.full )
// var d_5k = data.map(data => 100*data["5k"])
// var d_23k = data.map(data => 100*data["23k"])

// // we need to renormalized the production for the selected countries
// var sum = prod.reduce((a, b) => a + b, 0);
// var prod2 = prod.map(pp => pp/sum*100)

// Creating the traces
var trace1 = {
    x: data.country,
    y: data["23k dataset"],
    name: '23k dataset',
    type: 'bar'
  };

  
var trace2 = {
    x: data.country,
    y: data["Best values"],
    name: 'Best values',
    type: 'bar'
  };

var trace3 = {
    x: data.country,
    y: data["Worst values"],
    name: 'Worst values',
    type: 'bar'
  };



  var data_plot = [trace1,trace3, trace2 ];
  console.log(data_plot)

  var layout = { title:{
                    text: "Best and worst values"
                },
                yaxis:{
                    title:{
                        text: "% per country"
                    }
                }
            };
  
  Plotly.newPlot('best_worst_plot', data_plot, layout);


 