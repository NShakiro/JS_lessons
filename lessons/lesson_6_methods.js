// --- compare arrays with strings

//can change
let array = ['a', 'b', 'c', 'd', 'e']
let string = 'abcde'

//console.log(array)
//console.log(string)

// //element
//console.log(string[2])
//console.log(array[2])

// string[2] = 'l' // cann't change the element
// console.log(string)

// array[2] = 'M'    //can change
// console.log(array)

// =========String methods :  split();  ========

//=== split(); делит строку по указанному разделителю, возвращает массив, но не меняет исходный
// split("");  => возвращает массив _всех_ символов

// let string2 = 'Hello World: QA JS !'
// console.log(string2)

// // console.log(string2.split(`Q`));    //each char
// // console.log(string2)
// let arrayFromStr = string2.split(' ') // each word
// console.log(arrayFromStr)

//let newArrayFromString = string2.split("")
// console.log(newArrayFromString);


// === Array method ==> join(); конвертирует массив в строку, по умолчанию
// разделяет символы запятой , but do not changeit

array = ['a', 'b', 'c', 1, 2, 3];
//console.log(array);

// console.log(array.join());
// console.log(array);

// let newStringFromArray = array.join("")
// console.log(newStringFromArray)



// ========== Методы arrays: pop/push, shift/unshift ======

// push  ->  добавляет элемент(ы) в конец.
// pop ->  удаляет последний элемент (и возвращает этот элемент!)

let letters = ['a', 'b', 'c', 'd', 'e']
 //console.log(letters);
// letters.push('f', 's');
//  letters.push( 1, 5)
//    letters.push(true)
// let c = letters.push();  //push() returns quantity of elements
// console.log(letters);
// console.log(c);

//let lastDeleted = letters.pop() // pop() returns deleted element
// console.log(letters)
// console.log(letters.pop());
// console.log(lastDeleted);
// console.log(letters)


// unshift -> Добавляет элемент(ы) в начало массива
// shift удаляет элемент в начале, сдвигая очередь, так
// что второй элемент становится первым (и возвращает этот элемент!)

//let bigLetter = ['A', 'B', 'C', 'D', 'E'];

// bigLetter.unshift('Z');
// let d = bigLetter.unshift([1,2, 3], 'Y','88', "KH");   //return quantity of elements
// console.log(bigLetter);
// // console.log(d)

// bigLetter.shift();
// let lastDeletedFromBeginning = bigLetter.shift();
// console.log(bigLetter);
// console.log(lastDeletedFromBeginning)




// ------- объединение массивов
// concatenation - не используется!
// use .concat() method or...

letters = ['a', 'b', 'c', 'd', 'e']
let bigLetters = ['A', 'B', 'C', 'D', 'E']
let v = letters + bigLetters
//console.log(letters + " " + bigLetters);   // строка!!!
// console.log(v)

//======= concat()
// let girls = ['Cecilie', 'Lone']
// let boys = ['Emil', 'Tobias', 'Linus']
// let freinds = ['Olya', 'Oleg']
// let myChildren = girls.concat(boys)

// console.log(girls)
// console.log(myChildren)

//============ push() + spread operator ...

//arr1.push(...arr2);   // (...arr2) ==> ('a', 'b', 'c')
//console.log(arr1);

//через третий массив
// let arr1 = [5, 6, 7]
// let arr2 = ['A', 'B']
// // let arr = []
// // let w = 'K'
// let str9 = 'hello'
// let str10 = 'OK'
// //console.log(...arr1)
// const arr3 = [...arr1] //[...arr1, ...arr2];
// const arr4 = [1, 2, 3, 'a', 'b', 'c']
// arr1.push(...arr2)

// console.log(arr3)
// console.log(arr1);

// ======== spread operator (...)

const numbers = [4, 8, 99, 9, 7, 777, 5]
// console.log(numbers);
// console.log(...numbers);

//  console.log(Math.max(4, 8, 99, 9));

// console.log(Math.max(numbers));
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers))

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
//Slice out a portion of a string from position 7(included) to position 9(9 not included)

// let str = 'Apple__Banana_Kiwi'
//          //01234567
// let part = str.slice(7, 9)
// console.log(part, "=", str)

//=== replace()
//The replace() method replaces a specified value with another value in a string:

// let message = "Please visit Microsoft!";
// console.log(message)
// let newText = message.replace(/microsoft/i, "Apple");//;/microsoft/i

// console.log(newText, message)

// == charAt() .at(-1) accepts negative index
//Get the first character in a string:
let arr = [1,3,6] //arr.at(-1)

// let text = "HELLO WORLD";
// let letter = text.charAt(-1);
// console.log(letter, '==>', text.at(-1))

//== repeat()
//Create copies of a text:
// let q = 'Helo!' //012
// console.log(q.slice(1,3).repeat(4))

//Create copies of a text:

// let text = "Hello world!";
// let result = text.repeat(2);
// console.log(result)

// == trim()
//Remove spaces with trim():

// let text = "   Hello World!   ";
// let result = text.trim();
// //console.log(text.toUpperCase())
// console.log(text)
// console.log(result)


//====== delete operator
let fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[1];
console.log(fruits)


//====== String(num)
// converts to string
// console.log(String(7));                    
// let num = String(7)
// let num2 = 5
// console.log(num + num2)





// //----------- ==; === -------- compare arrays

// let arr = [1, 2];
// let arr1 = ["a", "b"]

// console.log(arr == arr1);
// console.log(arr > arr1);
// console.log(arr < arr1);

// const a = [1, 2, 3];
const b = [1, 2, 3]

// const a1 = [1, 2, 7];
// const b1 = [1, 2, 6];
// let a2 = a1.join()
// let b2 = b1.join()

// console.log(JSON.stringify(a1) == JSON.stringify(b1)) // compare string
//  console.log(JSON.stringify(a1))
// console.log(b.toString() === a.toString());
// let z = b.toString()
//let x = JSON.stringify(b)

//console.log(x.length)
// =========================

//let arr = [1, 2, 3];
let emptyArr = []
// emptyArr.push(1, 5, 7)
// emptyArr.push(1, 3, 5, "f")
// emptyArr[0] = "A"
// console.log(emptyArr)
// let str2 =
// console.log(String(arr), " /", String(emptyArr) );
// console.log(Number(...arr), Number(emptyArr));
// console.log(Boolean(arr), Boolean(emptyArr));

