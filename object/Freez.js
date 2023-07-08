/* In JavaScript, we can freeze an object using the Object.freeze() method.
Freezing an object makes it immutable
meaning its properties cannot be added, modified, or removed.*/
const obj = {
    prop1: 'value1',
    prop2: 'value2'
};

Object.freeze(obj);

// Trying to modify the object will not have any effect
obj.prop1 = 'new value'; // This assignment will be ignored

// Trying to add a new property will not work
obj.prop3 = 'value3'; // This assignment will be ignored

// Trying to delete a property will not work
delete obj.prop2; // This deletion will be ignored

// The object remains unchanged
console.log(obj); // Output: { prop1: 'value1', prop2: 'value2' }
