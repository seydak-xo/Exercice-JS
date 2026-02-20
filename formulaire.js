let formulaire = document.querySelector("#formulaire");
let inputPrenom = document.querySelector("#prenom");
let inputEmail = document.querySelector("#email");
let resultat = document.querySelector("#resultat");

formulaire.addEventListener("submit", function(event) {
  event.preventDefault();

  let prenom = inputPrenom.value.trim();
  let email = inputEmail.value.trim();

  if (prenom === "" || email === "") {
    resultat.textContent = "Veuillez remplir tous les champs.";
    return;
  }

  resultat.textContent = `Inscription réussie : ${prenom} (${email})`;

  formulaire.reset();
});
