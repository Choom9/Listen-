
const aMollCm = new Audio("../SoundsAkkorde/aMoll.mp3");
aMollCm.key = "aMollCm" //FUCKING LÖSUNG 

const cDurCm = new Audio("../SoundsAkkorde/cDur.mp3");
cDurCm.key = "cDurCm"

const dDurCm = new Audio("../SoundsAkkorde/dDur.mp3");
dDurCm.key = "dDurCm"

const dMollCm = new Audio("../SoundsAkkorde/dMoll.mp3");
dMollCm.key = "dMollCm"

const eMollCm = new Audio("../SoundsAkkorde/eMoll.mp3");
eMollCm.key = "eMollCm"

const fDurCm = new Audio("../SoundsAkkorde/fDur.mp3");
fDurCm.key = "fDurCm"

const gDurCm = new Audio("../SoundsAkkorde/gDur.mp3");
gDurCm.key = "gDurCm"

let akkordeCm = []
console.log(akkordeCm)

let gedrücktButton



let awardSound = new Audio("../SoundsEffekte/awardSound.mp3");
let lossSound = new Audio("../SoundsEffekte/loss2.mp3");
// weiteren sound bei Switch zu custom mode und zurürck
//Cm steht für Custom Mode 
//System funktiioniert mit Array Nummerierung, Amoll ist auf stelle 0 !A moll=0
//muss was anderes her, array bauen ? 
let startBorder = 0 // nach dem ersten Play wird es 1
// Erst bei 1 geht ganze checke Akkord logik los 

let vaRi = false // Schauen ob letzter akord richtig bestimmt wurde 
// Wenn false wird kein neuer Akkord gespielt 
// Zustand bei dem Akkord noch nciht richtig bestimmt wurde

let akkzahl
let reAkkZahl = function () {
    akkzahl = Math.floor(Math.random()*Math.max(1, akkordeCm.length))
}
// akkzahl ist ein index für akkordeCm deswegen kann 0 rauskommen 

// Level Up Logik entfernen 
// Wichtigster Gedanke: Großes problem in kleine lösbare probleme zerteilen 
reAkkZahl(); // zahl um akkord aus array zu spielen 

let currentAkkord = null

let playSound = function() {
  akkContainerChildren = akkContainer.querySelectorAll(".akk");

  if (akkordeCm.length === 0) {}
    else if (vaRi == false) {
        currentAkkord = akkordeCm[akkzahl]
        startBorder = 1
        akkordeCm[akkzahl].pause();
        akkordeCm[akkzahl].currentTime = 0;
        akkordeCm[akkzahl].play();
        console.log(3, gedrücktButton);
        document.getElementById("checkAntwort").innerHTML = "";

    }
    else {
        reAkkZahl();
        currentAkkord = akkordeCm[akkzahl]
        akkordeCm[akkzahl].pause();
        akkordeCm[akkzahl].currentTime = 0;
        akkordeCm[akkzahl].play();
        console.log(3, gedrücktButton);
        akkContainerChildren.forEach(button => { button.style.backgroundColor =""})
        vaRi = false;
    }
} 
// 24.02 Gedrückt button Logik für farbe ist nicht ideal, weil du ja nach dem richtigen drücken 
// einen anderen akkord wählen kannst und dann gedrückt button ein anderer ist
// besser: alle 


let rAkkord = null

/*akkButt.forEach (akkButIndi => akkButIndi.addEventListener ("click", () => {
    if (vaRi===false) {
    checkeAkkord(akkButIndi, akkButIndi)
  console.log(currentAkkord, "k1")
  console.log(akkButIndi.dataset.sound, "k2")
console.log("k3", akkButIndi, "k3")
onsole.log("k4", akkButIndi, "k4")
}}))*/


//22.02.25: akkButIndi ist richtig, aber irgendwie fehlt da data sound 
// 21.02.26: HIER IST DAS PROBLEM: akkButIndi.dataset.sound ist UNDEFINED 
// Problem: akkButIndi ist undefined, weil akkButt beim Laden der Seite leer ist

    // akkIndex ist rAkkord 
/*
html index zahl des buttons vergleichen mit akkzahl
akkzahl entscheidet welcher akkord gespielt wird
Davor wird anhand der checkboxen das array gebaut fürs akkorde spielen 
akkzahl wird eingesetzt als Index des akkordes der spielen soll
damit akkzahl = ein spezfischer akkord
*/

let switchBoxHtml = document.getElementById("ccSwitch")
// Wir sind nah dran...
// ABER checke akkord logik geht nicht auf
// Du willst currentAkkord.key vergleichen mit element.dataset.sound
let checkeAkkord= function(rAkkord) {
    if (startBorder == 1) {
      if (rAkkord.dataset.sound == currentAkkord.key) {
        rAkkord.style.backgroundColor = "green";
        reAkkZahl();
        awardSound.pause();
        awardSound.currentTime = 0;
        awardSound.play();
        vaRi = true;
    }  
    else {
        console.log("Falsch !");
        lossSound.pause();
        lossSound.currentTime = 0;
        lossSound.play();
       
        vaRi = false;
        }
    }
}

let akkContainer = document.getElementById("akkContainer")
let akkContainerChildren 

