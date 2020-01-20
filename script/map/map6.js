//map carrés

// CONSTANTES
const LINK1DARK = "canva6.html?dark"
const LINK1 = "canva6.html";
const LINK2DARK = "canva7.html?dark";
const LINK2 = "canva7.html";

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
var zone12 = document.getElementById('zone12');
var zone13 = document.getElementById('zone13');
var zone14 = document.getElementById('zone14');
var zone15 = document.getElementById('zone15');
var zone16 = document.getElementById('zone16');
var zone17 = document.getElementById('zone17');
var zone18 = document.getElementById('zone18');
var zone19 = document.getElementById('zone19');
var zone20 = document.getElementById('zone20');

// MAP
var map = new Map([
    [zone1, [zone2, zone3, zone7, zone19, zone20]],
    [zone2, [zone1, zone3, zone4, zone5, zone6, zone8, zone20]],
    [zone3, [zone1, zone2, zone4, zone7, zone8]],
    [zone4, [zone2, zone3, zone5, zone8]],
    [zone5, [zone2, zone4, zone6, zone8]],
    [zone6, [zone2, zone5, zone8]],
    [zone7, [zone1, zone3, zone8, zone9, zone19]],
    [zone8, [zone3, zone4, zone5, zone6, zone7, zone9, zone10, zone11, zone14, zone17, zone18, zone20]],
    [zone9, [zone7, zone8, zone10, zone12, zone16, zone19]],
    [zone10, [zone8, zone9, zone11, zone12, zone13]],
    [zone11, [zone8, zone10, zone13, zone14]],
    [zone12, [zone9, zone10, zone13, zone15, zone16]],
    [zone13, [zone10, zone11, zone12, zone14, zone15]],
    [zone14, [zone8, zone11, zone13, zone15, zone17, zone18]],
    [zone15, [zone12, zone13, zone14, zone16, zone17]],
    [zone16, [zone9, zone12, zone15, zone17, zone19, zone20]],
    [zone17, [zone8, zone14, zone15, zone16, zone18, zone20]],
    [zone18, [zone8, zone14, zone17]],
    [zone19, [zone1, zone7, zone9, zone16, zone20]],
    [zone20, [zone1, zone2, zone8, zone16, zone17, zone19]]
]);
