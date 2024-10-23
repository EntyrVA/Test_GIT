function test_age() {
    let age = prompt("Quel est votre âge ?");
    if (age < 18) {
        document.write("Vous êtes mineur");
        document.body.style.backgroundColor="red"
    }
    else {
        document.write("Vous êtes majeur");
        document.body.style.backgroundColor="green"
    }
}

function calcul_moyenne() {
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisème note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");

    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>")

    if (moyenne < 0 || moyenne > 20) {
        document.write("Moyenne invalide")
    }
    else if (moyenne < 10 ){
        document.write("Vous êtes redoublant")
    }
    else if (moyenne < 14 ){
        document.write("Vous avez la mention passable")
    }
    else if (moyenne > 14 ){
        document.write("Vous avez la mention bien")
    }
}

function test_couleur() {
    let couleur = prompt("Donner un couleur")
    if (couleur == "bleu" || couleur == "blue") {
        document.body.style.backgroundColor = "blue"
    }
    else if (couleur == "rouge" || couleur == "red") {
        document.body.style.backgroundColor = "red"
    }
    else if (couleur == "vert" || couleur == "green") {
        document.body.style.backgroundColor = "green"
    }
    else if (couleur == "jaune" || couleur == "yellow") {
        document.body.style.backgroundColor = "yellow"
    }
    else{
        alert("Couleur non comprise")
    }
}
