/*we can delete the existing property of an object by 'delete' keyword */
let object = {
    name: 'john',
    age: 25,
    profetion: 'engineering',
    role: 'full stack developer'
}
console.log(object);
delete object.role;//deleting the property of object 
console.log(object);