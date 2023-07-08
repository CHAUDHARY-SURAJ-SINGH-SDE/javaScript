/* The equality operator (==) performs a loose or abstract comparison, meaning it compares the values for equality after performing type coercion if necessary. 
This means that if the operands have different types, JavaScript will try to convert one or both of the values to a common type before making the comparison */
console.log(5 == '5');  // true, because the string '5' is converted to the number 5
console.log(true == 1); // true, because true is converted to 1
console.log(null == undefined); // true, because null and undefined are considered equal

/* The strict equality operator (===) performs a strict comparison, meaning it checks for both value equality and type equality. It does not perform type coercion. For example: */
console.log(5 === '5');  // false, because the operands have different types
console.log(true === 1); // false, because true and 1 have different types
console.log(null === undefined); // false, because null and undefined have different types
