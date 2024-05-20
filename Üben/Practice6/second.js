//switch

let tag = "Dienstag"; 

switch(tag){
    case "Montag": //eigentlich ; statt : aber sonst zeigt er es als Fehler an
       document.write("Wochenstart");
       break;
    case "Dienstag": //eigentlich ; statt : aber sonst zeigt er es als Fehler an
       document.write("Aha");
       break;

    default:
        document.write("Keine Wochentag");
}