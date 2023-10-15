var vg_1 = "https://raw.githubusercontent.com/Kaixin0322/FIT3179-visualization2/main/map.json";
vegaEmbed("#map", vg_1).then(function(result) {
    var view = result.view;
}).catch(console.error);

var vg_2 = "https://raw.githubusercontent.com/Kaixin0322/FIT3179-visualization2/main/line_chart.json";
vegaEmbed("#line-chart", vg_2).then(function(result) {
    var view = result.view;
}).catch(console.error);

var vg_3 = "https://raw.githubusercontent.com/Kaixin0322/FIT3179-visualization2/main/Scatterplot1.json";
vegaEmbed("#Scatterplot1", vg_3).then(function(result) {
    var view = result.view;
}).catch(console.error);

var vg_4 = "https://raw.githubusercontent.com/Kaixin0322/FIT3179-visualization2/main/Scatterplot2.json";
vegaEmbed("#Scatterplot2", vg_4).then(function(result) {
    var view = result.view;
}).catch(console.error);

var vg_5 = "https://raw.githubusercontent.com/Kaixin0322/FIT3179-visualization2/main/line_chart2.json";
vegaEmbed("#line_chart2", vg_5).then(function(result) {
    var view = result.view;
}).catch(console.error);

var vg_6 = "https://raw.githubusercontent.com/Kaixin0322/FIT3179-visualization2/main/bar_chart.json";
vegaEmbed("#bar_chart", vg_6).then(function(result) {
    var view = result.view;
}).catch(console.error);