// CONSTANTES
const LINK1DARK = "canva10.html?dark"
const LINK1 = "canva10.html";
const LINK2DARK = "fin.html?dark";
const LINK2 = "fin.html";

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
    [zone1, [zone2, zone3, zone4, zone5, zone6]],
    [zone2, [zone1, zone6, zone7, zone8, zone9, zone10, zone11, zone12, zone21, zone102, zone110, zone112]],
    [zone3, [zone1, zone4, zone13, zone58, zone103, zone104, zone105, zone106, zone107, zone111]],
    [zone4, [zone1, zone3, zone5, zone13, zone14]],
    [zone5, [zone1, zone4, zone6, zone14, zone15]],
    [zone6, [zone1, zone2, zone5, zone7, zone15, zone16]],
    [zone7, [zone2, zone6, zone8, zone16, zone17]],
    [zone8, [zone2, zone7, zone9, zone17, zone18]],
    [zone9, [zone2, zone8, zone10, zone18, zone19]],
    [zone10, [zone2, zone9, zone11, zone19, zone20]],
    [zone11, [zone2, zone10, zone12, zone20, zone21]],
    [zone12, [zone2, zone11, zone21]],
    [zone13, [zone3, zone4, zone14, zone22, zone58, zone59]],
    [zone14, [zone4, zone5, zone13, zone15, zone22, zone23]],
    [zone15, [zone5, zone6, zone14, zone16, zone23, zone24]],
    [zone16, [zone6, zone7, zone15, zone17, zone24, zone25]],
    [zone17, [zone7, zone8, zone16, zone18, zone25, zone26]],
    [zone18, [zone8, zone9, zone17, zone19, zone26, zone27]],
    [zone19, [zone9, zone10, zone18, zone20, zone27, zone28]],
    [zone20, [zone10, zone11, zone19, zone21, zone28, zone29]],

    [zone21, [zone2, zone11, zone12, zone20, zone29, zone102]],
    [zone22, [zone13, zone14, zone23, zone30, zone59, zone60]],
    [zone23, [zone14, zone15, zone22, zone24, zone30, zone31]],
    [zone24, [zone15, zone16, zone23, zone25, zone31, zone32]],
    [zone25, [zone16, zone17, zone24, zone26, zone32, zone33]],
    [zone26, [zone17, zone18, zone25, zone27, zone33, zone34]],
    [zone27, [zone18, zone19, zone26, zone28, zone34, zone35]],
    [zone28, [zone19, zone20, zone27, zone29, zone35, zone36]],
    [zone29, [zone20, zone21, zone28, zone36, zone94, zone102]],
    [zone30, [zone22, zone23, zone31, zone37, zone60, zone61]],
    [zone31, [zone23, zone24, zone30, zone32, zone37, zone38]],
    [zone32, [zone24, zone25, zone31, zone33, zone38, zone39]],
    [zone33, [zone25, zone26, zone32, zone34, zone39, zone40]],
    [zone34, [zone26, zone27, zone33, zone35, zone40, zone41]],
    [zone35, [zone27, zone28, zone34, zone36, zone41, zone42]],
    [zone36, [zone28, zone29, zone35, zone42, zone87, zone94]],
    [zone37, [zone30, zone31, zone38, zone43, zone61, zone62]],
    [zone38, [zone31, zone32, zone37, zone39, zone43, zone44]],
    [zone39, [zone32, zone33, zone38, zone40, zone44, zone45]],

    [zone40, [zone33, zone34, zone39, zone41, zone45, zone46]],
    [zone41, [zone34, zone35, zone40, zone42, zone46, zone47]],
    [zone42, [zone35, zone36, zone41, zone47, zone81, zone87]],
    [zone43, [zone37, zone38, zone44, zone48, zone62, zone63]],
    [zone44, [zone38, zone39, zone43, zone45, zone48, zone49]],
    [zone45, [zone39, zone40, zone44, zone46, zone49, zone50]],
    [zone46, [zone40, zone41, zone45, zone47, zone50, zone51]],
    [zone47, [zone41, zone42, zone46, zone51, zone76, zone81]],
    [zone48, [zone43, zone44, zone49, zone52, zone63, zone64]],
    [zone49, [zone44, zone45, zone48, zone50, zone52, zone53]],
    [zone50, [zone45, zone46, zone49, zone51, zone53, zone54]],
    [zone51, [zone46, zone47, zone50, zone54, zone72, zone76]],
    [zone52, [zone48, zone49, zone53, zone55, zone64, zone65]],
    [zone53, [zone49, zone50, zone52, zone54, zone55, zone56]],
    [zone54, [zone50, zone51, zone53, zone56, zone69, zone72]],
    [zone55, [zone52, zone53, zone56, zone57, zone65, zone66]],
    [zone56, [zone53, zone54, zone55, zone57, zone67, zone69]],
    [zone57, [zone55, zone56, zone66, zone67]],
    [zone58, [zone3, zone13, zone59, zone103]],
    [zone59, [zone13, zone22, zone58, zone60, zone95, zone103]],

    [zone60, [zone22, zone30, zone59, zone61, zone88, zone95]],
    [zone61, [zone30, zone37, zone60, zone62, zone82, zone88]],
    [zone62, [zone37, zone43, zone61, zone63, zone77, zone82]],
    [zone63, [zone43, zone48, zone62, zone64, zone73, zone77]],
    [zone64, [zone48, zone52, zone63, zone65, zone70, zone73]],
    [zone65, [zone52, zone55, zone64, zone66, zone68, zone70]],
    [zone66, [zone55, zone57, zone65, zone67, zone68]],
    [zone67, [zone56, zone57, zone66, zone68, zone69]],
    [zone68, [zone65, zone66, zone67, zone69, zone70, zone71]],
    [zone69, [zone54, zone56, zone67, zone68, zone71, zone21]],
    [zone70, [zone64, zone65, zone68, zone71, zone73, zone74]],
    [zone71, [zone68, zone69, zone70, zone72, zone74, zone75]],
    [zone72, [zone51, zone54, zone69, zone71, zone75, zone76]],
    [zone73, [zone63, zone64, zone70, zone74, zone77, zone78]],
    [zone74, [zone70, zone71, zone73, zone75, zone78, zone79]],
    [zone75, [zone71, zone72, zone74, zone76, zone79, zone80]],
    [zone76, [zone47, zone51, zone72, zone75, zone80, zone81]],
    [zone77, [zone62, zone63, zone73, zone78, zone82, zone83]],
    [zone78, [zone73, zone74, zone77, zone79, zone83, zone84]],
    [zone79, [zone74, zone75, zone78, zone80, zone84, zone85]],

    [zone80, [zone75, zone76, zone79, zone81, zone85, zone86]],
    [zone81, [zone42, zone47, zone76, zone80, zone86, zone87]],
    [zone82, [zone61, zone62, zone77, zone83, zone88, zone89]],
    [zone83, [zone77, zone78, zone82, zone84, zone89, zone90]],
    [zone84, [zone78, zone79, zone83, zone85, zone90, zone91]],
    [zone85, [zone79, zone80, zone84, zone86, zone91, zone92]],
    [zone86, [zone80, zone81, zone85, zone87, zone92, zone93]],
    [zone87, [zone36, zone42, zone81, zone86, zone93, zone94]],
    [zone88, [zone60, zone61, zone82, zone89, zone95, zone96]],
    [zone89, [zone82, zone83, zone88, zone90, zone96, zone97]],
    [zone90, [zone83, zone84, zone89, zone91, zone97, zone98]],
    [zone91, [zone84, zone85, zone90, zone92, zone98, zone99]],
    [zone92, [zone85, zone86, zone91, zone93, zone99, zone100]],
    [zone93, [zone86, zone87, zone92, zone94, zone100, zone101]],
    [zone94, [zone29, zone36, zone87, zone93, zone101, zone102]],
    [zone95, [zone59, zone60, zone88, zone96, zone103, zone104]],
    [zone96, [zone88, zone89, zone95, zone97, zone104, zone105]],
    [zone97, [zone89, zone90, zone96, zone98, zone105, zone106]],
    [zone98, [zone90, zone91, zone97, zone99, zone106, zone107]],
    [zone99, [zone91, zone92, zone98, zone100, zone107, zone108]],

    [zone100, [zone92, zone93, zone99, zone101, zone108, zone109]],
    [zone101, [zone93, zone94, zone100, zone102, zone109, zone110]],
    [zone102, [zone2, zone21, zone29, zone94, zone101, zone110]],
    [zone103, [zone3, zone58, zone59, zone95, zone104]],
    [zone104, [zone3, zone95, zone96, zone103, zone105]],
    [zone105, [zone3, zone96, zone97, zone104, zone106]],
    [zone106, [zone3, zone97, zone98, zone105, zone107]],
    [zone107, [zone3, zone98, zone99, zone106, zone108, zone111]],
    [zone108, [zone99, zone100, zone107, zone109, zone111]],
    [zone109, [zone100, zone101, zone108, zone110, zone111, zone112]],
    [zone110, [zone2, zone101, zone102, zone109, zone112]],
    [zone111, [zone3, zone107, zone108, zone109, zone112]],
    [zone112, [zone2, zone109, zone110, zone111]]
]);
