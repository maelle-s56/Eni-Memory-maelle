// Champ nom, message d'aide associé et icône de validation
const nom = document.getElementById("nom");
const verifNom = document.getElementById("verifNom");
const iconeNom = document.getElementById("iconeNom");

// Champ email, message d'aide associé et icône de validation
const email = document.getElementById("email");
const verifEmail = document.getElementById("verifEmail");
const iconeEmail = document.getElementById("iconeEmail");

// Champ mot de passe et son icône de validation
const mdp = document.getElementById("motdePasse");
const iconeMdp = document.getElementById("iconeMdp");

// Champ de confirmation du mot de passe et son icône de validation
const confMdp = document.getElementById("confMotdePasse");
const iconeMdpVerif = document.getElementById("iconeMdpVerif");

// Chemins des icônes d'erreur et de validation
const error = "ressources/error.svg";
const ok = "ressources/check.svg";

// Cache toutes les icônes au chargement : elles n'apparaissent qu'à la saisie
iconeNom.hidden = true;
iconeEmail.hidden = true;
iconeMdp.hidden = true;
iconeMdpVerif.hidden = true;

// Indique si le dernier champ testé (nom ou email) est valide
// Elle est utilisée par colorText() pour choisir la couleur du texte d'aide
let condition = false;

// À chaque saisie dans le champ nom, on teste sa conformité
nom.addEventListener("input", () => {
  // Champ vide : on cache l'icône et on arrête là
  if (nom.value === "") {
    iconeNom.hidden = true;
    return;
  }
  // Le nom est valide s'il contient au moins 3 caractères
  if (nom.value.length >= 3) {
    condition = true;
    colorText(verifNom); // Texte d'aide en noir
    iconeNom.hidden = false;
    iconeNom.src = "ressources/check.svg"; // Icône de validation
  } else {
    condition = false;
    colorText(verifNom); // Texte d'aide en rouge
    iconeNom.hidden = false;
    iconeNom.src = "ressources/error.svg"; // Icône d'erreur
  }
});

// À chaque saisie dans le champ email, on teste sa conformité
email.addEventListener("input", () => {
  // Champ vide : on cache l'icône et on arrête là
  if (email.value === "") {
    iconeEmail.hidden = true;
    return;
  }
  // Expression régulière : texte@texte.texte, sans espace ni second @
  if (email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    condition = true;
    colorText(verifEmail); // Texte d'aide en noir
    iconeEmail.hidden = false;
    iconeEmail.src = "ressources/check.svg";
  } else {
    condition = false;
    colorText(verifEmail); // Texte d'aide en rouge
    iconeEmail.hidden = false;
    iconeEmail.src = "ressources/error.svg";
  }
});

// Éléments (indicateur visuel + texte) pour chacun des 3 niveaux de sécurité,
// tous cachés au départ
const verifMdpFaible = document.getElementById("verifMdpFaible");
const verifMdpTextFaible = document.getElementById("verifMdpTextFaible");
verifMdpFaible.hidden = true;
verifMdpTextFaible.hidden = true;

const verifMdpMoyen = document.getElementById("verifMdpMoyen");
const verifMdpTextMoyen = document.getElementById("verifMdpTextMoyen");
verifMdpMoyen.hidden = true;
verifMdpTextMoyen.hidden = true;

const verifMdpFort = document.getElementById("verifMdpFort");
const verifMdpTextFort = document.getElementById("verifMdpTextFort");
verifMdpFort.hidden = true;
verifMdpTextFort.hidden = true;

