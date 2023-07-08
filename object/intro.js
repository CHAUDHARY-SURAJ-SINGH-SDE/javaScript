/* object In JavaScript, an object is a fundamental data type that allows to store and manipulate collections of key-value pairs. It is a versatile and powerful feature of the language that enables you to represent complex data structures and define custom behaviors. */
let myobj ={
    person:"suraj singh",profession:"software engineer",skill:["javascript","java",'c++','python','html','css','c','MySQL','mongoDB','android','kotlin'],age:21,netWorth:'250cr'
}//declaration of object
//we can access the data of the object by '.' operator or []
console.log(myobj.person);//suraj singh
console.log(myobj['person']);//suraj singh
for (const key in myobj) {
        const element = myobj[key];
        console.log(key+" "+element);
}