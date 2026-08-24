let akkorde = [
    new Audio("../SoundsAkkorde/aMoll.mp3"), new Audio("../SoundsAkkorde/cDur.mp3"), new Audio("../SoundsAkkorde/dDur.mp3"), new Audio("../SoundsAkkorde/dMoll.mp3"), new Audio("../SoundsAkkorde/eMoll.mp3"), new Audio("../SoundsAkkorde/fDur.mp3"), new Audio("../SoundsAkkorde/gDur.mp3")
];
let awardSound = new Audio("../SoundsEffekte/awardSound.mp3");
let lossSound = new Audio("../SoundsEffekte/loss2.mp3");
let levelUpSound = new Audio("../SoundsEffekte/LevelUP1.mp3")

let startBorder = 0

let levelUpDiff = 4
let vaRi = false
let akkzahl
let reAkkZahl = function () {
    akkzahl = Math.floor(Math.random()*Math.max(1, akkorde.length-levelUpDiff))
}
// Ja index geht nur von 0 bis 6 aber durch floor macht es sinn. 7 wird nie erreciht weil math.floor abrundet und höchstens (fast) 7 rauskommt aber immer unter 7 weil math.random 1 exklusive hat 
reAkkZahl();

// Kernlogik: akkzahl spiegelt index des akkorde arrays wieder 
let playSound = function() {
    startBorder = 1;
    if (vaRi === false) {
        akkorde[akkzahl].pause();
        akkorde[akkzahl].currentTime = 0;
        akkorde[akkzahl].play();
        document.getElementById("checkAntwort").innerHTML = "";
        console.log(akkorde[akkzahl]);
    }
    else {
        reAkkZahl();
        akkorde[akkzahl].pause();
        akkorde[akkzahl].currentTime = 0;
        akkorde[akkzahl].play();
        akkButt.forEach (n => {n.style.backgroundColor = ""});
        vaRi = false;
    }
}
const akkButCol = getComputedStyle(document.querySelector(".akk")).backgroundColor;
let akkButt = document.querySelectorAll(".akk");
// akkButt sind alle die html elemente mit class akk in ein array gepackt 
// akkButIndi ist nur eine temporäre lokale variable in der die array elemenre des akkButt verarbeitet werden
// für jedes der elemente von akkButt ein akkIndex erstellen und checkeakkord() anwenden 
/* das heißt nicht mit dem Index des arrays wird gearbeitet sondern 
mit den html werten von data Index was GUT ist für Listen Custom
Stimmt akkIndex (die html index nummer vom button) überein mit akkzahl (der akkord mit index akkzahl wird gewählt)
*/

akkButt.forEach (akkButIndi => akkButIndi.addEventListener ("click", () => {
    let akkIndex = Number(akkButIndi.dataset.index);
    if (vaRi===false) {
    checkeAkkord(akkIndex, akkButIndi)}}))


let checkeAkkord = function(rAkkord, akkIndi) {
    if (startBorder == 1) {
    if (rAkkord === akkzahl) {
        console.log("Richtig !");
        akkIndi.style.backgroundColor = "green";
        reAkkZahl();
        münzKapital = münzKapital + 1;
        münzKapiPrüf();
        awardSound.pause();
        awardSound.currentTime = 0;
        awardSound.play();

        document.getElementById("coinCounter").innerHTML =  "Coin Counter: " + münzKapital;
        vaRi = true;
    }  
    else {
        console.log("Falsch !");
        lossSound.pause();
        lossSound.currentTime = 0;
        lossSound.play();
        münzKapital = Math.max(0, münzKapital - 1);
        document.getElementById("coinCounter").innerHTML =  "Coin Counter: " + münzKapital;
        vaRi = false;
        }

    }
}


let münzKapital = 0

let dMollAkkJs = document.getElementById("dMollAkk")
let eMollAkkJs = document.getElementById("eMollAkk")
let fDurAkkJs = document.getElementById("fDurAkk")
let gDurAkkJs = document.getElementById("gDurAkk")



let levelUpSoundNew = function () {
    

}
// extra if struktur einauen, bei jedem if eine neue variabel 
let levelUpVari
 let münzKapiPrüf = function () {
    if (münzKapital == 10 && levelUpVari !== 1) {
        levelUpVari = 1
        levelUpDiff -= 1;
        dMollAkkJs.innerHTML = `<button class="akk" data-index="3">D-Moll</button>`;
        levelUpSound.pause();
        levelUpSound.currentTime = 0;
        levelUpSound.play();
    }

    else if (münzKapital == 20 && levelUpVari !== 2) {
        levelUpVari = 2
        levelUpDiff -= 1;
       eMollAkkJs.innerHTML = `<button class="akk" data-index="4">E-Moll</button>`;
       levelUpSound.pause();
        levelUpSound.currentTime = 0;
        levelUpSound.play();
    } 
    else if (münzKapital == 30 && levelUpVari !== 3 ) {
        levelUpVari = 3
        levelUpDiff -= 1;
        fDurAkkJs.innerHTML = `<button class="akk" data-index="5">F-Dur</button>`;
        levelUpSound.pause();
        levelUpSound.currentTime = 0;
        levelUpSound.play();
    }
    else if (münzKapital == 40 && levelUpVari !== 4) {
        levelUpVari = 4
        levelUpDiff -= 1;
        gDurAkkJs.innerHTML = `<button class="akk" data-index="6">G-Dur</button>`;
        levelUpSound.pause();
        levelUpSound.currentTime = 0;
        levelUpSound.play();
    }
}   
   
 
 let switchBoxHtml = document.getElementById("ccSwitch")
 // Was noch fehlt ist, dass der checked zustand tatsählich zu sehen ist 
 
 // Logik klappt wenn man annimt, dass der anfangszusatand ist: Kein Check; Kein chek = Normaler Modus
// false = Kein Custom mode 


let chordChoiceAmoll = 0
let seitenZustand = 0
 let chordAuswahl = function (newChordArray) { 
    // Filter Pop Up bauen 
    // Vom Prinzip: Button bauen, der pop up mit chekboxen öffnen, dass vorher versteckt war
 }
 
switchBoxHtml.addEventListener("change", function () {
 if (window.location.pathname === "/Listen!Level/Listen!.html") {window.location.href = "../Listen!Custom/Listen!Custom.html" }
 else if (window.location.pathname === "/Listen!Custom/Listen!Custom.html") {window.location.href = "../Listen!Level/Listen!.html" }
})

console.log(window.location.pathname);

// Wichtig! JS für custom verlagern 
if (window.location.pathname === "/Listen!.html") {switchBoxHtml.checked = false}
else if (window.location.pathname === "/Listen!Custom.html") {switchBoxHtml.checked = true}
 // Custom Mode doch auf neue seite verlagern 

// Also: 1. den eintrag richtig und falsch löschen. 2. Ein Art Belohungssound einbauen bei rixhtigen akkord; 3. eine Art Münz sammel ding daraus machen, jede richtige Antwort eine Münze 
// Möglichkeit sich akkorde auszusuchen die erscheinen sollen (extra seite)
// Ansonsten immer bei 10 Münzen neuer Akkord (standard)
// Belohungsshop?
// verwendete Sounds normalisieren für gleiche Lautstärke
// wenn von 11 auf 10 weil eins falsch nicht wieder Level UP Sound 
//Custom Mode Hin und zurück machen