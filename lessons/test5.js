// var obj = {
//    name1: "vivek",
//    getName: function () {
//       console.log(this.name1);
//    }

// }

// var getName = obj.getName;

// var obj2 = { name1: "akshay", getName };

// obj.getName();
// obj2.getName();
// var obj1 = {
//    address: "Mumbai,India",
//    getAddress: function () {
//       console.log(this.address);
//    }
// }

// var getAddress = obj1.getAddress;
// var obj2 = { name: "akshay" };
// obj2.getAddress();   

// function sayHello() {
//    return "Hello " + this.name;
// }

// var obj = { name: "Sandy" };
// var obj1 = {name: "Peter"}

// console.log(sayHello.call(obj1));
// console.log(sayHello.call({name: "John"}))

// var person = {
//    age: 23,
//    getAge: function () {
//       return this.age;
//    }
// }
// var person2 = { age: 54 };
// console.log(person.getAge.call(person2))

function saySomething(message, sign) {
   return this.name + " is " + message + sign;
}
var person4 = { name: "John" };
console.log(saySomething.apply(person4, ["awesome", "!"]));