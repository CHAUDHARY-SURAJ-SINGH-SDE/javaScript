/*Symbols can be used as property keys in an object literal, allowing you to create properties that are unique and separate from other keys.
symbol key defined using '[]'  */
const symbolKey = Symbol('key');

const obj = {
    [symbolKey]: 'value',
    regularKey: 'regular value'
};
//accessing the  symboled and regural property
console.log(obj.regularKey);  // Output: 'regular value'
console.log(obj[symbolKey]);  // Output: 'value'
//console.log(obj.symbolKey);  // not a correct way return undefined




