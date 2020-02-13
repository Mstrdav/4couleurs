//map france medium

// CONSTANTES
const LINK1DARK = "canva5.html?dark"
const LINK1 = "canva5.html";
const LINK2DARK = "canva6.html?dark";
const LINK2 = "canva6.html";

// ZONES
{
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
    var zone21 = document.getElementById('zone21');
    var zone22 = document.getElementById('zone22');
    var zone23 = document.getElementById('zone23');
}

// MAP
var map = new Map([
    [zone1, [zone2]],
    [zone2, [zone4, zone5, zone6]],
    [zone3, [zone4, zone9, zone10, zone11]],
    [zone4, [zone2, zone3, zone5, zone11]],
    [zone5, [zone2, zone4, zone6, zone11, zone12]],
    [zone6, [zone2, zone5, zone7, zone12, zone13]],
    [zone7, [zone6, zone8, zone13]],
    [zone8, [zone7, zone13]],
    [zone9, [zone3, zone10]],
    [zone10, [zone3, zone9, zone11, zone14]],
    [zone11, [zone3, zone4, zone5, zone10, zone12, zone14, zone15, zone16]],
    [zone12, [zone5, zone6, zone11, zone13, zone16, zone17]],
    [zone13, [zone6, zone7, zone8, zone12, zone17]],
    [zone14, [zone10, zone11, zone15, zone18]],
    [zone15, [zone11, zone14, zone16, zone18, zone19]],
    [zone16, [zone11, zone12, zone15, zone17, zone19, zone20]],
    [zone17, [zone12, zone13, zone16, zone20, zone21]],
    [zone18, [zone14, zone15, zone19]],
    [zone19, [zone15, zone16, zone18, zone20]],
    [zone20, [zone16, zone17, zone19, zone21]],
    [zone21, [zone17, zone20]]
]);