// À chaque saisie, on évalue la force du mot de passe (faible, moyen ou fort)
mdp.addEventListener("input", () => {
  // Réinitialise l'affichage : on cache tous les niveaux avant de réévaluer
  verifMdpFaible.hidden = true;
  verifMdpTextFaible.hidden = true;
  verifMdpMoyen.hidden = true;
  verifMdpTextMoyen.hidden = true;
  verifMdpFort.hidden = true;
  verifMdpTextFort.hidden = true;

  // Champ vide : on cache l'icône et on arrête là
  if (mdp.value === "") {
    iconeMdp.hidden = true;
    return;
  }

  // FORT : au moins 9 caractères, avec au moins 1 chiffre et 1 caractère spécial
  if (mdp.value.match(/^(?=.*\d)(?=.*[^A-Za-z0-9]).{9,}$/)) {
    iconeMdp.hidden = false;
    iconeMdp.src = "ressources/check.svg";
    verifMdpFort.hidden = false;
    verifMdpTextFort.hidden = false;
    verifMdpMoyen.hidden = false;
    verifMdpTextMoyen.hidden = false;
    verifMdpFaible.hidden = false;
    verifMdpTextFaible.hidden = false;

    // MOYEN : entre 6 et 8 caractères, avec au moins 1 chiffre et 1 caractère spécial
  } else if (mdp.value.match(/^(?=.*\d)(?=.*[^A-Za-z0-9]).{6,8}$/)) {
    iconeMdp.hidden = false;
    iconeMdp.src = "ressources/check.svg";
    verifMdpMoyen.hidden = false;
    verifMdpTextMoyen.hidden = false;
    verifMdpFaible.hidden = false;
    verifMdpTextFaible.hidden = false;

    // Sinon : mot de passe non conforme, on affiche l'icône d'erreur
  } else {
    iconeMdp.hidden = false;
    iconeMdp.src = "ressources/error.svg";
    // FAIBLE : 1 à 6 caractères, uniquement des lettres
    if (mdp.value.match(/^[A-Za-z]{1,6}$/)) {
      verifMdpFaible.hidden = false;
      verifMdpTextFaible.hidden = false;
    }
  }
});

// À chaque saisie, on vérifie que la confirmation correspond au mot de passe
confMdp.addEventListener("input", () => {
  // Champ vide : on cache l'icône et on arrête là
  if (confMdp.value === "") {
    iconeMdpVerif.hidden = true;
    return;
  }
  // Les deux champs sont identiques : validation
  if (confMdp.value === mdp.value) {
    iconeMdpVerif.hidden = false;
    iconeMdpVerif.src = "ressources/check.svg";
    // Les champs sont différents : erreur
  } else {
    iconeMdpVerif.hidden = false;
    iconeMdpVerif.src = "ressources/error.svg";
  }
});

/**
 * Change la couleur d'un texte d'aide selon la validité du champ.
 * Noir si la condition est vraie, rouge sinon.
 * @param {HTMLElement} id - L'élément dont on modifie la couleur
 */
function colorText(id) {
  if (condition === true) {
    id.style.color = "black";
  } else {
    id.style.color = "red";
  }
}

/**
 * Enregistre les informations de l'utilisateur dans le localStorage
 * du navigateur (nom, email et mot de passe).
 */
function enregistrerUtilisateur() {
  localStorage.setItem("nom", nom.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("motdePasse", mdp.value);
}

const formulaire = document.querySelector("form");

// À la soumission du formulaire
formulaire.addEventListener("submit", (event) => {
  // Empêche le rechargement de la page
  event.preventDefault();
  // Sauvegarde les données saisies
  enregistrerUtilisateur();
});

// Au clic sur le bouton, redirige vers la page de connexion
document.querySelector("#bouton").addEventListener("click", () => {
  window.location.href = "connecter.html";
});

/*
//création du tableau de donnés
const user = [
{ nom: nom.value, email: email.value, mdp : mdp.value}
];

//Le localStorage ne stocke que des chaines:JSON.stringify on transforme le JSON en chaine de caractère
localStorage.setItem("users", JSON.stringify(data.users));

//Relecture : JSON.parse pour retrouver un tableau d'objets.
const users = JSON.parse(localStorage.getItem("users"));
for (const user of users) {
  console.log(`${user.nom}, ${user.age} ans, habite à ${user.ville}`);
}

chargerUtilisateurs();*/
