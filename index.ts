let firstName: string;
let lastName: string;
let fullName: string;
let occupation: string;

firstName="Moheuddin"
lastName="Munna"
occupation="Learner"

console.log(firstName, lastName, occupation)
console.log(firstName.toUpperCase())
console.log(lastName.toLowerCase())
fullName=firstName.concat(lastName)
console.log(fullName)
console.log(`User ${fullName} occupation is ${occupation}`)


console.log("------------------------------- Array Type ---------------------------------")

let users : Array<string>;
users=["a","b","c","d","e","f","g","h","i"];
let number : Array<number>;
number=[1,2,3,4,5,6,7,8,9,10]

users.unshift("a");
console.log("Array unShift",users);

users.shift();
console.log("Array shift",users);

