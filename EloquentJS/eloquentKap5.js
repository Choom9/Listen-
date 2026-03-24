console.log("Hallo Cock", "wie bidde")

function flatening(array) {return array.reduce((a, b) => a.concat(b), []);
}
console.log(flatening([[1, 2, 3], [4, 5, 6]]))

// 1. start value 
//  2. Test Funktion die wenn false alles stoppt 
// 3. Body function der das argument gegeben wird, zb. Console.log
// 4. Update Function das neues value created und dann wieder zu test springt 
// parameter einer funktion sind lokale Variablen die automatisch mit den übergebenden argumenten gefüllt werden 


let loop = function(startValue, test, update, body ) {
let currentValue = startValue
    while(test(currentValue)) {
    body(currentValue);
   currentValue = update(currentValue);
}

}


loop(3, n => n > 0, n => n-1, console.log)

let loop2 = function (startValue, test, update, body) {  
    for (let i = startValue; test(i); i = update(i)) { 
        body(i)
    }
}
let every = function(array, test) {

    let booleanArray = [];
   for (let i = 0; i < array.length; i++) {
        booleanArray.push(test(array[i])) 
        }

for (let i = 0; i < booleanArray.length; i++)
if (booleanArray[i] == false) {
    console.log(false)
     return false
    }
    console.log(true)
    return true
}

every([0, 2, 3], n => n < 4)
every([0, 2, 3], n => n < 2)

// every2 Version mit suchen bis eins FALSE

let every2 = function (array, test) {

    for(let i = 0; i < array.length; i++)
    {
        if (test(array[i]) == false) {return false}
    }
    return true    
}

console.log(every2([0, 2, 3], n => n < 4))
console.log(every2([0, 2, 3], n => n < 2))


// Objekt == Boolean ist immer false
// wenn funktion kein return enthält gibt sie automatisch undefined zurück 
// Versuche das mit Objekt = nur eine referenz kein wert zu verstehen

// DOMINENT WRITING DIRECTION FUNCTION BAUEN
// Einzelne strings heraus holen und entcheiden welches 
//character Script 
//Dann schauen welches character script welche wiritn direction
// Dann schauen welches den grösten Anteil hat
// wichtig: array.codePointAt[] gibt den Unicode an
// Dann schauen ob unicode in range der scripts ist

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

//console.log(characterScript(121));
// → {name: "Latin", …}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name == name);
    if (!known) {
      counts.push({name, count: 1});
    } else {
      known.count++;
    }
  }
  return counts;
}

//console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]

// für group name in diesem fall den function character script einsetzen 


let dominantDirection = function (text) {

let uniCodeArray = []
    for (let item of text) {
uniCodeArray.push(item.codePointAt(0))
    }
// in uniCodeArray hast du jetzt eine Liste der Codes

let characterScriptArray = countBy(uniCodeArray,characterScript)
let amountArray = []
for(let item2 of characterScriptArray ) {
    amountArray.push(item2.count)
}

let maxAnzahl = Math.max(...amountArray);

let dominantCharacterScri = characterScriptArray.find(item3 => item3.count == maxAnzahl);

let rightDirection = dominantCharacterScri.name.direction

return rightDirection
}

console.log(dominantDirection("UwUChan"))
console.log(dominantDirection("Hey, مساء الخير"))

// find gibt einzelnes objekt zurück kein arrayn
//Wenn du keine geschweiften Klammern {} benutzt (n => n < 5):
// Der Ausdruck rechts vom => wird automatisch zurückgegeben.
// mit geschweifter brauchst du return 
/* Bei for (let ch of string)
wird bei jedem Durchlauf das nächste Element der Sequenz in ch gespeichert.

Und zwar:
	•	in der ursprünglichen Reihenfolge
	•	ein Element pro Iteration
	•	ohne dass du einen Index brauchst */