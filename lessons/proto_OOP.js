//inheritance by prototyping

//1-st parent
// let obj = {
//   name1: 'vivek',
//   occupation: 'QA',
//   getName: function () {
//     console.log(this.name1)
//   }
// }
// let getName = obj.getName

// //2_01
// let obj1 = {
//   address: 'Mumbai, India',
//   getAddress: function () {
//     console.log(this.address)
//   },
//   __proto__: obj //наследует от obj
// }
// var getAddress = obj1.getAddress

//2_02
// let obj1Other = {
//   name1: 'Adam',
//   address: 'Houston, Texas',
//   car: 'Volvo',
//   getAddress: function () {
//     console.log(this.address + "I leave here")
//   },
//   __proto__: obj //наследует от obj
// }
// console.log(obj1.car)

// obj.getName()
// obj1.getName()
// obj1.getAddress()

//3
// var obj2 = {
//   __proto__: obj1
// }
// obj2.getName()
// obj2.getAddress()
// console.log(obj2.occupation)

//========== another axample ========
var objNew = { name: 'akshay' }
//console.log(objNew.name)

function sayHello () {
  return  'Hello ' + this.name1
}

//console.log(sayHello.call(objNew));
console.log(sayHello.call({name1: "John"})) //.bind()

var person = {
  age: 23,
  getAge: function () {
    return this.age
  }
}
var person2 = { age: 54 };
// console.log(person.getAge.call(person2))

// function saySomething(message, sign) {
//    return this.name + " is " + message + sign;
// }
// var person4 = { name: "John" };
// console.log(saySomething.apply(person4, ["awesome", "!"]));

// let obj = {
//   name1: 'vivek',
//   getName: function () {
//     console.log(this.name1)
//   }
// }

// let getName = obj.getName
