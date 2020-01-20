//map france hard

// CONSTANTES
const LINK1DARK = "canva9.html?dark"
const LINK1 = "canva9.html";
const LINK2DARK = "canva10.html?dark";
const LINK2 = "canva10.html";

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
    var zone48 = document.getElementById('zone48');
    var zone49 = document.getElementById('zone49');
    var zone50 = document.getElementById('zone50');
    var zone51 = document.getElementById('zone51');
    var zone52 = document.getElementById('zone52');
    var zone53 = document.getElementById('zone53');
    var zone54 = document.getElementById('zone54');
    var zone55 = document.getElementById('zone55');
    var zone56 = document.getElementById('zone56');
    var zone57 = document.getElementById('zone57');
    var zone58 = document.getElementById('zone58');
    var zone59 = document.getElementById('zone59');

    var zone60 = document.getElementById('zone60');
    var zone61 = document.getElementById('zone61');
    var zone62 = document.getElementById('zone62');
    var zone63 = document.getElementById('zone63');
    var zone64 = document.getElementById('zone64');
    var zone65 = document.getElementById('zone65');
    var zone66 = document.getElementById('zone66');
    var zone67 = document.getElementById('zone67');
    var zone68 = document.getElementById('zone68');
    var zone69 = document.getElementById('zone69');
    var zone70 = document.getElementById('zone70');
    var zone71 = document.getElementById('zone71');
    var zone72 = document.getElementById('zone72');
    var zone73 = document.getElementById('zone73');
    var zone74 = document.getElementById('zone74');
    var zone75 = document.getElementById('zone75');
    var zone76 = document.getElementById('zone76');
    var zone77 = document.getElementById('zone77');
    var zone78 = document.getElementById('zone78');
    var zone79 = document.getElementById('zone79');

    var zone80 = document.getElementById('zone80');
    var zone81 = document.getElementById('zone81');
    var zone82 = document.getElementById('zone82');
    var zone83 = document.getElementById('zone83');
    var zone84 = document.getElementById('zone84');
    var zone85 = document.getElementById('zone85');
    var zone86 = document.getElementById('zone86');
    var zone87 = document.getElementById('zone87');
    var zone88 = document.getElementById('zone88');
    var zone89 = document.getElementById('zone89');

}

