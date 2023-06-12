//commentaire sur une ligne

/*
ici, je fait un commentaire sur plusieurs lignes

*/

// --1: Déclarer une variable en JS

var prenom;

// --2: Affecter une valeur à une variable

prenom="bachir";
// var prenom=bachir;

// --3: une instruction se termine tjr par un point virgule, il est aussi possible d'ecrire plsr instruction sur une seul ligne
// instr_1;
// inst_2; inst_3;

// --4: afficher une bte de dialogue (ic on a 2 facons )
//alert("super, tu est est arriver sur mon site");
// window.alert("ah ah tu t'est fait avoir dumbass");

// --5: afficher dans la console (ici la valeur de ma variable Prenom)
// console.log(prenom);

// --6: Afficher dans la page web
// document.write("A la pause bachir il khalasssssss");

// --7: demander à l'utilisateur une valeur (2façons)
// window.prompt("Est-se-que tu te trouve beau?", "seulement aujourd'huit ou jamais");
// prompt("Est-se-que tu te trouve beau?", "seulement aujourd'huit ou jamais");

// --pour manipuler cette valeur, je n'oublie pas de la stocker
// var jour=prompt("qst: t'est content?", "oui");
// console.log(jour);

// --8: attention/!\le js est sensible à la case ('case sensitive')
// mavariable =/= maVariable =/= ma_variable
//                camel case     snake case

// --9: une variuable ne pt ps commencer pr un cfr, ne doit ps ctnr que ds caractr alphanmrque, et ne pt etrs un mots réservé(var,for ... des éléments natif du langages js)

// --10: Une variable peut être declarée de façon explicite:

// façon explicite
// var fruit;
// fruit="ananas";

// façon implicite:
// var fruit_2="coco";

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~ LES TYPES DE VARIABLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// 1. Chaîne de caractères (string)
 var vacances="2023";
 var destination= "E.A.U";
// console.log(vacances,destination);

// 2. Un nbre entier (integer ou int)
var annee=2023;
// console.log(annee);

// 3. nbre décimal (float)
var nombre_a_virgule=-5.32;
// consol.log(nombre_a_virgule);

var vacances="2020";
console.log(vacances);

// 4. un booléen (boolean= VRAIS/FAUX = TRUE/FALSE)
var unBooleen=false;

// 5. Les Constantes

/* 
    La d'eclaration const permet de créer une constante accessible uniquement en lecture.
    Contrairement à une variable sa vlr ne pt être modifier par reafectation plus bas dans le code, une constante ne pt être declaree a nv ds le mm script
*/

// Par conviction les constante sont en majuscule

const PAYS="France"; //string
const AN="2020";//string
const BIRTH=2020;//nbr // int //integer

// 6. typeof permet de connaitre le type de ma variable.

console.log(vacances);
console.log(typeof vacances);
console.log(typeof annee);

// en js les vrble st auto-typées
// on peut convertir une vrble de types NUMBER en STRING et aussi STRING en NUMBER avc les fction native de js
// la fction parseInt() renvoie un entier a prtr d'une chaine de crcters

var unChiffre="12";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => NUMBER

unChiffre=parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => FLOAT
unChiffre=parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

//NUMBER => STRING
var nb_en_lettres=258;
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

var nb_en_lettres=nb_en_lettres.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

