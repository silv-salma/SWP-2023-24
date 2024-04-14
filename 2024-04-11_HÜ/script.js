class Kassa {
    #geldLade = 0;

    scannen(artikel) {
        return artikel.preis;
    }

    bezahlen(betrag, preis) {
        if (betrag < preis) {
            throw new Error("Der Betrag ist nicht ausreichend.");
        }
        this.#geldLade += preis;
        const retourgeld = betrag - preis;
        return `Rechnung: Bezahlt ${betrag}€, Preis: ${preis}€, Retourgeld: ${retourgeld}€`;
    }

    toString() {
        return `Heute wurden ${this.#geldLade}€ eingenommen.`;
    }
}

const kassa = new Kassa();

function scannen() {
    const artikelName = document.getElementById('artikelName').value;
    const artikel = { name: artikelName, preis: 1.89 }; // Beispiel, sollte dynamisch sein
    const preis = kassa.scannen(artikel);
    document.getElementById('preisAnzeige').innerText = `Preis: ${preis}€`;
}

function bezahlen() {
    const preis = 1.89; // Beispiel, sollte dynamisch sein
    const betrag = parseFloat(document.getElementById('bezahlt').value);
    try {
        const quittung = kassa.bezahlen(betrag, preis);
        document.getElementById('quittung').innerText = quittung;
        document.getElementById('tagesEinnahmen').innerText = kassa.toString();
    } catch (error) {
        alert(error.message);
    }
}