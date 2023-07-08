/* Object Referencing:
When we assign an object to a variable or pass it as a function argument, we creating a reference to the object.
Multiple variables can reference the same object.
Any modification made to the object through one variable will be reflected in all the variables  referencing it. */
let object1 = new Object();
object1.name ="suraj singh";
object1.profession= "Engineering";
object1.age=22;

//referencing the existing object to the another object
let object2 = object1;//object2 references the same object as object1
console.log(object1.name);//suraj singh
console.log(object2.name);//suraj singh

//modification in any one of these will reflect to both
object2.age= 21;// make change in object2
console.log(object1.age);//but reflect in object1 also