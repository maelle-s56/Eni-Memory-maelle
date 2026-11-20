// Image affichée au dos des cartes (face cachée)
const dosCarte = "ressources/question.svg";

// Images des 6 légumes/fruits utilisés pour les paires
const pomme = "ressources/memory-legume/1.svg";
const banane = "ressources/memory-legume/2.svg";
const brocoli = "ressources/memory-legume/3.svg";
const cerise = "ressources/memory-legume/4.svg";
const piment = "ressources/memory-legume/5.svg";
const fraise = "ressources/memory-legume/6.svg";

// Tableau des images (une seule occurrence de chaque : les paires sont créées plus tard)
const images = [pomme, banane, brocoli, cerise, piment, fraise];

// Compteur du nombre de coups joués (un coup = deux cartes retournées)
let nbCoup = 0;

// Stocke les cartes actuellement retournées et en attente de comparaison (2 maximum)
let cartesRetournees = [];

// Empêche le joueur de cliquer pendant l'animation de retour des cartes différentes
let blocage = false;

/**
 * Mélange un tableau avec l'algorithme de Fisher-Yates.
 * On parcourt le tableau de la fin vers le début et on échange chaque
 * élément avec un élément choisi au hasard parmi ceux qui précèdent (lui compris).
 * @param {Array} tableau - Le tableau à mélanger (modifié directement)
 * @returns {Array} Le même tableau, mélangé
 */
function melanger(tableau) {
  for (let i = tableau.length - 1; i > 0; i--) {
    // Choisit un index aléatoire entre 0 et i inclus
    const j = Math.floor(Math.random() * (i + 1));
    // Échange des éléments i et j (affectation par décomposition)
    [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
  }
  return tableau;
}

// Élément HTML affichant la consigne / le message de victoire
const victory = document.getElementById("consigne");

/**
 * Lance une nouvelle partie : mélange les cartes, retourne tout face cachée
 * et remet à zéro les variables d'état et l'affichage.
 */
function nouvellePartie() {
  // Duplique le tableau d'images pour obtenir 12 cartes (6 paires), puis les mélange
  const paires = melanger([...images, ...images]);

  // Retire les classes pour remettre toutes les cartes face cachée
  $(".carte").removeClass("retournee trouvee");
  // Réinitialise le message affiché au joueur
  victory.textContent = "Tentez de gagner avec le moins d'essais possible.";

  // Attend 1 seconde avant de changer les images, pour que le joueur
  // ne voie pas les nouvelles faces pendant que les cartes se retournent
  setTimeout(function () {
    // Pour chaque case du tableau, assigne l'image mélangée correspondante
    $("td").each(function (index) {
      $(this).find(".face").attr("src", paires[index]);
    });
  }, 1000);

  // Réinitialisation des variables d'état
  nbCoup = 0;
  cartesRetournees = [];
  blocage = false;
  // Remet le compteur à zéro dans l'affichage
  $("#nbCoup").text("Nombre de coups : 0");
}

/**
 * Vérifie si toutes les cartes ont été trouvées.
 * Si les 12 cartes sont marquées "trouvee", affiche le message de victoire.
 */
function verifierVictoire() {
  if ($(".carte.trouvee").length === 12) {
    victory.textContent = "Bravo ! Vous avez Gagné !";
  }
}

/**
 * Compare les deux cartes retournées.
 * - Si elles sont identiques : elles restent visibles (classe "trouvee").
 * - Sinon : on bloque le jeu 1 seconde puis on les retourne face cachée.
 */
function comparer() {
  // Récupère les deux cartes stockées (affectation par décomposition)
  const [carte1, carte2] = cartesRetournees;
  // Récupère la source de l'image de chaque carte pour les comparer
  const src1 = carte1.find(".face").attr("src");
  const src2 = carte2.find(".face").attr("src");

  if (src1 === src2) {
    // Paire trouvée : on marque les deux cartes comme trouvées
    carte1.addClass("trouvee");
    carte2.addClass("trouvee");
    // Vide le tableau pour permettre un nouveau coup
    cartesRetournees = [];
    // Vérifie si la partie est terminée
    verifierVictoire();
  } else {
    // Pas de paire : on bloque les clics le temps que le joueur mémorise les cartes
    blocage = true;
    setTimeout(function () {
      // Retourne les deux cartes face cachée
      carte1.removeClass("retournee");
      carte2.removeClass("retournee");
      // Réinitialise pour le coup suivant et débloque les clics
      cartesRetournees = [];
      blocage = false;
    }, 1000);
  }
}

/**
 * Initialise le jeu : met en place les écouteurs d'événements
 * (clic sur les cartes, touche espace) et démarre la première partie.
 */
function init() {
  // Gère le clic sur chaque case du tableau
  $("td").on("click", function () {
    // Récupère la carte contenue dans la case cliquée
    const carte = $(this).find(".carte");

    // Ignore le clic si le jeu est bloqué ou si la carte est déjà retournée
    if (blocage || carte.hasClass("retournee")) {
      return;
    }

    // Retourne la carte et l'ajoute à la liste des cartes à comparer
    carte.addClass("retournee");
    cartesRetournees.push(carte);

    // Quand deux cartes sont retournées, un coup est comptabilisé
    if (cartesRetournees.length === 2) {
      nbCoup++;
      // Met à jour l'affichage du compteur
      $("#nbCoup").text("Nombre de coups : " + nbCoup);
      // Compare les deux cartes
      comparer();
    }
  });

  // Relance une partie lorsque l'on appuie sur la barre d'espace
  $(document).on("keydown", function (event) {
    if (event.code === "Space") {
      // Empêche le comportement par défaut (défilement de la page)
      event.preventDefault();
      nouvellePartie();
    }
  });

  // Démarre la première partie au chargement
  nouvellePartie();
}

// Lance init() une fois que le DOM est entièrement chargé (raccourci jQuery de $(document).ready)
$(init);
