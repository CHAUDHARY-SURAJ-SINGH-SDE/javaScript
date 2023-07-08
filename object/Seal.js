/* In JavaScript, sealing an object means that 
we can prevent new properties from being added.
existing properties from being removed. 
while still allowing the modification of existing properties.
To seal an object, you can use the Object.seal() method.  */
const obj = {
    prop1: 'value1',
    prop2: 'value2'
};

Object.seal(obj);

// Trying to add a new property will not work
obj.prop3 = 'value3'; // This assignment will be ignored

// Trying to delete a property will not work
delete obj.prop2; // This deletion will be ignored

// Modifying existing properties is allowed
obj.prop1 = 'new value';

// The object is sealed, but its properties can still be modified
console.log(obj); // Output: { prop1: 'new value', prop2: 'value2' }
