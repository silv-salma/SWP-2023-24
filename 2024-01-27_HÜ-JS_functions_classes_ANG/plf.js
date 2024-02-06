class Person {
    constructor(name, gender, groesseM, gewichtKG) {
        this.name= name;
        this.gender= gender;
        this.groesseM= groesseM;
        this.gewichtKG= gewichtKG;
    }
    groesseCM(){
        return this.groesseM*100;
    }
    getBmi(){
        return this.gewichtKG / Math.pow(this.groesseM, 2);
    }
    getGewichtType(){
            if (this.getBmi >>> 25){ return 'Übergewicht'} else 
            {return 'Untergewicht'} 
    }
    vorName(){

    }
    nachName(){

    }
    toString(){
        return '$(this.name), $((this.groesseCM)cm), $((this.gewichtKG)kg)'
    }
}
new Person('John Doe', 'm', 1.80, 80)
new Person('Eva Schwerlich', 'f', 1.60, 120)
new Person('Peter Leicht', 'm', 1.90, 50)
export { Person };
