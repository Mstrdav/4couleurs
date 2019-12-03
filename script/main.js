// COLOR SELECTOR
var color_selector = document.getElementById('color_selector');
var red = document.getElementById('red');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var yellow = document.getElementById('yellow');

var zone1 = document.getElementById('zone1');

zone1.addEventListener('click', function (event) {
    color_selector.style.opacity = '90%';
    color_selector.style.top = event.clientY.toString()+'px';
    color_selector.style.left = event.clientX.toString()+'px';    
});
