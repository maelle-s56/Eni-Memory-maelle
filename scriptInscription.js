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

iconeNom.hidden = true;
iconeEmail.hidden = true;
iconeMdp.hidden = true;
iconeMdpVerif.hidden = true;

let condition = false;

nom.addEventListener("input", () => {
  if (nom.value.length >= 3) {
    condition = true;
    colorText(verifNom);
    document.getElementById("iconeNom").hidden = false;
    iconeNom.src = "/ressources/check.svg";
  } else {
    condition = false;
    colorText(verifNom);
    document.getElementById("iconeNom").hidden = false;
    iconeNom.src = "/ressources/error.svg";
  }
});

email.addEventListener("input", () => {
  if (email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    condition = true;
    colorText(verifEmail);
    document.getElementById("iconeEmail").hidden = false;
    iconeEmail.src = "/ressources/check.svg";
  } else {
    condition = false;
    colorText(verifEmail);
    document.getElementById("iconeEmail").hidden = false;
    iconeEmail.src = "/ressources/error.svg";
  }
});

mdp.addEventListener("input", () => {
  if (mdp.value.match(/^(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/)) {
    document.getElementById("iconeMdp").hidden = false;
    iconeMdp.src = "/ressources/check.svg";
  } else {
    document.getElementById("iconeMdp").hidden = false;
    iconeMdp.src = "/ressources/error.svg";
  }
});

confMdp.addEventListener("input", () => {
  if (confMdp.value === mdp.value) {
    document.getElementById("iconeMdpVerif").hidden = false;
    iconeMdpVerif.src = "/ressources/check.svg";
  } else {
    document.getElementById("iconeMdpVerif").hidden = false;
    iconeMdpVerif.src = "/ressources/error.svg";
  }
});

function colorText(id) {
  if (condition === true) {
    id.style.color = "black";
  } else {
    id.style.color = "red";
  }
}
