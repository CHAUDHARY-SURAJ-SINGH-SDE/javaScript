/*objects are mutable in javascript that mean we can modify the properties(key value pair) of the object */
let myobj = {
    person: "suraj singh", profession: "software engineer", skill: ["javascript", "java", 'c++', 'python', 'html', 'css', 'c', 'MySQL', 'mongoDB', 'android', 'kotlin'], age: 21, netWorth: '250cr'}
    myobj.age=22//alter the age from 21 to 22
    myobj.region="india"//adding new properties to the object
console.log(myobj.region); //india will be the output