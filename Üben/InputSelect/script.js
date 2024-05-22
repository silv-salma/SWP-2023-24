function getValue(){
    let wert = document.querySelector("#idText1").value;
    document.querySelector("#idAusgabe1").innerHTML = wert;

    let wert2 = document.querySelector("#idText2").value;
    document.querySelector("#idAusgabe2").innerHTML = wert;

    /*
    const arrayCheckbox = [];
    var CheckBox1 = document.querySelector("#idCheck1")
    if(CheckBox1.checked){
        arrayCheckbox.push(checkBox1.value);
        document.querySelector("#idAusgabe3").innerHTML = arrayCheckbox;
    }
    var CheckBox2 = document.querySelector("#idCheck2")
    if(CheckBox2.checked){
        arrayCheckbox.push(checkBox2.value);
        document.querySelector("#idAusgabe3").innerHTML = arrayCheckbox;
    } */

    var markedCheckbox = document.querySelectorAll('input[name = "farben"]:checked')
    for(let element of markedCheckbox){
        document.querySelector("#idAusgab3").innerHTML = idAusgabe3.innerText + " " + element.value;
    }

    var markedRadio = document.querySelector('input[type=radio]:checked').value;
    document.querySelector("idAusgabe4").innerHTML = markedRadio;
}

function mySelection(){
    var x = document.getElementById("idSelect").value;
    document.getElementById("idAusgabe5").innerHTML = "Ausgabe: " + x;
}