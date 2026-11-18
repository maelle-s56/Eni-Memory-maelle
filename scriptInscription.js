const nom = document.getElementById("nom");
const email = document.getElementById("email");
const verifNom = document.getElementById("verifNom");
const verifEmail = document.getElementById("verifEmail");
const iconeNom = document.getElementById("iconeNom");
const iconeEmail = document.getElementById("iconeEmail");
const iconeMdp = document.getElementById("iconeMdp");
const iconeMdpVerif = document.getElementById("iconeMdpVerif");

const error = "/ressources/error.svg";
const ok = "/ressources/check.svg";

iconeNom.hidden = true;
iconeEmail.hidden = true;
iconeMdp.hidden = true;
iconeMdpVerif.hidden = true;

let condition = false;
let icone = document.getElementById("icone");

document.getElementById("icone").hidden = true;
//document.getElementById("impressionnant").hidden = false;

nom.addEventListener("input", () => {
  if (nom.value.length >= 3) {
    condition = true;
    colorText(verifNom);
    document.getElementById("iconeNom").hidden = false;
    icone.src = "/ressources/check.svg";
  } else {
    condition = false;
    colorText(verifNom);
    document.getElementById("iconeNom").hidden = false;
    icone.src = "/ressources/error.svg";
  }
});

/*nom.addEventListener("input", () => {
  if (nom.value.length >= 3) {
    condition = true;
    colorText(verifEmail);
    document.getElementById("iconeEmail").hidden = false;
    icone.src = "/ressources/check.svg";
  } else {
    condition = false;
    colorText(verifEmail);
    document.getElementById("iconeEmail").hidden = false;
    icone.src = "/ressources/error.svg";
  }
});*/

function colorText(id) {
  if (condition === true) {
    id.style.color = "black";
  } else {
    id.style.color = "red";
  }
}
