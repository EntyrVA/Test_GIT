function login(){
    var login = document.getElementById("t1").value;
    var password = document.getElementById("t1").value;
    if(login == "admin" && password == "admin")
{
    window.location.href="connect.html"
}
else{
    alert("Identifiants non reconnus");
    window.location.href="refus.html"
}
}

function retour(){
    window.location.href='index.html'
}
