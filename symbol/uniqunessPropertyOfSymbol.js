/*every symbol identfier is unque that is created using Symbol() function even both have the same discription */
let s1= Symbol("i am symbol");
let s2= Symbol("i am symbol");
console.log(s1==s2);// false
