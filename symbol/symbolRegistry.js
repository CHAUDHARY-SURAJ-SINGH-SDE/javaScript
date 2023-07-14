/*The Symbol.for() function allows you to access or create symbols in a global symbol registry. If the symbol with the given key doesn't exist, it creates a new one and adds it to the registry. If it already exists, it returns the existing symbol.
if a Symbol created using 'Symbol.for()' having same discription then it  consider global and if another symbol with same cration or same discription both are equal */


let symbol = Symbol.for("key");
let symbol1 = Symbol.for("key");
console.log(symbol===symbol1);//true because both are global and having same discription
let symbol2 = Symbol.for("another key");
console.log(symbol === symbol2);//false because symbol2 have diffrent discription

/*the Symbol.keyFor() function allows to retrieve the key for a symbol in the registry.  */
console.log(Symbol.keyFor(symbol));//return the discription "key"
console.log(Symbol.keyFor(symbol2));//return the discription "another bkey"
