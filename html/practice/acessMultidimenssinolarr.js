const arr =['0 index','1 index',['0 of 2 ',[645646,['hey there']]],['i am 3 of 2 index']];
console.log(arr);
console.log(arr[2]);
console.log(arr[2][1][0]);
arr[2][1][0]='i am changed';
console.log(arr[2][1][0]);
arr.pop();
console.log(arr);
