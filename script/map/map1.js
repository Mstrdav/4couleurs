// CONSTANTES
const LINK1DARK = "canva1.html?dark"
const LINK1 = "canva1.html";
const LINK2DARK = "canva2.html?dark";
const LINK2 = "canva2.html";

// ZONES
var zone1 = document.getElementById('zone1');
var zone2 = document.getElementById('zone2');
var zone3 = document.getElementById('zone3');
var zone4 = document.getElementById('zone4');

// MAP
var map = new Map([
    [zone1, [zone2, zone3]],
    [zone2, [zone1, zone3, zone4]],
    [zone3, [zone1, zone2, zone4]],
    [zone4, [zone2, zone3]]
]);
