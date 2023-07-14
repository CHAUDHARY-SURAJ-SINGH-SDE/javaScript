/*Symbols in JavaScript are a primitive data type introduced in ECMAScript 6 (ES6) that represent unique identifiers. They are distinct from other JavaScript data types such as strings, numbers, booleans, objects, and functions.
************ charctoristics of symbol *********

UNQUENESS: --->> The primary characteristic of symbols is their uniqueness. Each symbol created using the Symbol() function is guaranteed to be unique. Even if two symbols have the same description, they are distinct entities and will never be equal to each other. This uniqueness ensures that symbols can be used as unique identifiers, particularly as keys for object properties, to avoid naming collisions.

NON-ENUMERABLE: --->>  symbols are non-enumerable by default. This means they won't be iterated over in for...in loops or obtained using methods like Object.keys(). By default, symbols are hidden from most object property iteration mechanisms. However, they can be accessed using methods like Object.getOwnPropertySymbols() or Reflect.ownKeys(). This feature allows symbols to be used to define unique properties on objects without the risk of unintentional collisions.

IMMUTABILITY: --->> Symbols are immutable, meaning their value cannot be changed once they are created. Once a symbol is assigned a value, it cannot be modified or mutated. This immutability ensures that the uniqueness of symbols is preserved throughout their lifecycle. It also means that symbols cannot be used as variables to store changing values.

Symbol Description: ---> When creating a symbol using the Symbol() function, you can provide an optional description as its parameter. The description is a string that can be used for debugging or providing additional information about the symbol's purpose. However, it does not affect the uniqueness of symbols. The description can be accessed using the description property of the symbol */

