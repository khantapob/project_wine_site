  
// Extracting and casting the data
// console.log(data)
var countries = data.map(data => data.Country);
var prod = data.map(data => 100*data.production)
var full = data.map(data => 100*data.full )
var d_5k = data.map(data => 100*data["5k"])
var d_23k = data.map(data => 100*data["23k"])

// we need to renormalized the production for the selected countries
var sum = prod.reduce((a, b) => a + b, 0);
var prod2 = prod.map(pp => pp/sum*100)

// Creating the traces
var trace1 = {
    x: countries,
    y: prod2,
    name: '2016 production',
    type: 'bar'
  };
  
  var trace2 = {
    x: countries,
    y: full,
    name: 'Full dataset',
    type: 'bar'
  };

  var trace3 = {
    x: countries,
    y: d_23k,
    name: '23k rows dataset',
    type: 'bar'
  };
  
  var data_plot = [trace2, trace1,  trace3];
  
  var layout = {barmode: 'group',
                title:{
                    text: "Sampling the dataset according to annual production"
                },
                yaxis:{
                    title:{
                        text: "Production rate or nb of row in dataset [%]"
                    }
                }
            };
  
  Plotly.newPlot('plot_datasets_prod', data_plot, layout);
