let header = document.querySelector('header');
let layer_one = document.getElementById('layer-one');
let layer_two = document.getElementById('layer-two');
let layer_three = document.getElementById('layer-three');
let page_title = document.getElementById('page-title');
let discover_btn = document.getElementById('discover-btn');
let page_content = document.getElementById('content');
let example_range = document.getElementById('exampleRange');

window.addEventListener('scroll',e => {
    let value = window.scrollY;
    layer_three.style.top = value*0.25+'px';
    layer_two.style.top = value*0.5+'px';
    layer_one.style.top = value*0+'px';
    page_title.style.marginLeft = value*3.5+'px';
    page_title.style.marginTop = value*1.5+'px';
    discover_btn.style.marginTop = value*1.5+'px';
    header.style.top = value*0.5+'px';
});

let rangeValue;

example_range.addEventListener('change', e=>{
    rangeValue =  example_range.value;
})