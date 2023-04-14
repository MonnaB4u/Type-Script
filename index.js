var firstName;
var lastName;
var fullName;
var occupation;
firstName = "Moheuddin";
lastName = "Munna";
occupation = "Learner";
console.log(firstName, lastName, occupation);
console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());
fullName = firstName.concat(lastName);
console.log(fullName);
console.log("User ".concat(fullName, " occupation is ").concat(occupation));
console.log("------------------------------- Array Type ---------------------------------");
var users;
users = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
var number;
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
users.unshift("a");
console.log("Array unShift", users);
users.shift();
console.log("Array shift", users);
console.log("-------------------------------  Class ---------------------------------");
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("".concat(this.name, ", age:").concat(this.age));
    };
    return User;
}());
var user1 = new User("Munna", 25);
user1.display();
