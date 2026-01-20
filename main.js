/**
 * Ici, je réunis tous les modules de mon projet
 */

import generateHeure from "./generateHeure.js";

const spanHeure = document.getElementById("heure");
const spanMinutes = document.getElementById("minutes");
const spanSecondes = document.getElementById("secondes");

function format(n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
}

function afficherHeure() {
 const heure = generateHeure.monHeure().heure;
const minutes = generateHeure.monHeure().minutes;
const secondes = generateHeure.monHeure().secondes;


  spanHeure.textContent = format(heure)+":";
  spanMinutes.textContent = format(minutes)+":";
  spanSecondes.textContent = format(secondes);
}

// affichage immédiat
afficherHeure();

// mise à jour automatique
setInterval(afficherHeure, 1000);


import utilisateur from "./user.js";

const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const motDePasse = document.getElementById("motDePasse");

nom.textContent = "nom :" + utilisateur.nom;
prenom.textContent = "prenom :" + utilisateur.prenom;
email.textContent = "email :" + utilisateur.email;
motDePasse.textContent = "mot de passe :" + utilisateur.motDePasse;

