var myArray = ["suraj","ruchima","raftaar singh","mark","john"];
var myArray2= [1212,564,546,75,45,10,12205,5,0865,20];
//adding the given value at the last of the array
myArray.push("rohit");
console.log(myArray);
//remove the element from the end of the array
myArray.pop();
console.log(myArray);
//removing the first element of the array
myArray.shift();
console.log(myArray);
//adding the element at the starting of the array
myArray.unshift("chaudhary suraj singh");
console.log(myArray);
//deleting the element of the given index upto given index
myArray.splice(4,1);
console.log(myArray);
//replace the value of the given index withen the given value up to given number of the index
myArray.splice(2,1,"manpreet singh");
console.log(myArray);
//adding the array withn the another array
console.log(myArray.concat(myArray2));
//reverse the element of the array
console.log(myArray.reverse());