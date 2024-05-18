const Artikel  = 
{"name": "Cola", "preis": 1.89}


class Kassa {
    constructor(geldlade) {
        this.geldLade = geldLade;
      }

    function scannen(Artikel){
        return Artikel.preis
    }

    function bezahlen(betrag, Artikel){
        if(betrag < Artikel.preis){
            throw new Error('Betrag ist zu klein!');
        } 
        this.geldLade = Artikel.preis;
        return returgeld = betrag - Artikel.preis;

    }
    toString(){
        ("Heute wurden " + this.geldLade.toString()+ "€ eingnommen");
    }

}