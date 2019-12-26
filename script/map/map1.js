const NEUTRE = "rgb(196, 196, 196)";

var map1 = new Map([
    [zone1, [zone2, zone3]],
    [zone2, [zone1, zone3, zone4]],
    [zone3, [zone1, zone2, zone4]],
    [zone4, [zone2, zone3]]
]);

var verif = function () {
    console.log("");
    console.log("Zone cliquée !");
    for ([key, value] of map1) {
        var color = key.style.fill;
        console.log("Vérification de la zone " + key.id);
        if (color == "" || color == NEUTRE) {
            console.log("Pas de couleur");
            return false;
        } else {
            console.log("Couleur : " + color);
            for (zone of value) {
                if (zone.style.fill == "" || zone.style == NEUTRE || zone.style.fill == color) {
                    console.log("Voisin " + zone.id + " non valide.")

                    return false;
                } else {
                    console.log("Voisin " + zone.id + " valide.")
                }
            }
        }
    }

    return true;
}
