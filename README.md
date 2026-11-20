Fichier pour expliquer le projet ENI-MEMORY

echo "# Eni-Memory-maelle" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/maelle-s56/Eni-Memory-maelle.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/maelle-s56/Eni-Memory-maelle.git
git branch -M main
git push -u origin main

# ENI Memory

## À propos

ENI Memory est un jeu de Memory en ligne : il faut retrouver toutes les paires de cartes identiques en retournant les cartes deux par deux, avec le moins de coups possible.

Le projet existe pour proposer une version simple et complète du jeu, avec ses pages d'accueil, d'inscription et de profil, uniquement à partir des technologies natives du web (HTML, CSS et JavaScript) et de la bibliothèque jQuery.

## Table des matières

- 🪧 [À propos](#à-propos)
- 📦 [Prérequis](#prérequis)
- 🚀 [Installation](#installation)
- 🛠️ [Utilisation](#utilisation)
- 🤝 [Contribution](#contribution)
- 🏗️ [Construit avec](#construit-avec)
- 📚 [Documentation](#documentation)
- 🏷️ [Gestion des versions](#gestion-des-versions)
- 📝 [Licence](#licence)

## Prérequis

- [Git](https://git-scm.com/doc) : pour cloner le dépôt et gérer les versions.
- Un navigateur web moderne ([Firefox](https://www.mozilla.org/fr/firefox/), [Chrome](https://www.google.com/chrome/), [Edge](https://www.microsoft.com/fr-fr/edge), etc.) : pour jouer et tester le projet.
- Une connexion internet : [jQuery](https://api.jquery.com/) est chargé depuis le CDN [cdnjs](https://cdnjs.com/) par la page `jeu.html`.
- _(Optionnel)_ Un serveur local, par exemple l'extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) de VS Code ou [Python](https://docs.python.org/fr/3/) : pratique pour le rechargement automatique pendant le développement.

## Installation

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/Maelle/Eni-Memory-maelle.git
   cd Eni-Memory-maelle
   ```

2. Ouvrir le site : aucune dépendance à installer. Il suffit d'ouvrir le fichier `index.html` dans le navigateur, soit en double-cliquant dessus, soit en ligne de commande :

   ```bash
   # macOS
   open index.html
   # Linux
   xdg-open index.html
   # Windows
   start index.html
   ```

## Utilisation

### Lancer un serveur local

Pour bénéficier du rechargement automatique ou tester dans des conditions proches de la production :

```bash
python3 -m http.server 8000
```

Le site est alors accessible sur `http://localhost:8000`.

### Jouer au Memory

Ouvrir la page `jeu.html` (menu **Jouer**). Le plateau comporte 12 cartes (4 × 3), soit 6 paires de légumes et fruits mélangées à chaque partie.

- Cliquer sur deux cartes pour les retourner.
- Si les images sont identiques, les cartes restent visibles.
- Sinon, elles se retournent face cachée après une seconde.
- Le nombre de coups est affiché au-dessus du plateau.
- La partie est gagnée quand toutes les paires sont trouvées.
- Appuyer sur **la barre d'espace** pour relancer une partie à tout moment.

### Créer un compte

Ouvrir la page `inscription.html` (menu **S'inscrire**). Le formulaire vérifie les champs en direct, avec une icône de validation :

- **Nom d'utilisateur** : 3 caractères minimum (lettres, chiffres et `_`).
- **Email** : adresse au format valide.
- **Mot de passe** : 6 caractères minimum dont au moins un chiffre et un symbole. Une jauge indique sa force : _Faible_, _Moyen_ (6 à 8 caractères) ou _Fort_ (9 caractères et plus).
- **Confirmation** : doit être identique au mot de passe.

Les informations saisies sont enregistrées dans le `localStorage` du navigateur.

### Choisir son Memory (profil)

Ouvrir la page `profil.html` (menu **Profil**). Le menu déroulant permet de choisir le thème du Memory parmi : Légumes, Animaux, Animaux animés, Animaux domestiques, Chiens, Dinosaures, Dinosaures avec nom et Alphabet. Un aperçu s'affiche à chaque changement.

### Fonctionnalités à venir

- **Connexion** : pour l'instant, les utilisateurs sont seulement enregistrés à l'inscription. Il n'est pas encore possible de se connecter (la page `connecter.html` reste à créer).
- **Historique des scores** : comme la connexion n'est pas disponible, les scores des dernières parties ne sont pas encore sauvegardés ni consultables (les 5 meilleurs scores sont prévus).
- **Taille du plateau** : le plateau est fixé à 12 cartes (4 × 3). Le choix de la taille (4 × 3, 4 × 4, 5 × 5) proposé dans le profil n'est pas encore pris en compte par le jeu.
- **Thème du Memory** : le choix du thème du profil n'est pour l'instant qu'un aperçu et n'est pas encore appliqué au jeu, qui utilise toujours le thème des légumes.

## Contribution

### Créer une branche

Partir de la branche principale à jour, puis créer une branche dédiée à la modification :

```bash
git checkout main
git pull origin main
git checkout -b feature/nom-de-la-fonctionnalite
```

### Développer et vérifier

Modifier le code, puis tester manuellement dans le navigateur (ouvrir la console des outils de développement pour repérer d'éventuelles erreurs JavaScript).

### Committer

```bash
git add .
git commit -m "Ajoute la sauvegarde des meilleurs scores"
```

### Publier et ouvrir une Pull Request

```bash
git push origin feature/nom-de-la-fonctionnalite
```

Ouvrir ensuite une _Pull Request_ vers `main` depuis l'interface du dépôt, en décrivant le changement et en liant l'éventuelle _issue_ associée.

## Construit avec

### Langages & Frameworks

- [HTML5](https://developer.mozilla.org/fr/docs/Web/HTML) : structure des pages, du plateau de jeu et des formulaires.
- [CSS3](https://developer.mozilla.org/fr/docs/Web/CSS) : mise en forme, dégradé de fond et animation 3D de retournement des cartes (`perspective`, `rotateY`).
- [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript) : logique du jeu (mélange de Fisher-Yates, comparaison des paires, compteur de coups), validation du formulaire d'inscription et aperçu des thèmes.
- [jQuery 3.6.3](https://api.jquery.com/) : gestion des clics, des classes CSS et du clavier dans `jeu.html`, chargé via [cdnjs](https://cdnjs.com/libraries/jquery).

### Outils

Aucun outil de build ni gestionnaire de paquets : le projet fonctionne tel quel dans le navigateur.

#### CI

Aucune intégration continue n'est configurée pour le moment.

> Si vous en ajoutez une (par exemple [GitHub Actions](https://docs.github.com/fr/actions)), listez ici l'outil, le lien vers sa documentation ainsi que les comptes, organisations et variables utilisés.

#### Déploiement

- [GitHub Pages](https://docs.github.com/fr/pages) : héberge gratuitement le site statique directement depuis le dépôt.
  - Compte / organisation : `Maelle`
  - Source : branche `main`, dossier `/ (root)`
  - Adresse : `https://maelle.github.io/Eni-Memory-maelle/`

> Adaptez cette section si vous déployez ailleurs (Netlify, Vercel, etc.).

## Documentation

- Les règles du jeu sont présentées sur la page d'accueil (`index.html`).
- Structure du projet :

  ```text
  Eni-Memory-maelle/
  ├── index.html              # Accueil et règles du jeu
  ├── inscription.html        # Formulaire d'inscription
  ├── connecter.html          # Connexion (à venir)
  ├── profil.html             # Choix du thème et de la taille du Memory
  ├── jeu.html                # Plateau de jeu
  ├── style.css               # Feuille de style commune
  ├── script.js               # Logique du jeu
  ├── scriptInscription.js    # Validation du formulaire d'inscription
  ├── scriptProfil.js         # Aperçu du thème choisi
  └── ressources/             # Images et icônes (cartes, thèmes, check.svg, error.svg…)
  ```

## Gestion des versions

Afin de maintenir un cycle de publication claire et de favoriser la rétrocompatibilité, la dénomination des versions suit la spécification décrite par la [Gestion sémantique de version](https://semver.org/lang/fr/).

Les versions disponibles ainsi que les journaux décrivant les changements apportés sont disponibles depuis [la page des Releases](https://github.com/Maelle/Eni-Memory-maelle/releases).

## Licence

Voir le fichier [LICENSE](LICENSE) du dépôt.
