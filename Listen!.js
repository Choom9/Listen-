let akkorde = [
    new Audio("aMoll.mp3"), new Audio("cDur.mp3"), new Audio("dDur.mp3"), new Audio("dMoll.mp3"), new Audio("eMoll.mp3"), new Audio("fDur.mp3"), new Audio("gDur.mp3")
]
let vaRi = false
let akkzahl
let reAkkZahl = function () {
    akkzahl = Math.floor(Math.random()*akkorde.length)
}
reAkkZahl();

let playSound = function() {
    if (vaRi === false) {
        akkorde[akkzahl].pause();
        akkorde[akkzahl].currentTime = 0;
        akkorde[akkzahl].play();
    }
    else {
        reAkkZahl();
        akkorde[akkzahl].play();
        vaRi = false;
    }
}

let checkeAkkord= function(rAkkord) {
    if (rAkkord === akkzahl) {
        document.getElementById("checkAntwort").innerHTML = "Richtig !";
        console.log("Richtig !");
        vaRi = true
    }  
    else {
        document.getElementById("checkAntwort").innerHTML = "Falsch !";
        console.log("Falsch !");
        vaRi = false
    }
}