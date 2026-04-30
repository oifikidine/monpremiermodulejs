/**
 * generateHeure est un module de calcul Automatique de l'heure 
 */

// je déclare la fonction qui retourne l'heure
// function monHeure() {
//  let date= new Date();
//  let heure= date.getHours();
// console.log("## Coucou, je passe à la TV à ,", heure);
//  return heure;
 
// }
function monHeure() {
  const date = new Date();

  return {
    heure: date.getHours(),
    minutes: date.getMinutes(),
    secondes: date.getSeconds()
  };
}

export default {
  monHeure
};
