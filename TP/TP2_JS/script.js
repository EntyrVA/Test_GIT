/* BILGER-BAVEREL Axel */

function Calcul() {
    var prix1 = document.getElementById("prix1").value;
    var quantité1 = document.getElementById("quantité1").value;
    var prix2 = document.getElementById("prix2").value;
    var quantité2 = document.getElementById("quantité2").value;
    var prix3 = document.getElementById("prix3").value;
    var quantité3 = document.getElementById("quantité3").value;

    var res1 = prix1 * quantité1;
    var res2 = prix2 * quantité2;
    var res3 = prix3 * quantité3;
    
    result1.value = res1;
    result2.value = res2;
    result3.value = res3;

    var total = res1 + res2 + res3;
    totalResult.value = total;
}

function reset(){
    window.location.href='index.html'
}
