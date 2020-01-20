const NEUTRE = "rgb(196, 196, 196)";

// Donne une couleur qui peut être sélectionné dans la pannel de couleur en bas du la page
var red = document.getElementById('red');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var yellow = document.getElementById('yellow');

// La couleur que la souris à en mémoire exemple 1=rouge, 2=bleu,....
var selectedColor = 0;

// Le panneau de début qui affiche le nom du niveau, et qui doit être animé.
var levelTitle = document.getElementById('level-title');

// Le panneau de fin qui permet de donner comme choix (recommencer ou prochaine carte)
var endPannel = document.getElementById('endPannel');

// La couleur du background, le premier lien qui est rejoué et le deuxième qui est le suivant
var bg = document.getElementById('bg');
var firstLink = document.getElementById('firstLink');
var secondLink = document.getElementById('secondLink');
// +EndPannel

// La variable pour changer le thème du jeu
var switcher = document.getElementById('switcher');

var clearButton = document.getElementById('clearButton');
// On charge la page, puis elle appelle la fonction qui détecte si 
// le thème est dark ou pas en cherchant dans l'URL le "?dark"
window.addEventListener('load', function (event) {
    // Theme switching
    if (window.location.search.substr(1) == 'dark') {
        console.log('Theme should be switched.');
        switchTheme();
    }

    // Sur la carte et ses zones, quand on clique sur la zone, elle remplie la zone avec la couleur 
    // que la souris a en mémoire 
    console.log(map);
    for ([zone, voisins] of map) {
        console.log(zone);
        zone.addEventListener('click', function (event) {
            fill(this, selectedColor);
        });
    }
    
    setTimeout(function() {
        levelTitle.classList = "animated";
    }, 500);
    setTimeout(function() {
        levelTitle.classList = "";
    }, 3000);
});

// Quand on clique sur une couleur dans le pannel de couleur
// La souris oublies la couleur qu'elle avait et prend la nouvelle en mémoire
// Si on selectionne deux fois la même couleur de suit, elle oublie la couleur sélectionné
blue.addEventListener('click', function (event) {
    document.body.classList = "";
    if (selectedColor != 1) {
        remove(selectedColor);
        document.body.classList.add("blueCursor");
        selectedColor = 1;
        blue.classList.add("selected");
    } else {
        selectedColor = 0;
        blue.classList.remove("selected");
    }
});

red.addEventListener('click', function (event) {
    document.body.classList = "";
    if (selectedColor != 2) {
        remove(selectedColor);
        document.body.classList.add("redCursor");
        selectedColor = 2;
        red.classList.add("selected");
    } else {
        selectedColor = 0;
        red.classList.remove("selected");
    }
});

green.addEventListener('click', function (event) {
    document.body.classList = "";
    if (selectedColor != 3) {
        remove(selectedColor);
        document.body.classList.add("greenCursor");
        selectedColor = 3;
        green.classList.add("selected");
    } else {
        selectedColor = 0;
        green.classList.remove("selected");
    }
});

yellow.addEventListener('click', function (event) {
    document.body.classList = "";
    if (selectedColor != 4) {
        remove(selectedColor);
        document.body.classList.add("yellowCursor");
        selectedColor = 4;
        yellow.classList.add("selected");
    } else {
        selectedColor = 0;
        yellow.classList.remove("selected");
    }
});
// Si l'on clique sur la zone et qu'elle a la même couleur en mémoire que celle de la souris
// Elle colorie la zone en neutre
var remove = function (colorToRemove) {
    if (colorToRemove == 0) {} else if (colorToRemove == 1) {
        blue.classList.remove("selected");
    } else if (colorToRemove == 2) {
        red.classList.remove("selected");
    } else if (colorToRemove == 3) {
        green.classList.remove("selected");
    } else {
        yellow.classList.remove("selected");
    }
}
// Cette fonction permet de colorier les zones qu'on clique dessus avec une couleur 
var fill = function (zone, colorToFill) {
    if ((colorToFill == 0) || (zone.style.fill == "blue" && colorToFill == 1) || (zone.style.fill == "red" && colorToFill == 2) || (zone.style.fill == "green" && colorToFill == 3) || (zone.style.fill == "yellow" && colorToFill == 4)) {
        zone.style.fill = "#C4C4C4";
    } else if (colorToFill == 1) {
        zone.style.fill = "blue";
    } else if (colorToFill == 2) {
        zone.style.fill = "red";
    } else if (colorToFill == 3) {
        zone.style.fill = "green";
    } else {
        zone.style.fill = "yellow";
    }
// Si la vérification des théorèmes des 4 couleurs est vérifié, alors le pannel apparaît
// Et oublie la couleur sélectionné
    if (verif()) {
        endPannel.style.transform = "translate(-50%, -50%)"
        document.body.classList = "";
        remove(selectedColor);
        selectedColor = 0;
    }
}
// Key représente la zone qui a été colorié
// Value représente les zones adjacentes à celle qui est coloriée
// Si une zone est neutre, alors la vérification est fausse
// Si une couleur a la même valeur (soit couleur) que ses zones adjacentes alors c'est faux
// Si toutes les zones adjacentes possèdent des valeurs différentes une à une alors c'est vrai 
// Si c'est vrai le pannel end apparaît
var verif = function () {
    console.log("");
    console.log("Zone cliquée !");
    for ([key, value] of map) {
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

/* ************************************ *\
**                                      **
**            THEME SOMBRE              **
**                                      **
\* ************************************ */

//Quand on clique sur l'icone du switcher, on appelle la fonction switch thème
switcher.addEventListener('click', function (event) {
    switchTheme();
});
 
 // La fonction switch thème permet de changer le background et le panneau de fin (end pannel)
var switchTheme = function () {
    console.log('Theme switched !');
    bg.classList.toggle('dark');
    endPannel.classList.toggle('dark');
    switcher.classList.toggle('dark');
    clearButton.classList.toggle('dark');

    // Dans le lien, quand le thème est dart, il ajoute ?dark à l'URL et le rajoute à chaque fois
    // Qu'on appelle une fonction qui est sur le end pannel (Recommencer ou Next)
    var locationBasis = window.location.href.split('canva')[0];
    if (firstLink.href == locationBasis + LINK1) {
        console.log('links changed to dark.');
        firstLink.href = LINK1DARK;
        secondLink.href = LINK2DARK;
    } else {
    // Si le thème est clair donc on laisse le premier lien sans le ?dark
        console.log('links changed to bright.');
        firstLink.href = LINK1;
        secondLink.href = LINK2;
    }
}

// Reload de la page (pour enlever les couleurs)
clearButton.addEventListener('click', function (event) {
    window.location.replace(firstLink.href);
});
