//1. Show how Cypress works
//2. Work with nested if

//3. Nested if (look snail)


let login = true
let course1 = 'js'
let course2 = 'java'
let course = course2
let region = 'Russia'

// if(login == true){

//   if(course == course1){
//     console.log('Welcome!')

//     if(region != 'USA') console.log('Wake up early!')
//   }
//   else console.log('Go to Java')
// }
// else{
//    console.log('Login is not correct')
// }








//4. ================ SWITCH  =============================
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

let day = 3;
switch (day) {
   case '3' :
      console.log("Tuesday");
      console.log("Ok")
      if(1<8){}
      break;
    case 3 :
      console.log("Wednesday"); 
      console.log("Ok");
      break;
    case 'Hi':
      console.log("Thursday");
      break; 
    case 5:
      console.log("Friday");
     
    default:
      console.log("Another day");
}

// let num = 11;
// switch (num) {
//     case 1:
//          console.log("Two");
//     case 2:
//          console.log("Two<br>");
//     case 3:
//         console.log("Three<br>");
//     case 4:
//         console.log("Four<br>")
//         break
//     case 5:
//          console.log("Five<br>");
//     case 6:
//          console.log("Six<br>");
//     case 7:
//          console.log("Seven<br>");
//     case 8:
//          console.log("Eight<br>");
//     case 9:
//          console.log("Nine<br>");
//     case 10:
//          console.log("Ten<br>");
     
//     default:
//          console.log("Unknown");
// }

// console.log('Hi')




// ===== STRING длина строки, индекс буквы ===========================


let phrase = "Hello wOrld!";//1-12
//            1234-     12
let space = '';

//phrase.length

// console.log(phrase.length);
//console.log(typeof space);

 // index:
// "Hellow world!" 0-11
//  0123 ... 11

// console.log(phrase[11])
// console.log(space[0])
// console.log(phrase[7]);
// console.log(phrase[0]);


// string.toLowerCase();
// console.log(phrase.toLowerCase());
// string.toUpperCase();
// console.log(phrase.toUpperCase());



// =============== Arrays ===========

// массив - упорядоченная коллекция данных
// JavaScript arrays are resizable object and can contain a mix
// of different data types.

// ------ объявление массива
//const myArr = [];

const arr = new Array();

//let arr = [];
//console.log(arr)

const arr1 = ['a', 'b', 'f'];
//console.log(arr1);

let arr2 = ['ok', "pine", "oak", "aspen"];
//console.log(arr2);

const arr3 = [1, 2, 3, 4];   // пустой массив
//console.log(arr3);

let five = 5;   //variables
let six = 6;
let seven = "seven"

 //const diffTypes = [null, "One", 2, true, undefined, five,seven, [1,2,3], arr3] ;
// console.log(diffTypes);

// ------- обращение к массивам

// arr[index];    // индексы начинаются с 0
// arr.length;
// arr[arr.length - 1];  // принимает ноль и положительные индексы
// arr.at(index)       // принимает отрицательные индексы!

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
//indexes:        0    1    2    3    4    5    6
//  or:                 . . .        -3   -2   -1
letters = ['a', 'b', 'c', 'd', 'e', 'f', 8]
console.log(letters); //количество элементов = всего
 console.log(letters[5]);
 console.log(letters[letters.length - 1]);// 7 -1 = 6
 console.log(letters.at(-3));

// --- обращение к не существующему элементу в массиве

console.log(letters[10]);
console.log(letters.at(-10));


  



//====================== FOR LOOP  ===========================
/**
 * for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
 for (i = 1; i < 5; i++) {
  // code block to be executed
}

 */














//console.log("Hello QA!")
//sifer
// let text = "You are the best QA ever"
// let newText = ''
// let count = 0
// for (let i = 0; i < text.length; i++) {

//    if (count % 2 == 0) {
//       newText = newText + text[i] + "br"
//    }

//    count += 2
// }

// console.log(newText)

// let text2 = ''
// for (let i = 0; i < newText.length; i += 3) {

//    text2 = text2 + newText[i]

// }
// console.log(text2)