var zahl = prompt("Bitte eine Zahl eingeben.")

for(let i = 0; i < zahl; i++){

    /*if(i%2==0){
        continue;
    }   
    gerade Zahlen sollen nicht ausgegeben werden*/

    if(i>10){
        break;
    }
    //Sollte eine Zahl über 10 sein, soll die Ausgabe beendet werden

    document.getElementById("id1").innerHTML = id1.innerHTML + " " + i;
}


/*var i = 0;
while(i < zahl){
    if(i>10){
        break;
    }
    document.getElementById("id1").innerHTML = id1.innerHTML + " " + i;
    i++;
}


do{
    if(i>10){
        break;
    }
    document.getElementById("id1").innerHTML = id1.innerHTML + " " + i;
    i++;
} while(i < zahl);*/