const arrayFarben = ["blau", "grün", "gelb", "rosa", "rot"];

arrayFarben[0] = "lila";

document.getElementById("id1").innerHTML = arrayFarben;

arrayFarben.sort();

document.getElementById("id2").innerHTML = arrayFarben;

const arrayZahlen = new Array(); //1-5

for(let i = 1; i <= 5; i++){
    arrayZahlen[i-1]=i;
}

arrayZahlen.forEach(myFunction);
function myFunction(element){
    document.getElementById("id3").innerHTML = id3.innerHTML + " " + element;
}

arrayFarben.pop();

arrayFarben.push("türkis");

document.getElementById("id4").innerHTML = arrayFarben;