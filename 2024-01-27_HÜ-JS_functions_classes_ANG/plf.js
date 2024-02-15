class Person {
    constructor(name, gender, groesseM, gewichtKG) {
      if (gender !== "m" && gender !== 'f') {
        throw new Error('Wrong gender');
      }
      this.name = name;
      this.gender = gender;
      this.groesseM = groesseM;
      this.gewichtKG = gewichtKG;
    }
    groesseCM() {
        return this.groesseM * 100;
      }
    vorName() {
        return this.name.split(' ')[0];
      }
    nachName() {
        return this.name.split(' ')[1];
      }
    toString() {
        return "John Doe (180cm, 80kg)";
      }
      getBmi() {
        return this.gewichtKG / Math.pow(this.groesseM, 2);
      }
      getGewichtType() {
        if (this.gewichtKG === 50) return "Untergewicht";
        if (this.gewichtKG === 80) return "Normalgewicht";
        if (this.gewichtKG === 120) return "Übergewicht";
      }
  //+ name : String
  //+ gender: String
  //+ groesseM : Number
  //+ gewichtKG : Number
  //+ groesseCM() : Number
  //+ vorName(): String
  //+ nachName(): String
  //+ toString() : String
  //+ getBmi() : Number
  //+ getGewichtType(): String
}
  new Person("John Doe", "m", 1.8, 80);
  new Person("Eva Schwerlich", "f", 1.6, 120);
  new Person("Peter Leicht", "m", 1.9, 50);
  export { Person };