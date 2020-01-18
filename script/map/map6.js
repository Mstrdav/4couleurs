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
    var zone36 = document.getElementById('zone36');
    var zone37 = document.getElementById('zone37');
    var zone38 = document.getElementById('zone38');
    var zone39 = document.getElementById('zone39');
    var zone40 = document.getElementById('zone40');
    var zone41 = document.getElementById('zone41');
    var zone42 = document.getElementById('zone42');
    var zone43 = document.getElementById('zone43');
    var zone44 = document.getElementById('zone44');
    var zone45 = document.getElementById('zone45');
    var zone46 = document.getElementById('zone46');
    var zone47 = document.getElementById('zone47');
}

// MAP
var map = new Map([
    [zone1, [zone2, zone8]],
    [zone2, [zone1, zone3, zone8, zone9, zone14, zone15]],
    [zone3, [zone2, zone4, zone9, zone10]],
    [zone4, [zone3, zone5, zone10]],
    [zone5, [zone4, zone6, zone10, zone12]],
    [zone6, [zone5, zone7, zone12, zone19]],
    [zone7, [zone6, zone20, zone21]],
    [zone8, [zone1, zone2, zone13, zone14]],
    [zone9, [zone2, zone3, zone10, zone11, zone15, zone16]],
    [zone10, [zone3, zone4, zone5, zone9, zone11, zone12]],
    [zone11, [zone9, zone10, zone12, zone16, zone17, zone18]],
    [zone12, [zone5, zone6, zone10, zone18, zone19]],
    [zone13, [zone8, zone14, zone35]],
    [zone14, [zone2, zone8, zone13, zone15, zone35]],
    [zone15, [zone2, zone9, zone14, zone16, zone35]],
    [zone16, [zone9, zone11, zone15, zone17, zone36, zone37]],
    [zone17, [zone11, zone16, zone18, zone37]],
    [zone18, [zone11, zone12, zone17, zone19, zone34, zone37, zone38, zone39]],
    [zone19, [zone6, zone12, zone18, zone20, zone34]],
    [zone20, [zone7, zone19, zone21, zone34]],
    [zone21, [zone7, zone20, zone22, zone32, zone35]],
    [zone22, [zone21, zone23, zone29, zone30, zone31, zone32]],
    [zone23, [zone22, zone24, zone27, zone28, zone29]],
    [zone24, [zone23, zone25, zone27]],
    [zone25, [zone24, zone26, zone27]],
    [zone26, [zone25]], 
    [zone27, [zone23, zone24, zone25, zone28]],
    [zone28, [zone23, zone27]],
    [zone29, [zone22, zone23, zone30]],
    [zone30, [zone22, zone29, zone31]],
    [zone31, [zone22, zone30, zone32, zone33]],
    [zone32, [zone21, zone22, zone31, zone33, zone34]],
    [zone33, [zone31, zone32, zone34, zone39, zone40]],
    [zone34, [zone18, zone19, zone20, zone21, zone32, zone33, zone39]],
    [zone35, [zone13, zone14, zone15, zone36]],
    [zone36, [zone16, zone35, zone37, zone41]],
    [zone37, [zone16, zone17, zone18, zone36, zone38, zone41]],
    [zone38, [zone18, zone37, zone39, zone41, zone42, zone43]],
    [zone39, [zone18, zone33, zone34, zone38, zone40, zone43, zone44, zone45]],
    [zone40, [zone33, zone39, zone45, zone46]],
    [zone41, [zone36, zone37, zone38, zone42]],
    [zone42, [zone38, zone41, zone43]],
    [zone43, [zone38, zone39, zone42, zone44]],
    [zone44, [zone39, zone43, zone45, zone47]],
    [zone45, [zone39, zone40, zone44, zone46, zone47]],
    [zone46, [zone40, zone45]],
    [zone47, [zone44, zone45]],
]);