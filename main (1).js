var dataFromJson = [];

var response = fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        dataFromJson = data;
        drawCircles();
    })

.catch(error => console.log(error));


function drawCircles() {
    console.log('eee')
    const width = window.screen.width;
    const height = window.screen.height;

// Créer l'échelle pour les tailles des cercles
var xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width]);


var yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, height]);


// Créer le conteneur pour les cercles
var svg = d3.select("#dataviz_area")
    .append("svg")
    .attr("width", width)
    .attr("height", height);



//Ajouter les cercles en fonction des donnée
svg.selectAll("circle")
    .data(dataFromJson)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.x))
    .attr("cy", d => yScale(d.y) )
    .attr("r", function (d) { return d.value })
    .attr("fill", function (d) {
if (d.value >= 10 && d.value < 20) {
return "blue";
} else if (d.value >= 20 && d.value < 30) {

return "pink";

} else if (d.value >= 30 && d.value < 40) {

return "green";

} else {

return "gray";

}

});


}