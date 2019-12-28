// COLOR PICKER
var red = document.getElementById('red');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var yellow = document.getElementById('yellow');

// SELECTED COLOR
var selectedColor = 0;

// END PANNEL
var endPannel = document.getElementById('endPannel');

// ZONES
var zone1 = document.getElementById('zone1');
var zone2 = document.getElementById('zone2');
var zone3 = document.getElementById('zone3');
var zone4 = document.getElementById('zone4');

// Events on Zones
zone1.addEventListener('click', function (event) {
    fill(this, selectedColor);
});

zone2.addEventListener('click', function (event) {
    fill(this, selectedColor);
});

zone3.addEventListener('click', function (event) {
    fill(this, selectedColor);
});

zone4.addEventListener('click', function (event) {
    fill(this, selectedColor);
});

// Events on ColorPicker
blue.addEventListener('click', function (event) {
    document.body.classList = "dark";
    if (selectedColor != 1) {
        remove(selectedColor);
        document.body.classList.add("blueCursor");
        selectedColor = 1;
        blue.classList.add("selected");
    } else {
        selectedColor = 0;
        blue.classList.remove("selected");
    }
});

red.addEventListener('click', function (event) {
    document.body.classList = "dark";
    if (selectedColor != 2) {
        remove(selectedColor);
        document.body.classList.add("redCursor");
        selectedColor = 2;
        red.classList.add("selected");
    } else {
        selectedColor = 0;
        red.classList.remove("selected");
    }
});

green.addEventListener('click', function (event) {
    document.body.classList = "dark";
    if (selectedColor != 3) {
        remove(selectedColor);
        document.body.classList.add("greenCursor");
        selectedColor = 3;
        green.classList.add("selected");
    } else {
        selectedColor = 0;
        green.classList.remove("selected");
    }
});

yellow.addEventListener('click', function (event) {
    document.body.classList = "";
    if (selectedColor != 4) {
        remove(selectedColor);
        document.body.classList.add("yellowCursor");
        selectedColor = 4;
        yellow.classList.add("selected");
    } else {
        selectedColor = 0;
        yellow.classList.remove("selected");
    }
});

var remove = function (colorToRemove) {
    if (colorToRemove == 0) {} else if (colorToRemove == 1) {
        blue.classList.remove("selected");
    } else if (colorToRemove == 2) {
        red.classList.remove("selected");
    } else if (colorToRemove == 3) {
        green.classList.remove("selected");
    } else {
        yellow.classList.remove("selected");
    }
}

var fill = function (zone, colorToFill) {
    if (colorToFill == 0) {
        zone.style.fill = "#C4C4C4";
    } else if (colorToFill == 1) {
        zone.style.fill = "blue";
    } else if (colorToFill == 2) {
        zone.style.fill = "red";
    } else if (colorToFill == 3) {
        zone.style.fill = "green";
    } else {
        zone.style.fill = "yellow";
    }

    if(verif()) {
        endPannel.style.transform = "translate(-50%, -50%)"
        document.body.classList = "";
        remove(selectedColor);
    }
}
