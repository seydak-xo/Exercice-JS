let affichage = document.querySelector("#valeur");
let btnPlus = document.querySelector("#incrementer");
let btnMoins = document.querySelector("#decrementer");
let btnReset = document.querySelector("#reinitialiser");

let compteur = 0;

function mettreAJour() {
  affichage.textContent = compteur;
}

btnPlus.addEventListener("click", function() {
  compteur++;
  mettreAJour();
});

btnMoins.addEventListener("click", function() {
  compteur--;
  mettreAJour();
});

btnReset.addEventListener("click", function() {
  compteur = 0;
  mettreAJour();
});
