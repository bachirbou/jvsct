// alert("Hello");

// -- 1. Addition
// -- INFO - je peut déclarer plusieurs variables à la suite

// je déclare mes variables
var nb1, nb2, resultat;

// j'affecte des valeurs

nb1 = 10;
nb2 = 5;

// j'utilise mes variables avec un calcul
resultat = nb1 + nb2;

// j'affiche mon résultat dans la console
console.log(resultat);

// -- 2. Soustraction
// soustractionde  nb1 - nb2 avec l'opérateur "-"

resultat = nb1 - nb2;
console.log(resultat);

// -- 3. Multiplication
// Multiplication de nb1 * nb2 avec l'opérateur "*"

resultat = nb1 * nb2;
console.log(resultat);

// -- 4. Division
// division avec l'opérateur "/"

resultat = nb1 / nb2;
console.log(resultat);

// -- 5. Modulo
// Le modulo retourne le reste d'une Division
// modulo de nb1 % nb2 avec l'opérateur "%"

resultat = nb1 % nb2;
console.log(resultat);

// et maitenant je ré-affecte une valeur à nb1

nb1 = 11;
resultat = nb1 % nb2;
console.log("Le reste de la divion de " + nb1 + " par " + nb2 +" est égal à : " + resultat);

// --6. Écritures simplifiées
nb1=15;
nb1=nb1 +5;//égale a 20

nb+=10;//nb1 lui-même+10
console.log('le résultat aujourd\'hui de"nb+1=10;"est'+nb1);
//egale  a 30, alternace de guillemet simple et dble pr ne ps casser ma chaine de crcters

//si j'utilise un 'apostrophe dans une phrase concaténée, je px échapper le crcter à l'aide d'un anti-slash \
