/*Arithmetic operator are used to perform arithmetic operation  */
//Addition '+=' add left operand to right operand and store in left operand
//Substraction '-=' subtract left operand from right operand and store in left operand
//multiplication '*=' multiply left operand with right operand and store in left operand
//division '/=' divide left operand by right operand and return quatant and store in left operand
//Modulo '%=' divide left operand by right operand and return 'reminder' and store in left operand
//Exponents '**=' calulate the power of left opwerands by right operands timeand store in left operand
//increment '++=' increment the value of operand by 1 and store in left operand
//decrement '--=' decrement the value of operand by 1 and store in left operand
var num1 = 10;
var num2 = 15;
num1+=num2
console.log(num1);//25 Now num1 become 25 rather then 10 
num1-=num2;
console.log(num1);//10 num1 become 10 '25-15 = 10'
num1 *= num2
console.log(num1);//150 num1 become 150
num1 /= num2
console.log(num1);//10
num1 %= num2
console.log(num1);//10
num1 **= num2
console.log(num1);//1000000000000000
console.log(++num1);//1000000000000001 pre incrment
console.log(--num1);//1000000000000000 pre decrement
console.log(num2++);//15 post increment
console.log(num2--);//15 post decrement