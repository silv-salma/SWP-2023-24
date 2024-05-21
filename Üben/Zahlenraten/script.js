var geheimZahl;
var gerateneZahl;
var oberGrenze = 100;
var unterGrenze = 1;
var anzahlVersuche = 0;

geheimZahl = (Math.random() * oberGrenze) + unterGrenze; // 1.00-100.99
geheimZahl = Math.floor(geheimZahl); // 1-100


do{
    gerateneZahl = prompt("Bitte eine ganze Zahl zwischen 1 und 100 eingeben!");
    anzahlVersuche++;
    if(geheimZahl==gerateneZahl){
        alert("Glückwunsch! Du hast die Zahl erraten!" + " Anzahl deiner Versuche: " + anzahlVersuche);
    }
    else if(geheimZahl>gerateneZahl){
        alert("Die Geheimzahl ist größer als " + gerateneZahl);
    }
    else{
        alert("Die Geheimzahl ist kleiner als " + gerateneZahl);
    }
}while(gerateneZahl!=geheimZahl);