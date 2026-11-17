const dosCarte = "/ressources/question.svg";
const pomme = "/ressources/memory-legume/1.svg";
const banane = "/ressources/memory-legume/2.svg";
const brocoli = "/ressources/memory-legume/3.svg";
const cerise = "/ressources/memory-legume/4.svg";
const piment = "/ressources/memory-legume/5.svg";
const fraise = "/ressources/memory-legume/6.svg";

let nbCoup = 0;
let cartesRetournees = 0;

function init() {
    $("td").on("click", function () {
        const carte = $(this).find(".carte");

        if (carte.hasClass("retournee")) {
            return;
        }

        carte.addClass("retournee");

        cartesRetournees++;
        if (cartesRetournees === 2) {
            nbCoup++;
            $("#nbCoup").text("Nombre de coups : " + nbCoup);
            cartesRetournees = 0;
        }
    });
}

$(init);
