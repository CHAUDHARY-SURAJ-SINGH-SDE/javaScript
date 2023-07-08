/*An  object properties can be a funtion that is called method 
these methode can be invoked like accessing the properties  */
let obj={
    person:"john",
    age:21,
    region:"india",
    greeting:function() {
        console.log("hey there i am "+" "+this.person);//can aceess the properties of the object using 'this' keyword
    }
}
obj.greeting()