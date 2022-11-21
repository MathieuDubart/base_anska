// require('dotenv').config()

let container = document.querySelector('.custom-container');
let layers = document.querySelectorAll('.custom-layer');
let innerWidth = window.innerWidth;
let parallaxSpeed;
container.onscroll = function (){
    let X = container.scrollTop;

    if (innerWidth > 2000) {
        parallaxSpeed = 10;
    } else {
        parallaxSpeed = 16;
    }

    for(let i=1; i<layers.length+1;i++) {
        layers[i-1].style.left=X/(parallaxSpeed/i)+'px';
    }
}

// ----------------------- script for charts -----------------------------//

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["", "Gigatonnes de CO2"],
        ["Contenues dans le Permafrost",     1600],
        ["Émises par l'homme en 2022", 32]
    ]);

    var options = {
        title: 'Quantité de CO2 en Gigatonnes (Gt)',
        pieHole: 0.4,
        backgroundColor: 'transparent',
        titleTextStyle: {
            color: "white",               // color 'red' or '#cc00cc'
            fontName: "Red Hat Text",    // 'Times New Roman'
            // fontSize: 25,               // 12, 18
        },
        legendTextStyle: {
            color: "white"
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}

// ------------- script to play css when in viewport -------------- //
const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
});
