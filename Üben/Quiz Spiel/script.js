var punkte;
var anzahlRunden;
var rundenZaehler;
const arrayFragen = [];
var richtigeAntwort;
var gesperrt;

document.getElementById("idAntowrt1").style.visibility = "hidden;"
document.getElementById("idAntowrt2").style.visibility = "hidden;"
document.getElementById("idAntowrt3").style.visibility = "hidden;"

function starteQuiz(){
    punkte = 0,
    anzahlRunden = 3;
    rundenZaehler = 0;
    document.getElementById("idAntwort1").style.visibility = "visible;"
    document.getElementById("idAntwort2").style.visibility = "visible;"
    document.getElementById("idAntwort3").style.visibility = "visible;"
    document.getElementById("idStarte").style.visibility = "hidden;"
    erzeugeFragen();
    starteRunde();
}

function erzeugeFragen(){
    arrayFragen[0] = "Wann begann der erste Weltkrieg?# 1912# 1914# 1918# 1914";
    arrayFragen[1] = "Wann begann der zweite Weltkrieg?# 1932# 1939# 1938# 1939";
    arrayFragen[2] = "Wann begann der erste Weltkrieg?# 1612# 1614# 1618# 1618";
}

function starteRunde(){
    if(rundenZaehler<anzahlRunden){
    document.getElementById("idAntowrt1").style.background = "black";
    document.getElementById("idAntowrt2").style.background = "black";
    document.getElementById("idAntowrt3").style.background = "black";
    rundenZaehler++;
    gesperrt = false;
    var aktuelleFrage = arrayFragen.shift();
    const arrayFragenAufbereitet = aktuelleFrage.split("#");
    richtigeAntwort = arrayFragenAufbereitet[4];
    document.getElementById("idFrage").innerHTML = arrayFragenAufbereitet[0];
    document.getElementById("idAntwort1").innerHTML = arrayFragenAufbereitet[1];
    document.getElementById("idAntwort2").innerHTML = arrayFragenAufbereitet[2];
    document.getElementById("idAntwort3").innerHTML = arrayFragenAufbereitet[3];
    setTimeout(starteRunde,5000);
    }
    else{
        document.getElementById("idFrage").innerHTML = "Das Spiel ist vorbei. Du hast " + rundenZaehler + " Punkte erreicht!";
        document.getElementById("idStarte").style.visibility = "visible;"
        document.getElementById("idAntowrt1").style.visibility = "hidden;"
        document.getElementById("idAntowrt2").style.visibility = "hidden;"
        document.getElementById("idAntowrt3").style.visibility = "hidden;"
        
    }
}

function tippeButton(getippterButton){
    if(gesperrt==true){
        return;
    }
    gesperrt = true;
    if(getippterButton.innerHTML==richtigeAntwort){
        punkte++;
        getippterButton.style.background = "green";
    } else {
        getippterButton.style.background = "red";
    }
}