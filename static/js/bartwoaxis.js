window.onload = function () {
var chart = new CanvasJS.Chart("chartContainer", {
	exportEnabled: true,
	animationEnabled: true,
	title:{
		text: "Average price and rating per user"
	},
	subtitles: [{
		text: "Click Legend to Hide or Unhide Data Series"
	}], 
	axisX: {
		title: "User handles"
	},
	axisY: {
		title: "Average price",
		titleFontColor: "#4F81BC",
		lineColor: "#4F81BC",
		labelFontColor: "#4F81BC",
		tickColor: "#4F81BC"
	},
	axisY2: {
		title: "Average rating",
		titleFontColor: "#C0504E",
		lineColor: "#C0504E",
		labelFontColor: "#C0504E",
		tickColor: "#C0504E"
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "column",
		name: "Avg price",
		showInLegend: true,      
		yValueFormatString: "#,##0.#",
		dataPoints: [
            {label: "@AnneInVino",y: 31.5},
			{ label: "@JoeCz", y: 40.2972972972973},
			{ label: "@gordone_cellars", y: 25.69047619047619},
			{ label: "@kerinokeefe", y: 42.00818553888131 },
			{ label: "@laurbuzz", y: 25.720183486238533 },
            { label: "@mattkettmann", y: 35.55555555555556},
            { label: "@paulgwine\u00a0", y: 33.36283185840708},
			{ label: "@suskostrzewa", y: 20.83076923076923},
			{ label: "@vboone", y: 48.23148148148148},
            { label: "@vossroger", y: 41.7146017699115 },
            { label: "@wawinereport", y: 32.63793103448276},
			{ label: "@wineschach", y: 26.099932930918847}
		]
	},
	{
		type: "column",
		name: "Avg rating",
		axisYType: "secondary",
		showInLegend: true,
		yValueFormatString: "#,##0.#",
		dataPoints: [
            {label: "@AnneInVino",y: 10.266666666666667},
			{ label: "@JoeCz", y: 8.794594594594594},
			{ label: "@gordone_cellars", y: 8.404761904761905},
			{ label: "@kerinokeefe", y: 8.911323328785812 },
			{ label: "@laurbuzz", y:7.86697247706422},
            { label: "@mattkettmann", y: 9.51388888888889},
            { label: "@paulgwine\u00a0", y:8.823008849557523},
			{ label: "@suskostrzewa", y: 7.1692307692307695 },
			{ label: "@vboone", y: 9.351851851851851},
            { label: "@vossroger", y: 8.732300884955752},
            { label: "@wawinereport", y: 8.775862068965518},
			{ label: "@wineschach", y: 7.158953722334004 }
		]
	}]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}
}