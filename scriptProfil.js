const chemin = {
  valeur1: "ressources/memory-legume/plaque_legumes.png",
  valeur2: "ressources/animaux/memory_detail_animaux.png",
  valeur3: "ressources/animauxAnimes/memory_detail_animaux_animes.png",
  valeur4:
    "ressources/animauxdomestiques/memory_detail_animaux_domestiques.png",
  valeur5: "ressources/chiens/memory_details_chiens.png",
  valeur6: "ressources/dinosaures/memory_detail_dinosaures.png",
  valeur7:
    "ressources/dinosauresAvecNom/memory_details_dinosaures_avec_nom.png",
  valeur8: "ressources/alphabet-scrabble/memory_detail_scrabble.png",
};

const selection = document.querySelector("#choixM");
const apercu = document.querySelector("#apercu");

selection.addEventListener("change", (event) => {
  apercu.src = chemin[event.target.value];
});
