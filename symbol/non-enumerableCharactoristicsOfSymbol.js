/*symbols are non-enumerable by default. This means they won't be iterated over in for...in loops or obtained using methods like Object.keys(). By default, symbols are hidden from most object property iteration mechanisms. However, they can be accessed using methods like Object.getOwnPropertySymbols() or Reflect.ownKeys(). This feature allows symbols to be used to define unique properties on objects without the risk of unintentional collisions. */
let id = Symbol('id');
let user = {
    name: "John",
    age: 30,
    [id]: 123
};
for (const key in user) {
    console.log(key);//id is not reflect as key because it is a symboled key
}
//also not accessible by Object.keys() method
console.log(Object.keys(user));// [ 'name', 'age' ]
// also symboled key's value cannot be accesed
console.log(Object.values(user));//[ 'John', 30 ]
// but javaScript have a alternative way to access symboled property
//using Object.getOwnPropertySymbols()

console.log(Object.getOwnPropertySymbols(user));//return all the symbols in the object  [ Symbol(id) ] here id is the symbol discription not the symbol identifier
// Reflect.ownKeys().
console.log(Reflect.ownKeys(user));//return all keys  [ 'name', 'age', Symbol(id) ]

