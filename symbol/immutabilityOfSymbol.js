/*Symbols are immutable, meaning their value cannot be changed once they are created. This immutability ensures that the uniqueness of symbols is preserved throughout their lifecycle. Once a symbol is created, its value remains constant and cannot be modified. */
const symbol = Symbol('key');
symbol = Symbol('newKey');  // Throws an error
