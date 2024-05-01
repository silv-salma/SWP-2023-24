const Artikel = 
{"name": "Cola", "preis": 1.89}


class Kassa {
    constructor(geldlade) {
        this.geldLade = geldLade;
      }
    //function scannen(artikel){}
    function bezahlen(betrag, Artikel){
        if(betrag < Artikel.preis){
            throw new Error('Betrag ist zu klein!');
        } 
        this.geldLade = Artikel.preis;
        return returgeld = betrag - Artikel.preis;

    }

    console.log("Heute " + this.geldLade.toString()+ "€ eingnommen");

}