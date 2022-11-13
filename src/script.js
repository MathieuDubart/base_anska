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