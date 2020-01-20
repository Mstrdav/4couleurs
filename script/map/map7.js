//map europe

// CONSTANTES
const LINK1DARK = "canva7.html?dark"
const LINK1 = "canva7.html";
const LINK2DARK = "canva8.html?dark";
const LINK2 = "canva8.html";

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
    var zone24 = document.getElementById('zone24');
    var zone25 = document.getElementById('zone25');
    var zone26 = document.getElementById('zone26');
    var zone27 = document.getElementById('zone27');
    var zone28 = document.getElementById('zone28');
    var zone29 = document.getElementById('zone29');
    var zone30 = document.getElementById('zone30');
    var zone31 = document.getElementById('zone31');
    var zone32 = document.getElementById('zone32');
    var zone33 = document.getElementById('zone33');
    var zone34 = document.getElementById('zone34');
    var zone35 = document.getElementById('zone35');
}

// MAP
var map = new Map([
    [zone1, []],
    [zone2, [zone3, zone4, zone5]],
    [zone3, [zone2, zone4]],
    [zone4, [zone2, zone3, zone5]],
    [zone5, [zone2, zone4, zone9, zone10, zone11, zone15, zone16, zone19]],
    [zone6, [zone7]],
    [zone7, [zone6]],
    [zone8, [zone14]],
    [zone9, [zone10, zone5]],
    [zone10, [zone11, zone16, zone5, zone9]],
    [zone11, [zone5, zone10, zone15, zone16]],
    [zone12, [zone13, zone14, zone20]],
    [zone13, [zone12, zone14]],
    [zone14, [zone8, zone12, zone13, zone15, zone17, zone20, zone21, zone22]],
    [zone15, [zone5, zone11, zone14, zone16, zone17, zone18, zone19]],
    [zone16, [zone5, zone10, zone11, zone15, zone19]],
    [zone17, [zone14, zone15, zone18, zone22]],
    [zone18, [zone15, zone17, zone19, zone22, zone23]],
    [zone19, [zone5, zone15, zone16, zone18, zone23, zone24, zone25]],
    [zone20, [zone12, zone14, zone21, zone26, zone33]],
    [zone21, [zone14, zone20, zone22, zone26]],
    [zone22, [zone14, zone17, zone18, zone21, zone23, zone26, zone27]],
    [zone23, [zone18, zone19, zone22, zone24, zone27, zone28, zone30]],
    [zone24, [zone19, zone23, zone25, zone30, zone31]],
    [zone25, [zone19, zone24]],
    [zone26, [zone20, zone21, zone22, zone27]],
    [zone27, [zone22, zone23, zone26, zone28]],
    [zone28, [zone23, zone27, zone29, zone30]],
    [zone29, [zone28, zone30]],
    [zone30, [zone23, zone24, zone28, zone29, zone31, zone34]],
    [zone31, [zone24, zone30, zone34, zone35]],
    [zone32, [zone33]],
    [zone33, [zone32, zone20]],
    [zone34, [zone30, zone31, zone35]],
    [zone35, [zone31, zone34]],
]);