// MAP
var map = new Map([
    [zone1, [zone2, zone3]],
    [zone2, [zone1, zone3, zone4]],
    [zone3, [zone1, zone2, zone4, zone6, zone7]],
    [zone4, [zone2, zone3, zone5, zone7, zone8, zone16]],
    [zone5, [zone4, zone8, zone9, zone14, zone15]],
    [zone6, [zone3, zone7, zone15]],
    [zone7, [zone3, zone4, zone6, zone15, zone16]],
    [zone8, [zone4, zone5, zone9, zone16, zone17, zone18]],
    [zone9, [zone5, zone8, zone10, zone18, zone19]],
   
    [zone10, [zone9, zone11, zone19]],
    [zone11, [zone10, zone12]],
    [zone12, [zone10, zone11, zone19, zone20]],
    [zone13, [zone14, zone21, zone30, zone31]],
    [zone14, [zone13, zone15, zone21]],
    [zone15, [zone6, zone7, zone14, zone16, zone22, zone23, zone24]],
    [zone16, [zone4, zone7, zone8, zone15, zone17, zone22, zone23, zone24]],
    [zone17, [zone8, zone16, zone18, zone24, zone25]],
    [zone18, [zone8, zone9, zone17, zone19, zone25, zone26]],
    [zone19, [zone9, zone10, zone12, zone18, zone20, zone26]],
    
    [zone20, [zone12, zone19, zone27]],
    [zone21, [zone13, zone14, zone15, zone22, zone31, zone32]],
    [zone22, [zone15, zone16, zone21, zone23, zone32, zone33]],
    [zone23, [zone16, zone22, zone24, zone33, zone34, zone35]],
    [zone24, [zone16, zone17, zone23, zone25, zone35]],
    [zone25, [zone17, zone18, zone24, zone26, zone35, zone36, zone37]],
    [zone26, [zone18, zone19, zone25, zone27, zone37, zone38]],
    [zone27, [zone20, zone26, zone38]],
    [zone28, [zone29, zone39]],
    [zone29, [zone28, zone30, zone39]],
   
    [zone30, [zone13, zone29, zone31, zone39, zone40]],
    [zone31, [zone13, zone21, zone30, zone32, zone41]],
    [zone32, [zone21, zone22, zone31, zone33, zone41, zone42]],
    [zone33, [zone22, zone23, zone32, zone34, zone42, zone43]],
    [zone34, [zone23, zone33, zone35, zone43, zone44, zone45]],
    [zone35, [zone23, zone24, zone25, zone34, zone36, zone45]],
    [zone36, [zone25, zone35, zone37, zone45, zone47, zone48, zone49]],
    [zone37, [zone25, zone26, zone36, zone38, zone49]],
    [zone38, [zone26, zone27, zone37]],
    [zone39, [zone28, zone29, zone30, zone40]],

    [zone40, [zone30, zone39, zone41, zone51]],
    [zone41, [zone31, zone32, zone40, zone42, zone51, zone52, zone53]],
    [zone42, [zone32, zone33, zone41, zone43, zone53]],
    [zone43, [zone33, zone34, zone42, zone44, zone53, zone54]],
    [zone44, [zone34, zone43, zone45, zone46, zone54, zone55]],
    [zone45, [zone34, zone35, zone36, zone43, zone44, zone46, zone47]],
    [zone46, [zone44, zone45, zone47, zone54, zone56, zone57]],
    [zone47, [zone36, zone45, zone46, zone48, zone57]],
    [zone48, [zone36, zone47, zone49, zone60]],
    [zone49, [zone36, zone37, zone48, zone49, zone50, zone61]],
    
    [zone50, [zone49, zone61]],
    [zone51, [zone40, zone41, zone52, zone62]],
    [zone52, [zone41, zone42, zone51, zone53, zone62, zone63]],
    [zone53, [zone41, zone42, zone43, zone52, zone54, zone63]],
    [zone54, [zone43, zone44, zone53, zone55, zone63, zone64]],
    [zone55, [zone44, zone46, zone54, zone55, zone56, zone64, zone65]],
    [zone56, [zone46, zone55, zone57, zone65, zone66, zone67]],
    [zone57, [zone46, zone47, zone56, zone58, zone62]],
    [zone58, [zone47, zone57, zone59, zone60, zone67, zone68, zone69]],
    [zone59, [zone58, zone60, zone69, zone70, zone71]],
    
    [zone60, [zone47, zone48, zone49, zone59, zone61, zone71]],
    [zone61, [zone49, zone50, zone60, zone71]],
    [zone62, [zone51, zone52, zone63, zone64, zone72]], 
    [zone63, [zone52, zone53, zone54, zone62, zone64]],
    [zone64, [zone54, zone55, zone62, zone63, zone65, zone72, zone73]],
    [zone65, [zone55, zone56, zone64, zone66, zone73, zone74]],
    [zone66, [zone56, zone65, zone67, zone68, zone74, zone75, zone76]],
    [zone67, [zone56, zone57, zone58, zone66, zone68]],
    [zone68, [zone58, zone66, zone67, zone69, zone76, zone77]],
    [zone69, [zone58, zone59, zone68, zone70, zone71, zone77]],
    
    [zone70, [zone59, zone69, zone71, zone78, zone79]],
    [zone71, [zone59, zone60, zone61, zone69, zone78, zone79]],//
    [zone72, [zone62, zone64, zone73, zone80]],
    [zone73, [zone64, zone65, zone72, zone74, zone80, zone81]],
    [zone74, [zone65, zone66, zone73, zone75, zone81, zone82]],
    [zone75, [zone66, zone74, zone76, zone82, zone83]],
    [zone76, [zone66, zone68, zone75, zone83]],
    [zone77, [zone68, zone69, zone78]],
    [zone78, [zone70, zone77, zone79]],
    [zone79, [zone70, zone78]],
    
    [zone80, [zone72, zone73, zone81, zone84]],
    [zone81, [zone73, zone74, zone80, zone82, zone84, zone85]],
    [zone82, [zone74, zone75, zone81, zone83, zone85, zone86]],
    [zone83, [zone75, zone76, zone82, zone86, zone87]],
    [zone84, [zone80, zone81, zone85]],
    [zone85, [zone81, zone82, zone84]],
    [zone86, [zone82, zone83, zone87]],
    [zone87, [zone83, zone86]],
    [zone88, [zone89]],
    [zone89, [zone88]],
]);
