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
    var zone90 = document.getElementById('zone90');
    var zone91 = document.getElementById('zone91');
    var zone92 = document.getElementById('zone92');
    var zone93 = document.getElementById('zone93');
    var zone94 = document.getElementById('zone94');
    var zone95 = document.getElementById('zone95');
    var zone96 = document.getElementById('zone96');
    var zone97 = document.getElementById('zone97');
    var zone98 = document.getElementById('zone98');
    var zone99 = document.getElementById('zone99');
    
    var zone100 = document.getElementById('zone100');
    var zone101 = document.getElementById('zone101');
    var zone102 = document.getElementById('zone102');
    var zone103 = document.getElementById('zone103');
    var zone104 = document.getElementById('zone104');
    var zone105 = document.getElementById('zone105');
    var zone106 = document.getElementById('zone106');
    var zone107 = document.getElementById('zone107');
    var zone108 = document.getElementById('zone108');
    var zone109 = document.getElementById('zone109');
    var zone110 = document.getElementById('zone110');
    var zone111 = document.getElementById('zone111');
    var zone112 = document.getElementById('zone112');
    
}

// MAP
var map = new Map([
    [zone1, [zone2, zone3, zone4, zone5, zone8, zone17, zone19]],
    [zone2, [zone1, zone3, zone6, zone12, zone18, zone19]],
    [zone3, [zone1, zone2, zone4, zone6, zone7]],
    [zone4, [zone1, zone3, zone5, zone7, zone8]],
    [zone5, [zone1, zone4, zone8]],
    [zone6, [zone2, zone3, zone7, zone9, zone12, zone13]],
    [zone7, [zone3, zone4, zone6, zone8, zone9, zone10]],
    [zone8, [zone1, zone4, zone5, zone7, zone10, zone17]],
    [zone9, [zone6, zone7, zone10, zone11, zone13, zone14]],
    [zone10, [zone7, zone8, zone9, zone11, zone15, zone17]],
    [zone11, [zone9, zone10, zone14, zone15]],
    [zone12, [zone2, zone6, zone13, zone18]],
    [zone13, [zone6, zone9, zone12, zone14, zone16, zone18]],
    [zone14, [zone9, zone11, zone13, zone15, zone16]],
    [zone15, [zone10, zone11, zone14, zone16, zone17]],
    [zone16, [zone13, zone14, zone15, zone17, zone18, zone19]],
    [zone17, [zone1, zone8, zone10, zone15, zone16, zone19]],
    [zone18, [zone2, zone12, zone13, zone16, zone19]],
    [zone19, [zone1, zone2, zone16, zone17, zone18,]]
]);
