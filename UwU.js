let akkorde = [
    "Amoll", "Cdur", "Ddur", "Emoll", "FDur", "Gdur"
]
let akkord
let playSound = function() {
    akkord = Math.floor(Math.random()*akkorde.length);
    console.log(akkord);
}
let checkeAkkord= function(rAkkord) {
    if (rAkkord == akkord) {
        true;
        console.log("Richtig !")
    }  
    else {
        false 
        console.log("Falsch !")
    }
}