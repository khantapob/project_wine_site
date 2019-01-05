// Create a map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Country data
var countries = [
  {
    name: "Italy",
    location: [41.8719, 12.5674],
    points: 42.5
  },
  {
    name: "France",
    location: [46.2276, 2.2137],
    points: 36.6
  },
  {
    name: "Spain",
    location: [40.4637, -3.7492],
    points: 32.5
  },
  {
    name: "United States",
    location: [37.0902, -95.7129],
    points: 23.3
  },
  {
    name: "Australia",
    location: [-25.2744, 133.7751],
    points: 13.7
  },
  {
    name: "Argentina",
    location: [-38.4161, -63.6167],
    points: 11.8
  },
  {
    name: "China",
    location: [36.913818, 104.363625],
    points: 10.8
  },
  {
    name: "South Africa",
    location: [-30.5595, 22.9375],
    points: 10.8
  },
  {
    name: "Chile",
    location: [-35.6751, -71.5430],
    points: 9.5
  },
  {
    name: "Germany",
    location: [51.1657, 10.4515],
    points: 7.5
  },
  {
    name: "Portugal",
    location: [39.3999, -8.2245],
    points: 6.7
  },
  {
    name: "Russia",
    location: [61.5240, 105.3188],
    points: 4.7
  },
  {
    name: "Romania",
    location: [45.9432, 124.9668],
    points: 4.3
  },
  {
    name: "Brazil",
    location: [-14.2350, -51.9253],
    points: 3.6
  },
  {
    name: "Hungary",
    location: [47.1625, 19.5033],
    points: 2.5
  },
  {
    name: "New Zealand",
    location: [-40.9006, 174.8860],
    points: 2.9
  },
  {
    name: "Greece",
    location: [39.0742, 21.8243],
    points: 2.6
  },
  {
    name: "Switzerland",
    location: [46.8182, 8.2275],
    points: 0.8
  },
  {
    name: "Austria",
    location: [47.5162, 14.5501],
    points: 2.5
  },
  {
    name: "Moldova",
    location: [47.4116, 28.3699],
    points: 1.8
  },
  {
    name: "Bulgaria",
    location: [42.7339, 25.4858],
    points: 1.2
  },
  {
    name: "Georgia",
    location: [42.3154, 43.3569],
    points: 1.3
  }
];

// Loop through the cities array and create one marker for each city object
for (var i = 0; i < countries.length; i++) {

  // Conditionals for countries points
  var color = "";
  if (countries[i].points > 40) {
    color = "red";
  }
  else if (countries[i].points > 30) {
    color = "orange";
  }
  else if (countries[i].points > 20) {
    color = "yellow";
  }
  else if (countries[i].points > 10) {
    color = "green";
  }
  else {
    color = "blue";
  }

  // Add circles to map
  L.circle(countries[i].location, {
    fillOpacity: 0.85,
    color: "none",
    fillColor: color,
    // Adjust radius
    radius: countries[i].points * 15000
  }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>" + countries[i].points + " million hectolitres " + "</h3>").addTo(myMap);
}
