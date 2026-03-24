// Idee: ich baue den rechner so, dass davor gefragt wird welcher nutzer sich einloggt,
// je nachdem wir vorzeichen des saldos umgedreht
// Wichtig: rechner wird gebaut aus Perspektive WENN NIKOS YELVA 10€ SCHULDET -> SALDO -10€

let user = null
const form = document.getElementById("eintragForm")

const saldoHtml = document.getElementById("saldo")

let saldo = 0

const overlayHtml = document.getElementById("overlay")

const buttonOverlay =document.getElementById("startButton")

const userSelectHtml = document.getElementById("userHtml")

const userHtmlText = document.getElementById("userHtmlText")

const saldosText = document.getElementById("saldoText") 


buttonOverlay.addEventListener("click", function () {
    overlayHtml.classList.add("hidden")
    user = userSelectHtml.value
    userHtmlText.textContent = "User: " + user
    console.log(overlayHtml.className)
    console.log(user)
})


const einträgeArray = []

form.addEventListener("submit", function(e) {
    
    e.preventDefault(); // brauche ich weil sonst daten direkt an browser und weil sonst seite neu lädt

    const data = new FormData(form)

    const eintrag = Object.fromEntries(data.entries())

    einträgeArray.push(eintrag)
    
    let letzterBetrag = Number(letzteArrEigsch(einträgeArray, "Betrag"))
    let letztesVon = letzteArrEigsch(einträgeArray, "Von")
    let letztesAn =letzteArrEigsch(einträgeArray, "An")

    let richtigerBetrag

    if (user == "Nikos") {
    richtigerBetrag = betragVorzeichen(letzterBetrag, letztesVon,letztesAn)
    }

    else if (user == "Yelva") {
    richtigerBetrag = -betragVorzeichen(letzterBetrag, letztesVon,letztesAn)
    }
    

    
    saldo = saldoUpdate(richtigerBetrag, saldo)
    saldoText(saldosText, user, saldo)
    console.log("Saldo= " + saldo)

    saldoHtml.textContent = saldo
    console.log(eintrag)
    console.log(einträgeArray)
})

// Betrag Rechner Je nachdem .... an .... muss betrag vorzeichen passen
// Wenn nikos yelva 10€ schuldet (10€ von yelva an Nikos ) -> SaLdo -10€

let letzteArrEigsch = function (array, arrayEigenschaft) {
   let richtigeEigsch =  array[array.length-1][arrayEigenschaft]
    return richtigeEigsch
}

let betragVorzeichen = function (betrag, von, an ) {
    let richtigerBetrag 
    if (von == "Yelva" && an == "Nikos") {
        richtigerBetrag = -betrag
    }

    else if (von == "Yelva" && an =="Beide") {
        richtigerBetrag = -(betrag/2)
    }

    else if (von == "Yelva" && an == "Yelva" ) {
        richtigerBetrag = 0
    }

    else if (von == "Nikos" && an == "Yelva") {
        richtigerBetrag = +betrag
    }
 
    else if (von == "Nikos" && an =="Beide") {
        richtigerBetrag = +(betrag/2)
    }

   else if (von == "Nikos" && an == "Nikos") {
     richtigerBetrag = 0
   }

    return richtigerBetrag
}

let saldoUpdate = function(richtigerBetrag, altSaldo) {
    let neuSaldo = altSaldo + richtigerBetrag
    return neuSaldo
}

let saldoText = function(div, user, saldo) {

    let betragOhneVorzeichen = Math.abs(saldo)

    if (user == "Yelva" && saldo < 0 ) {
    div.textContent = `Yelva schuldet Nikos ${betragOhneVorzeichen}€`
    }

    else if (user == "Yelva" && saldo > 0 ) {
    div.textContent = `Nikos schuldet Yelva ${betragOhneVorzeichen}€`
    }

    if (user == "Nikos" && saldo < 0 ){
    div.textContent = `Nikos schuldet Yelva ${betragOhneVorzeichen}€`
    }

    else if (user == "Nikos" && saldo > 0 ) {
    {div.textContent = `Yelva schuldet Nikos ${betragOhneVorzeichen}€`}    
    }
}

//Du kannst const nehmen weil die refernz gleich bleibt. Form zeigt immer auf das gleiche 
// Nach einem Event listener kommt in die Function das "Event-object"
// Document Object model -> Browser verwandelt html in Baumstrutkur auf die JS zugreifen kann
// "DOM-Elemente sind normale JavaScript-Objekte, aber sie stammen aus der Browser API."
// "	•	HTML wird vom Browser in einen DOM-Baum verwandelt
//	•	die Knoten im Baum heißen Nodes
//	•	HTML-Tags werden zu DOM-Elementen
//	•	diese sind JavaScript-Objekt"
//DOM=DOCUMENT OBJECT MODEL
// FormData ist ein Bauplan zum erstellen eines objekts. Zb.gibt auch Date
// new erstellt ein konkretes objekt
// Form Data macht dann daraus schlüssrl wert paare
// JS speichert die Schlüssel intern immer als Strings deswegen geht "Von"
/*Primitive Werte (Zahl, String, Boolean) → werden beim Übergeben als Argument kopiert → Änderungen in der Funktion betreffen nur die Kopie, nicht die originale Variable.
	•	Objekte/Arrays → werden als Referenz übergeben → Änderungen wirken auf das Original. */
//21.03.26: als nächstes mechanismus bauen, der optionen sperrt, wenn eins gewählt ist
// zb von yelva an yelva soll nicht gehen (eventuell einfach if bedingungen anpassen)
// zusärtlich an beide mechanismus einbauen (rcihtiger wert wird habiert)