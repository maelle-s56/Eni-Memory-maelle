const dosCarte = "/ressources/question.svg";
const pomme = "/ressources/memory-legume/1.svg";
const banane = "/ressources/memory-legume/2.svg";
const brocoli = "/ressources/memory-legume/3.svg";
const cerise = "/ressources/memory-legume/4.svg";
const piment = "/ressources/memory-legume/5.svg";
const fraise = "/ressources/memory-legume/6.svg";

//Tableau des images (sans paires)
const images = [pomme, banane, brocoli, cerise, piment, fraise];

let nbCoup = 0;
let cartesRetournees = [];
let blocage = false;

//Fonction mélanger (l’algorithme de Fisher )
function melanger(tableau) {
  for (let i = tableau.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
  }
  return tableau;
}

const victory = document.getElementById("consigne");
//Fonction nouvellePartie pour créer le plateau de 12 images mélangées
function nouvellePartie() {
  const paires = melanger([...images, ...images]);

  $(".carte").removeClass("retournee trouvee");
  victory.textContent = "Tentez de gagner avec le moins d'essais possible.";

  //fonction pour retarder le changement des cartes (face cachée)
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

//Phrase de victoire
function verifierVictoire() {
  if ($(".carte.trouvee").length === 12) {
    victory.textContent = "Bravo ! Vous avez Gagné !";
  }
}
//Fonction comparer les 2 cartes retournées
function comparer() {
  const [carte1, carte2] = cartesRetournees;
  const src1 = carte1.find(".face").attr("src");
  const src2 = carte2.find(".face").attr("src");

  if (src1 === src2) {
    carte1.addClass("trouvee");
    carte2.addClass("trouvee");
    cartesRetournees = [];
    verifierVictoire();
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

//Fonction pour compter le nombre de coups
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

  //fonction pour relancer la partie avec barre d'espace
  $(document).on("keydown", function (event) {
    if (event.code === "Space") {
      event.preventDefault();
      nouvellePartie();
    }
  });

  //Appel de la fonction nouvelle partie
  nouvellePartie();
}

//Appel de la fonction init pour compter le le nombre de coups
$(init);
