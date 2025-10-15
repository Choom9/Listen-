let akkorde = [
    new Audio("aMoll.mp3"), new Audio("cDur.mp3"), new Audio("dDur.mp3"), new Audio("dMoll.mp3"), new Audio("eMoll.mp3"), new Audio("fDur.mp3"), new Audio("gDur.mp3")
]
let akkzahl
let playSound = function() {
    akkzahl = Math.floor(Math.random()*akkorde.length);
    akkorde[akkzahl].play();
}
let checkeAkkord= function(rAkkord) {
    if (rAkkord === akkzahl) {
        true;
        console.log("Richtig !")
    }  
    else {
        false 
        console.log("Falsch !")
    }
}