/* Arrow function with multiple statement are same as the arrow function. but have a body inclosed with curly braces and may have a return statement(depend on the function) but not have a function keyword */
const sum = (a,b)=>{
    console.log("the value of a is: "+ a);
    console.log("the value of b is: "+ b);
    return a+b;
}
console.log(sum(2,8));