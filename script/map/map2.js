//map défi

// CONSTANTES
const LINK1DARK = "canva2.html?dark"
const LINK1 = "canva2.html";
const LINK2DARK = "canva3.html?dark";
const LINK2 = "canva3.html";

// ZONES
var zone1 = document.getElementById('zone1');
var zone2 = document.getElementById('zone2');
var zone3 = document.getElementById('zone3');
var zone4 = document.getElementById('zone4');
var zone5 = document.getElementById('zone5');
var zone6 = document.getElementById('zone6');
var zone7 = document.getElementById('zone7');
var zone8 = document.getElementById('zone8');
var zone9 = document.getElementById('zone9');
var zone10 = document.getElementById('zone10');
var zone11 = document.getElementById('zone11');

// MAP
var map = new Map([
    [zone1, [zone2, zone3, zone11]],
    [zone2, [zone1, zone3, zone4, zone5, zone8, zone11]],
    [zone3, [zone1, zone2, zone5, zone6, zone7, zone9, zone10, zone11]],
    [zone4, [zone2, zone5, zone8]],
    [zone5, [zone2, zone3, zone4, zone6, zone8, zone9]],
    [zone6, [zone3, zone5, zone7, zone9, zone10]],
    [zone7, [zone3, zone6, zone10]],
    [zone8, [zone2, zone4, zone5, zone9, zone11]],
    [zone9, [zone3, zone5, zone6, zone8, zone10, zone11]],
    [zone10, [zone3, zone6, zone7, zone9]],
    [zone11, [zone1, zone2, zone3, zone8, zone9]]
]);
