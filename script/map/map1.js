const NEUTRE = "rgb(196, 196, 196)";
const LINK1DARK = "canva1.html?dark"
const LINK1 = "canva1.html"
const LINK2DARK = "canva2.html?dark"
const LINK2 = "canva2.html"

var map = new Map([
    [zone1, [zone2, zone3]],
    [zone2, [zone1, zone3, zone4]],
    [zone3, [zone1, zone2, zone4]],
    [zone4, [zone2, zone3]]
]);
