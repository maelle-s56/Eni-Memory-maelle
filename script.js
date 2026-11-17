const dosCarte = "/ressources/question.svg";
const pomme = "/ressources/memory-legume/1.svg";
const banane = "/ressources/memory-legume/2.svg";
const brocoli = "/ressources/memory-legume/3.svg";
const cerise = "/ressources/memory-legume/4.svg";
const piment = "/ressources/memory-legume/5.svg";
const fraise = "/ressources/memory-legume/6.svg";

let nbCoup = 0;
let cartesRetournées = 0;

function init() {
    $("td").on("click", function () {
        const img = $(this).find("img");

        // si la carte est déjà retournée, on ne fait rien
        if (img.attr("src") !== dosCarte) {
            return;
        }

        img.attr("src", pomme);
        cartesRetournées++;
        if (cartesRetournées ===2){
            nbCoup++;
            $("#nbCoup").text("Nombre de coups : " + nbCoup);
            cartesRetournées = 0;
        }
        
    });
}

$(init);
