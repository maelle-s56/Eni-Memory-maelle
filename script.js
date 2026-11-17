const dosCarte = "/ressources/question.svg";
const pomme = "/ressources/memory-legume/1.svg";
const banane = "/ressources/memory-legume/2.svg";
const brocoli = "/ressources/memory-legume/3.svg";
const cerise = "/ressources/memory-legume/4.svg";
const piment = "/ressources/memory-legume/5.svg";
const fraise = "/ressources/memory-legume/6.svg";

const images =[pomme, banane, brocoli, cerise, piment, fraise];
const paires = melanger([...images, ...images]);

console.log(images);
console.log(paires);

function melanger(tableau) {
    for (let i = tableau.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    return tableau;
}
$("td").each(function (index){
    $(this).find(".face").attr("src", paires[index]);
});

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

/*cartesRetournees === 2
*/
