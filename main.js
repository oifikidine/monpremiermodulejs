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
  const { heure, minutes, secondes } = generateHeure.monHeure();

  spanHeure.textContent = format(heure)+":";
  spanMinutes.textContent = format(minutes)+":";
  spanSecondes.textContent = format(secondes);
}

// affichage immédiat
afficherHeure();

// mise à jour automatique
setInterval(afficherHeure, 1000);


