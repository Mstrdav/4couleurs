//map avant goût

// CONSTANTES
const LINK1DARK = "canva8.html?dark"
const LINK1 = "canva8.html";
const LINK2DARK = "canva9.html?dark";
const LINK2 = "canva9.html";

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
}

// MAP
var map = new Map([
    [zone1, [zone2, zone3, zone4, zone5, zone18, zone25, zone27]],
    [zone2, [zone1, zone5, zone6, zone7, zone23, zone28]],
    [zone3, [zone1, zone4, zone8, zone18]],
    [zone4, [zone1, zone3, zone5, zone8, zone9]],
    [zone5, [zone1, zone2, zone4, zone6, zone9, zone10]],
    [zone6, [zone2, zone5, zone7, zone10, zone11]],
    [zone7, [zone2, zone6, zone11, zone23]],
    [zone8, [zone3, zone4, zone9, zone12, zone18, zone19]],
    [zone9, [zone4, zone5, zone8, zone10, zone12, zone13]],
    [zone10, [zone5, zone6, zone9, zone11, zone13, zone14]],
    [zone11, [zone6, zone7, zone10, zone14, zone22, zone23]],
    [zone12, [zone8, zone9, zone13, zone15, zone19, zone23]],
    [zone13, [zone9, zone10, zone12, zone14, zone15, zone16]],
    [zone14, [zone10, zone11, zone13, zone16, zone21, zone22]],
    [zone15, [zone12, zone13, zone16, zone17, zone20]],
    [zone16, [zone13, zone14, zone15, zone17, zone21]],
    [zone17, [zone15, zone16, zone20, zone21]],
    [zone18, [zone1, zone3, zone8, zone19, zone25]],
    [zone19, [zone8, zone12, zone18, zone20, zone24, zone25]],
    [zone20, [zone12, zone15, zone17, zone19, zone21, zone24]],
    [zone21, [zone14, zone16, zone17, zone20, zone22, zone24]],
    [zone22, [zone11, zone14, zone21, zone23, zone24, zone26]],
    [zone23, [zone2, zone7, zone11, zone22, zone26, zone28]],
    [zone24, [zone20, zone21, zone19, zone22, zone25, zone26]],
    [zone25, [zone1, zone18, zone19, zone24, zone26, zone27]],
    [zone26, [zone22, zone23, zone24, zone25, zone27, zone28]],
    [zone27, [zone1, zone25, zone26, zone28]],
    [zone28, [zone2, zone23, zone26, zone27]],
]);