akkContainer.addEventListener("click", function (e) { 
  gedrücktButton = e.target.closest("button.akk");
if (vaRi===false) {
    checkeAkkord(gedrücktButton)
}
} )

// in akkButIndi ist das html button, was gerade gedruckt wurde wurde


let aMollAkkJs = document.getElementById("aMollAkk")
let cDurAkkJs = document.getElementById("cDurAkk")
let dDurAkkJs = document.getElementById("dDurAkk")
let dMollAkkJs = document.getElementById("dMollAkk")
let eMollAkkJs = document.getElementById("eMollAkk")
let fDurAkkJs = document.getElementById("fDurAkk")
let gDurAkkJs = document.getElementById("gDurAkk")
let tester = document.getElementById("tester")


switchBoxHtml.addEventListener("change", function () {
 if (window.location.pathname === "/Listen!Level/Listen!.html") {window.location.href = "../Listen!Custom/Listen!Custom.html" }
 else if (window.location.pathname === "/Listen!Custom/Listen!Custom.html") {window.location.href = "../Listen!Level/Listen!.html" }
})

if (window.location.pathname === "/Listen!.html") {switchBoxHtml.checked = false}
else if (window.location.pathname === "/Listen!Custom.html") {switchBoxHtml.checked = true}
 // Custom Mode doch auf neue seite verlagern 

 let aMollCheckbox = document.getElementById("aMollCheckBox");
 let cDurCheckbox = document.getElementById("cDurCheckBox");
 let dDurCheckbox = document.getElementById("dDurCheckBox");
 let dMollCheckbox = document.getElementById("dMollCheckBox");
 let eMollCheckbox = document.getElementById("eMollCheckBox");
 let fDurCheckbox = document.getElementById("fDurCheckBox");
 let gDurCheckbox = document.getElementById("gDurCheckBox");

// Funktion bauen, um ein teil des akkordeCm zu entfernen 
// richtiges array hier ist akkordeCm
let akkordArrayDestroyer = function (array, item) {
    let indexD = array.indexOf(item)
    array.splice(indexD, 1) 
}
 
aMollCheckbox.addEventListener("change", function () 
  {
    
    if (aMollCheckbox.checked) {
    akkordeCm.push(aMollCm)
    aMollAkkJs.innerHTML = `<button data-sound="aMollCm" class="akk" data-index="0">A-Moll</button>`}

    else {aMollAkkJs.innerHTML = " ";
      akkordArrayDestroyer(akkordeCm,aMollCm )
    }

  } )

cDurCheckbox.addEventListener("change", function () 
  {
    if (cDurCheckbox.checked) {
    akkordeCm.push(cDurCm)
    cDurAkkJs.innerHTML = `<button data-sound="cDurCm" class="akk" data-index="1">C-Dur</button>`
    cDurHtml = document.getElementById("cDur")
    //Idee: Objekt erstellen mit html objekt und mit audio aus array
      console.log(akkordeCm)
    }

    else {cDurAkkJs.innerHTML = " "; 
      akkordArrayDestroyer(akkordeCm,cDurCm);
      console.log(akkordeCm)
    }



  } 

)

dDurCheckbox.addEventListener("change", function () 
  {
    
    if (dDurCheckbox.checked) {
    akkordeCm.push(dDurCm)
    dDurAkkJs.innerHTML = `<button data-sound="dDurCm" class="akk" data-index="2">D-Dur</button>`
  console.log(akkordeCm)

}

    else {dDurAkkJs.innerHTML = " "; 
  akkordArrayDestroyer(akkordeCm,dDurCm);
  console.log(akkordeCm)}

   
  } )


  dMollCheckbox.addEventListener("change", function () 
  {
    
    if (dMollCheckbox.checked) {
    akkordeCm.push(dMollCm)
    dMollAkkJs.innerHTML = `<button data-sound="dMollCm" class="akk" data-index="3">D-Moll</button>`}
    else {dMollAkkJs.innerHTML = " ";
      akkordArrayDestroyer(akkordeCm,dMollCm )
    }
    
} )

 eMollCheckbox.addEventListener("change", function () 
  {
    
    if (eMollCheckbox.checked) {
    akkordeCm.push(eMollCm)
    eMollAkkJs.innerHTML = `<button data-sound="eMollCm" class="akk" data-index="4">E-Moll</button>`}
    else {eMollAkkJs.innerHTML = " ";
      akkordArrayDestroyer(akkordeCm,eMollCm )
    }
   
} )

 fDurCheckbox.addEventListener("change", function () 
  {
    
    if (fDurCheckbox.checked) {
    akkordeCm.push(fDurCm)
    fDurAkkJs.innerHTML = `<button data-sound="fDurCm" class="akk" data-index="5">F-Dur</button>`}
    else {fDurAkkJs.innerHTML = " ";
      akkordArrayDestroyer(akkordeCm,fDurCm )
    }
} )

    gDurCheckbox.addEventListener("change", function () 
  {
    
    if (gDurCheckbox.checked) {
    akkordeCm.push(gDurCm)
    gDurAkkJs.innerHTML = `<button data-sound="gDurCm" class="akk" data-index="6">G-Dur</button>`}
    else {gDurAkkJs.innerHTML = " ";
      akkordArrayDestroyer(akkordeCm,gDurCm )
    }

} )

 

