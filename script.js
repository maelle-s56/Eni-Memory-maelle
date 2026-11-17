const dosCarte = "/ressources/question.svg";
const pomme    = "/ressources/memory-legume/1.svg";
const banane   = "/ressources/memory-legume/2.svg";
const brocoli  = "/ressources/memory-legume/3.svg";
const cerise   = "/ressources/memory-legume/4.svg";
const piment   = "/ressources/memory-legume/5.svg";
const fraise   = "/ressources/memory-legume/6.svg";

//Tableau des images (sans paires)
const images = [pomme, banane, brocoli, cerise, piment, fraise];

let nbCoup = 0;
let cartesRetournees = [];
let blocage = false;

//créer un tableau des cartes mélangées
function melanger(tableau) {
    for (let i = tableau.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    return tableau;
}

function nouvellePartie() {
    const paires = melanger([...images, ...images]);

    $(".carte").removeClass("retournee trouvee");

    setTimeout(function () {
        $("td").each(function (index) {
            $(this).find(".face").attr("src", paires[index]);
        });
    }, 1000);

    nbCoup = 0;
    cartesRetournees = [];
    blocage = false;
    $("#nbCoup").text("Nombre de coups : 0");
}

function comparer() {
    const [carte1, carte2] = cartesRetournees;

    const src1 = carte1.find(".face").attr("src");
    const src2 = carte2.find(".face").attr("src");

    if (src1 === src2) {
        carte1.addClass("trouvee");
        carte2.addClass("trouvee");
        cartesRetournees = [];
    } else {
        blocage = true;
        setTimeout(function () {
            carte1.removeClass("retournee");
            carte2.removeClass("retournee");
            cartesRetournees = [];
            blocage = false;
        }, 1000);
    }
}

function init() {
    $("td").on("click", function () {
        const carte = $(this).find(".carte");

        if (blocage || carte.hasClass("retournee")) {
            return;
        }
        carte.addClass("retournee");
        cartesRetournees.push(carte);

        if (cartesRetournees.length === 2) {
            nbCoup++;
            $("#nbCoup").text("Nombre de coups : " + nbCoup);
            comparer();
        }
    });

    $(document).on("keydown", function (event) {
        if (event.code === "Space") {
            event.preventDefault();
            nouvellePartie();
        }
    });

    nouvellePartie();
}

$(init);