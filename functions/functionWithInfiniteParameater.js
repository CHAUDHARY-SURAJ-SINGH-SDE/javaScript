/* we can declare the function with infinite parameters using argument keyword and perform operation using loop */
//but we can only gives the infinite argument at the time of callig and perform operation in function using loop
function myFun() {
    var sum =0;
    for (const ele of arguments) {
        sum = sum +ele;   
    }
    return sum;
}
var total = myFun(1,2,3,4,5,6,7,8,9);
console.log(total);