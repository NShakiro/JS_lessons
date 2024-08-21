// const prompt = require('prompt-sync')();  //for terminal
// const name = prompt("What's your name?");
// console.log(`Hi there ${name}`);
// const readline = require('readline').createInterface({
//    input: process.stdin,
//    output: process.stdout
// });


//import * as readline from 'node:readline/promises';
// readline.question('Who are you?', name => {
//    console.log(`Hey there ${name}!`);
//    readline.close();
// });
// const input = prompt("What's your name?"); //optional params
// console.log(input);
// const readline = require("readline");
// let rl =""
// rl.question("What is your name? ", function (answer) {
//    console.log(`Oh, so your name is ${answer}`);
// });
// const prompt = require('prompt-sync')();  //for terminal
// const name = prompt("What's your name?");
// let input = readline()
// console.log(input)

// const readline = require('readline').createInterface({
//    input: process.stdin,
//    output: process.stdout
// });

// readline.question('Who are you?', name => {
//    console.log(`Hey there ${name}!`);
//    readline.close();
// });
// const readline = require('readline')

// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
// })

// rl.question('What is your name?', nameAnswer => {
//    console.log(`Nice to meet you, ${nameAnswer}.`)
// })

// for(let i = 1; i< 6; i++){

//    console.log(i)//вывели каждую цифру на новой строке
// }
// n = [1,2,3,4,5]
// let newString = n.toString()
// let newArr = newString.split()
// let newArr2 = []

//    let a = newArr.pop()
//    console.log(a)
//    newArr2.push(a)
//   // console.log(newArr2)
//  //  return newArr2

//try:
// let s = [12,55,78]
// function numObj(s) {
//    let str = s.toString()
//    let arr = []
//    for (let el in s) {
//       let obj = {}
//       obj[el] = str.charCodeAt(el)
//       arr.push(obj)
//    }
//    return arr
// }
// console.log(numObj(s))
// ///the right one:
// function numObj(s) {
//    let str = s.toString()
//    let arr = []
//    for (let el in s) {
//       let obj = {}
//       obj[s[el]] = String.fromCharCode(s[el])
//       arr.push(obj)
//    }
//    return arr
// }

//reverse number 345-> 543 or -123 -> -321

// function reverseNum(num){
//    let str = "" + Math.abc(num)
//    return Math.sign(num)* (str.split('').reverse().join())
// }//                          array        reverse  string

// modules.exports = reverseNum()
// console.log(reverseNum(-76))

// // simple object with some properties
// const coder = {
//    isStudying: false,
//    printIntroduction: function () {
//       console.log(`My name is ${this.name}. Am studying?: ${this.isStudying}.`)
//    }
// }
// // Object.create() method
// const me = Object.create(coder);

// // "name" is a property set on "me", but not on "coder"
// me.name = 'Mukul';

// Inherited properties can be overwritten
// me.isStudying = true;

// me.printIntroduction();
//==============Feb 2023

// const prompt = require('prompt-sync')({ sigint: true });


// const name = prompt('What is your name?', "I");
// console.log(`Hey there ${name}`);



//======================= This is works on feb 2023
const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question('What is your name1? ', (name) => {
   console.log(`Hello, ${name}!`);
   rl.close();
});
