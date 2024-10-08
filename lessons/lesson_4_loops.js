//console.log("Hello QA!")
//sifer
let text = 'You are the best QA ever'
let newText = ''
let count = 0
for (let i = 0; i < text.length; i++) {
  if (count % 2 == 0) {
    newText = newText + text[i] + 'br'
  }

  count += 2
}

console.log(newText)

let text2 = ''
for (let i = 0; i < newText.length; i += 3) {
  text2 = text2 + newText[i]
}
console.log(text2)

// // str.repeat(n)
// console.log(str.repeat(7));
//=============================
// console.log(newS.trim());

// https://www.w3schools.com/jsref/jsref_trim_string.asp
//  ------------ Reverse
//==================================
// x = x.toLowerCase();

// Нельзя использовать break/continue справа от оператора „?“
// let a = 7;
// (a > 5) ? console.log(a) : continue;

//why it's better to declare i inside a for loop

//=====================while loop

//Syntax:

// while (condition) {
// // code block
// }

// let i = 0
// while (i < 3) {
//   console.log(i);
//   i++
// }

// let i = 7
// while (i != 0) {
//   console.log(i);
//    i--
// }

//  const fruits = ['apple', 'pears', 'plums', 'grape']

// let i = 0
// while (i > fruits.length){
//     console.log(fruits[i])
//     i++
// }

// ================= do ... while

// do {
//   // code block
// }
//while (condition);

// let k = 0;
//  do {
//   console.log( k );
//   k++; //k=1
// } while (k < 3)

// if (k < 3) {
//   console.log("if "+ k);
// }
// else console.log('Do something')

//===================== break;  continue

// Директива break ==> полностью прекращает выполнение цикла

// continue ==> прерывает текущую итерацию циклов и
// продолжает выполнение цикла со следующей итерации

// for (let i = 0; i <= 10; i++) {

//   if (i == 7) {
//     break
//   }
//   console.log(i)
// // }
// let fruits = ['apple', 'pears', 'plums', 'grape', 'watermelone']

// for (let i = 0; i < fruits.length; i++) {

//   if (fruits[i] == 'plums') {
//     console.log('haker attack')
//     break
//   }

//   if (fruits[i]=='grape') {
//     continue
//   }
//   console.log(fruits[i]);

// }

// Нельзя использовать break/continue справа от оператора „?“ (тернарный оператор - ternary operator)
// syntax:
// условие ? выражение1 : выражение2

// for (let i = 0; i < 10; i++) {

//   (i < 5) ? console.log(i) : console.log("Hello");
// }
// let a = 7;
// (a < 5) ? console.log(a) : console.log("Hi");

//================== FOR IN =============
/**
 * Iterates over the enumerable property keys of an object,
 *  Includes inherited properties,
 *  and Useful for iterating over object properties.
 */
/**
 * for (key in object) {
  // code block to be executed
}
 */
// const numbers = [45, 4, 9, 16, 25];
// let str = 'Hello'
// let txt = "";
// for (let i = 3; i < str.length; i++) {

//  // txt += numbers[el];
//   console.log(str[i])
// }
// console.log(txt)

// const cars = "BMW, Volvo, Mini";

// let text = "";
// for (let x in cars) {
//  // text += x;
//   console.log(x)
// }

//==================== FOR OF LOOP ===================
/**
 * Iterates over the values of iterable objects (like arrays, strings, maps, sets).
   Does not include keys or inherited properties.
   Useful for iterating over the elements of an array 
   or other iterable data structures.
 */
// const arr = [1, 2, 3]

// for (const value of arr) {
//   console.log(value) // Output: 1, 2, 3
// }



//==================== inner loops ===================

// 1        // line == 1
// 12       // line == 2
// 123      // line == 3
// 1234     // line == 4
// 12345    // line == 5

// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }

// for (let line = 1; line <= 5; line ++) {
//     let str = "";
//   for (let numInLine = 1; numInLine <= line ; numInLine++) {
//     str += numInLine

//   }

//     console.log(str);
// }

// for (let i = 5; i >= 1; i--) { //отвечает за количество строк
//   let str = "";
//   for (let j = i; j >= 1; j--) { //отвечает за наполнение строки

//     str = str + j;
//   }

//   console.log(str);
// }
//  if (i == 2) continue;
//как достать элемент из вложенного массива

//
let arr = [1, ['a', 'b', [5, 4]], 3, 'Herro ok']
// //        0   ________________   2     3
// //                  1
// //                       ______
// //            0    1      2
// //                      0  1
// console.log(typeof arr[3])
// //let str =
arr[1][1] = 'R'
console.log(arr[1][1])

//как проверить пустой массив

// let arr2 = [1, 3]
// console.log(typeof arr2)

// if (arr2.length == 0){
//     console.log("it's empty")
// }

// ============= изменение элемента в массиве

// const trees = ["maple", "pine", "oak", "aspen"];

// console.log(trees);
// trees[1] = "ash";
// console.log(trees);

// trees[5] = "birch";
// console.log(trees, trees.length);
