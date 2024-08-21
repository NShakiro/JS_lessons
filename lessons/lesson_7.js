
// --- compare with strings

//can change
//  console.log(array);
//  let string = "abcde";
// console.log(string[2]);
 
//  let array =['a', 'b', 'c', 'd', 'e'];
//  console.log(array[2]);

// string[2] = 'l';      // cann't change the element
// console.log(string);

 
//  array[2] = 'M'     /



// =========String methods :  split(); join(); ========

//=== split(); делит строку по указанному разделителю, возвращает массив
// split("");  => возвращает массив _всех_ символов

 let string = "Hello World: QA JS !";
 //console.log(string);

// console.log(string.split(""));//each char
//  console.log(string)
 let stringNew = string.split(":")// each word
// console.log(stringNew);

// let newArrayFromString = string.split("")
// console.log(newArrayFromString);



// === join(); конвертирует массив в строку, по умолчанию
// разделяет символы запятой , but do not changeit
 
// let array = ['a', 'b', 'c', 1, 2, 3];
// console.log(array);

 //console.log(array.join());
 //console.log(array);

 //let newStringFromArray = array.join("")
 //console.log(newStringFromArray)



// ========== Методы arrays: pop/push, shift/unshift ======

// push  ->  добавляет элемент(ы) в конец.
// pop ->  удаляет последний элемент (и возвращает этот элемент!)

let letters = ['a', 'b', 'c', 'd', 'e'];
// console.log(letters);
//  letters.push('f', 's');
//  letters.push( 1, 5)
//  letters.push(88)
// let c = letters.push('g');  //return quantity of elements
//  console.log(letters);
//  console.log(c);



// let a5 = letters.pop();                // returns deleted element 
// let t = []
// letters[1] = "B"
// console.log(letters.join());
// console.log(a5);

// t.push(a5)
// console.log(t)

//a = letters.pop();                       // returns deleted element

//console.log(letters);
//console.log(a);

//t.push(a)
//console.log(t)



// unshift -> Добавляет элемент(ы) в начало массива
// shift удаляет элемент в начале, сдвигая очередь, так
// что второй элемент становится первым (и возвращает этот элемент!)

// const bigLetters = ['A', 'B', 'C', 'D', 'E'];

// bigLetters.unshift('Z');
// let d = bigLetters.unshift([1,2, 3], 'Y','88', "KH");   //return quantity of elements
// console.log(bigLetters);
// console.log(d)

// bigLetters.shift();
// let z = bigLetters.shift();
// console.log(bigLetters);
// console.log(z)


// ------- объединение массивов
// concatenation - не используется!
// use .concat() method or..

letters = ['a', 'b', 'c', 'd', 'e'];
const bigLetters = ['A', 'B', 'C', 'D', 'E'];
let v = letters + " " + bigLetters
//console.log(letters + " " + bigLetters);   // строка!!!
//console.log(typeof v)


//======= concat()
let girls = ["Cecilie", "Lone"];
let boys = ["Emil", "Tobias", "Linus"];
let freinds = ["Olya", 'Oleg']
const myChildren = girls.concat(boys, freinds);

//console.log(girls)
//console.log(myChildren)





//============ push() + spread operator ...

//arr1.push(...arr2);   // (...arr2) ==> ('a', 'b', 'c')
//console.log(arr1);

//через третий массив
let arr1 = [5, 6, 7]
let arr2 = ["A", "B"] 
let arr = []
let w = 'K'

//console.log(...arr1)
const arr3 = [...arr1]//[...arr1, ...arr2];
const arr4 = [1, 2, 3, 'a', 'b', 'c']
//console.log(arr)
//console.log(arr.push(...arr2) );
//console.log(arr)


// ======== spread operator (...)

const numbers = [4, 8, 99, 9, 7, 777, 54];
// console.log(numbers);
// console.log(...numbers);

//  console.log(Math.max(4, 8, 99, 9));

//  console.log(Math.max(numbers));
//  console.log(Math.min(...numbers));
//  console.log(Math.max(...numbers))

// let fruits = ["Banana", "Orange", "Apple", "Mango"]
// console.log(fruits)
// console.log(fruits.toString())
// let f = fruits.toString()
// console.log(typeof f)


//===================String methods===========
// ===.length

// let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// console.log(txt.length)

// === .slice()
//Slice out a portion of a string from position 7 to position 13(13 not included)

let str = "Apple, .Banana, Kiwi";
let part = str.slice(7, 9);
//console.log(part, "=", str)


//=== replace()
//The replace() method replaces a specified value with another value in a string:

let message = "Please 5 visit 5 Microsoft!";
//console.log(message)
let newText = message.replace(/microsoft/i, "Apple");
console.log(newText)



// == charAt()
//Get the first character in a string:

// let text = "HELLO WORLD";
// let letter = text.charAt(0);
// console.log(letter, text[0])



//== repeat()
//Create copies of a text:
let q = "Helo!"  //012
console.log(q.slice(1,3).repeat(4))

//Create copies of a text:

//let text = "Hello world!";
//let result = text.repeat(2);
//console.log(result)


// == trim()
//Remove spaces with trim():

let text = "   Hello World!   .";
let result = text.trim();
//console.log(text.toUpperCase())
console.log(text)
console.log(result)


console.log(String(7));                    // converts to string
let num = String(7)
let num2 = 5
console.log(num + num2)

let fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[1];
console.log(typeof fruits[1])

