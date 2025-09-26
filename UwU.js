let akkorde = [
    "Amoll", "Cdur", "Ddur", "Emoll", "FDur", "Gdur"
]
const playSound = function() {
    let akkord = Math.floor(Math.random()*akkorde.length)
    return akkord
}
console.log(playSound())