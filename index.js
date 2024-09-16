
const obj = {
    //index: "value"
    pseudo: "Qlex",
    ville:"Rimou",
    admin: false,

// on évite les fonctions fléchées en POO (-> perte de contexte de scope/perte de portée)
    direBonjour: function() {
        console.log("Bonjour je suis " + this.pseudo);
    }

//     direBonjour() {
//         console.log("Bonjour je suis " + this.pseudo);
// }
}

//Ajouter 
obj.age =41;
obj["admin"]= true;

//Modifier
obj.pseudo = "Alex";

//Supprimer
//delete obj.ville;
//console.log(obj);

// Checker si propriété existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//Parcourir l'objet
for (const key in obj) {
    // console.log(key);
    //console.log(key + ": " + obj[key]);
}

// console.log(obj.direBonjour());

//Méthodes natives de JS
//Obtenir les clefs
const keys = Object.keys(obj)
// console.log(keys);

//Obtenir les valeurs
const values = Object.values(obj)
// console.log(values);

//Tableau imbriqué
const nestedArray = Object.entries(obj)
// console.log(nestedArray);

//Fusion des objets
const obj2 = {
    taille:"1m62",
    poids:"60kg",
    pseudo:"Paco"
}

const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

//*** Méthode "freeze" qui empêche toutes les modifications ***
// const newObj = Object.freeze(obj);
// newObj.pseudo = "Test";
// console.log(newObj);

//*** Méthode "seal" qui empêche seulement l'ajout de nouveaux paramètres ***
// const newObj = Object.seal(obj);
// newObj.pseudo = "Test";
// newObj.adresse = "9 rue du petit renard"
// console.log(newObj);

//-----------------------
// Construire des objets
//-----------------------
// -> Plusieurs façons de construire des objets

// 1) Fonction constructeur
function User(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville

    this.getCity = function() {
        console.log(this.pseudo + " habite à " + this.ville)
    }
}

const user1 = new User('Alex', 'Rimou');     // instantiation
const user2 = new User('Yoann', 'Dinard');   // instantiation
// console.log(user2.getCity());

// 2) Factory Functions

function User3 (pseudo, ville) {
    return {
        pseudo:pseudo,
        ville:ville
    }
}

const user4 = User3('JP', 'Guichen')
// console.log(user4);

// 3) Les Classes
class Utilisateur {
    constructor (pseudo, ville) {
        this.pseudo = pseudo;
        this.ville = ville;
    }

    sayMyName = function() {
        console.log("Bonjour je suis " + this.pseudo);
    }
}

const user5 = new Utilisateur ('Gérard', 'Sèvres');
Utilisateur.prototype.sayCity = function() {  // rajout d'un prototype à la main
    console.log("J'habite à " +  this.ville);
}

Object.assign(Utilisateur.prototype, {
    method1() {
        // Ma méthode
    },
    method2() {
        // Ma méthode
    }
})

// Les fonctions hors des prototypes comme "sayMyName" sont 30% plus lentes que les fonctions ajoutées dans les prototypes

// console.log(user5);

//-----------------------
// L'HERITAGE
//-----------------------

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    saySomething(text) {
        console.log(this.name + " dit : " + text);
    }
}

class Dog extends Animal {
    run() {
        console.log("Le chien court !");
    }
}

class Cat extends Animal {
    hunt() {
        console.log("J'ai tué un oiseau !");
    }
}

const rintintin = new Dog("Rintintin", 9)
console.log(rintintin);

const Muse = new Cat("Muse", 12)
console.log(Muse);

// arrêt à 56:42