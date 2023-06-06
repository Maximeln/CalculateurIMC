const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

//
// let pour => taille entré, poids entré, bouton, resultat calcul, texte selon resultat
// fonction => calcul imc, afficher resultat imc dans doc, modif couleur + texte selon resulat
// imc, empêcher calcul si valeur vide + message d'erreur
//

let userTaille = document.querySelector("#taille");
let userPoids = document.querySelector("#poids");
let userClick = document.querySelector("#btn");
let resultNumber = document.querySelector("#resultNumber");
let resultText = document.querySelector("#resultText");

// fonction input vide ou négatif
// On utilise return pour renvoyer le résultat si la condition est vraie ou fausse
function inputEmpty() {
  if (
    !userTaille.value ||
    !userPoids.value ||
    userTaille.value <= 0 ||
    userPoids.value <= 0
  ) {
    resultNumber.textContent = "Oops";
    resultText.textContent = "Remplissez correctement le formulaire.";
    resultNumber.style.color = "inherit";
    return true;
  }
  return false;
}

// fonction calcul au click
userClick.addEventListener("click", function () {
  let isEmpty = inputEmpty();
  if (isEmpty) {
    return;
  }

  let calcul = Math.round(
    userPoids.value / Math.pow(userTaille.value / 100, 2)
  );

  resultNumber.innerHTML = calcul;
  if (calcul < 18.5) {
    resultText.innerHTML = "Résultat : " + BMIData[0].name;
    resultNumber.style.color = BMIData[0].color;
  } else if (calcul > 18.5 && calcul <= 25) {
    resultText.innerHTML = "Résultat : " + BMIData[1].name;
    resultNumber.style.color = BMIData[1].color;
  } else if (calcul > 25 && calcul <= 30) {
    resultText.innerHTML = "Résultat : " + BMIData[2].name;
    resultNumber.style.color = BMIData[2].color;
  } else if (calcul > 30 && calcul <= 35) {
    resultText.innerHTML = "Résultat : " + BMIData[3].name;
    resultNumber.style.color = BMIData[3].color;
  } else if (calcul > 35 && calcul <= 40) {
    resultText.innerHTML = "Résultat : " + BMIData[4].name;
    resultNumber.style.color = BMIData[4].color;
  } else if (calcul > 40) {
    resultText.innerHTML = "Résultat : " + BMIData[5].name;
    resultNumber.style.color = BMIData[5].color;
  }
});

// fonction pour appliquer des val selon résultat calcul, à insérer dans notre événement
function resultCalculIMC() {
  if (resultNumber < 18.5) {
    resultText.innerHTML = BMIData[0].name;
    resultNumber.style.color = BMIData[0].color;
  }
}
