var punkte;
var anzahlRunden;
var rundenZaehler;

function starteQuiz(){
    punkte = 0,
    anzahlRunden = 3;
    rundenZaehler = 0;

    erzeugeFragen();
    starteRunde();
}

function erzeugeFragen(){
    arrayFragen[0] = "Wann begann der erste Weltkrieg?# 1912# 1914# 1918# 1914";
    arrayFragen[1] = "Wann begann der zweite Weltkrieg?# 1932# 1939# 1938# 1939";
    arrayFragen[2] = "Wann begann der erste Weltkrieg?# 1612# 1614# 1618# 1618";
}

function starteRunde(){
    var aktuelleFrage = arrayFragen.shift();
    const arrayFragenAufbereitet = aktuelleFrage.split("#");

    document.getElementById("idFrage").innerHTML = arrayFragenAufbereitet[0];
}