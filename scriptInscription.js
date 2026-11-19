const nom = document.getElementById("nom");
const verifNom = document.getElementById("verifNom");
const iconeNom = document.getElementById("iconeNom");

const email = document.getElementById("email");
const verifEmail = document.getElementById("verifEmail");
const iconeEmail = document.getElementById("iconeEmail");

const mdp = document.getElementById("motdePasse");
const iconeMdp = document.getElementById("iconeMdp");

const confMdp = document.getElementById("confMotdePasse");
const iconeMdpVerif = document.getElementById("iconeMdpVerif");

const error = "/ressources/error.svg";
const ok = "/ressources/check.svg";
//Je cache les icones
iconeNom.hidden = true;
iconeEmail.hidden = true;
iconeMdp.hidden = true;
iconeMdpVerif.hidden = true;

let condition = false;

//Je teste la conformité du nom
nom.addEventListener("input", () => {
  if (nom.value.length >= 3) {
    condition = true;
    colorText(verifNom);
    iconeNom.hidden = false;
    iconeNom.src = "/ressources/check.svg";
  } else {
    condition = false;
    colorText(verifNom);
    iconeNom.hidden = false;
    iconeNom.src = "/ressources/error.svg";
  }
});

//Je teste la conformité de l'email
email.addEventListener("input", () => {
  if (email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    condition = true;
    colorText(verifEmail);
    iconeEmail.hidden = false;
    iconeEmail.src = "/ressources/check.svg";
  } else {
    condition = false;
    colorText(verifEmail);
    iconeEmail.hidden = false;
    iconeEmail.src = "/ressources/error.svg";
  }
});

//Je déclare mes constantes pour le mot de passe à 3 niveaux
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

//Je teste la conformité du mdp à trois niveaux (faible, moyen et fort)
mdp.addEventListener("input", () => {
  if (mdp.value.match(/^(?=.*\d)(?=.*[^A-Za-z0-9]).{9,}$/)) {
    iconeMdp.hidden = false;
    iconeMdp.src = "/ressources/check.svg";
    verifMdpFort.hidden = false;
    verifMdpTextFort.hidden = false;
  } else if (mdp.value.match(/^(?=.*\d)(?=.*[^A-Za-z0-9]).{6,8}$/)) {
    iconeMdp.hidden = false;
    iconeMdp.src = "/ressources/check.svg";
    verifMdpMoyen.hidden = false;
    verifMdpTextMoyen.hidden = false;
  } else {
    iconeMdp.hidden = false;
    iconeMdp.src = "/ressources/error.svg";
    if (mdp.value.match(/^[A-Za-z0-9]{1,5}$/)) {
      verifMdpFaible.hidden = false;
      verifMdpTextFaible.hidden = false;
    }
  }
});

//Je vérifie que mdp est le même dans les deux champs de saisies
confMdp.addEventListener("input", () => {
  if (confMdp.value === mdp.value) {
    iconeMdpVerif.hidden = false;
    iconeMdpVerif.src = "/ressources/check.svg";
  } else {
    iconeMdpVerif.hidden = false;
    iconeMdpVerif.src = "/ressources/error.svg";
  }
});

//fonction pour faire apparaitre un texte d'erreur en rouge
function colorText(id) {
  if (condition === true) {
    id.style.color = "black";
  } else {
    id.style.color = "red";
  }
}
