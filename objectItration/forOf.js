/*we can itrate the object properties with the for of loop */
let myobj = new Object();
myobj.name = 'john';
myobj.age = 25;
myobj.occupation = 'engineer';
for (const key of myobj) {
    console.log(myobj.key);
    
}
// for (const key in myobj) {
//     if (Object.hasOwnProperty.call(myobj, key))//checking if the key is present in object or not 
//     {
//         console.log(myobj[key]);

//     }
// }