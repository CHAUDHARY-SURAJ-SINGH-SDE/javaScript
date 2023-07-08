/*we can manuplate the object by some builtin function  */
let object= {
    name:'john',
    age :25,
    profetion:'engineering',
    role:'full stack developer'
}
let key = Object.keys(object)//return the key of passed object
console.log(key);
let value =  Object.values(object)//return the value of the object 
console.log("------ value -----");
console.log(value);
let entry = Object.entries(object);//return the entries of the object
console.log('-----property -----');
console.log(entry);