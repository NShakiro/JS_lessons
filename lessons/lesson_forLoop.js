//==========================================================================
// loops (for, for in, for of, while, do...while)
//==========================================================================

// =====================  for loop

/*  for (initialization; condition; step(increment/decrement)) {
     ... loop body ...
    }
    for (начало; условие; шаг) {
    ... тело цикла ...
    }
*/

// for (let i = 0; i < 3; i++) {
//   console.log(i);

// }

// for (let i = 0; i <= 3  ; i++) {  
//   console.log(i);
  
// }

/* начало let i = 0 	Выполняется один раз при входе в цикл
*  условие	i < 3	 Проверяется перед каждой итерацией цикла. 
*                    Если оно вычислится в false, цикл остановится.
*                    тело	console.log(i)	Выполняется снова и снова, пока 
*                    условие вычисляется в true.
*  шаг	 i++	     Выполняется после тела цикла на каждой итерации
*                    перед проверкой условия. 
*/             

// ------------ repeat string

// let str1 = "+/ "; // repeat 7
// let newStr = "";
// let i
// for (i = 0; i < 7; i++) { //  0 1 2 3 4 5 6
//    // newStr = newStr + str1;
//    // console.log(str1 + i);
// }
// console.log(str1 + i);




// ------------ find sum

let sum = 0;
 for (let i = 1; i <= 10; i++) { // 1 sum = 1: i=2 sum = 3; i = 3 sum = 6
  sum += i;  // 1+2+3+4+5+6+7+8
  
} 
//console.log(sum); 
//  0 + 1 = sum 1          //1
//  sum 1 + (i 2) = sum 3  //2
//  sum 3 + (i 3) = sum 6  //3
//  6 + 4 = 10  //4


// ------------ exponentiate

// let num = 5;  //  ^3
// let result = 1 ;
// for (let i = 1 ; i <= 3; i++) {    // i = 1.  result = 1 * 5 = 5
//     result = result * num; 
//     console.log(result);           // i = 2.  result = 5 * 5 = 25
// }                                  // i = 3   result = 25 * 5 = 125
//console.log(result);

let str3 = "Hello!" //  ^3
let result 
for (let i = 1; i <= str3.length; i+=2) {    //str3.length = 6
    result  = i
    console.log(result);           // i = 1 <1>;i = 3 <3>;i = 5 <5>; i = 7
}     

// ------------ change string

//  Tasks: 1. print to the console all letters of the word in turn
//         2. print the word with spaces between letters

let str = "Jv Script"; // letter of first index: str[0]
// letter of last index: str[str.length - 1]

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// let newS = "";
// let a = 0
// for (let i = 0; i < str.length; i++) {
  
//   newS = newS + str[i]+ " ";
//   if (str[i] == "a"){
     
//     a++
//   }
  
// }
// if ( a > 0){
//   console.log("a is in array")
// } else console.log("a is not in array")
// console.log(a)
// console.log(newS);

// let newS = "";
// for (let i = 0; i < str.length; i++) {
//   newS = newS + " " + str[i] ;
// }



// let x = [1, 2, 3, 4, 5];

//   let str2 = '' ;
//   for(let i = x.length - 1; i >= 0; i--){  // i = i - 1
//     str2 = str2 + x[i];    //  str += x[i];
//     console.log(str2);
//   }
// console.log(typeof str2);



//======== for in
// The JavaScript for in statement loops through the properties of an Object
// The JavaScript for in statement can also loop over the properties of an Array
// Do not use for in over an Array if the index order is important.

//Syntax:

//   for (variable in iterable) {
//      code block to be executed
//   }
// ===========================================================
// for (variable in array) {
//      code
//  }

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//     txt += numbers[x] + ", " ;
//     console.log(txt)                  //сам делает инкремент х
// }


// =========for of 
// The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, 
// NodeLists, and more

//Syntax:

//   for (variable of iterable) {
//      code block to be executed
//   }

//==========================================
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let variable of cars) {
    text += variable + " ";
    
}

console.log(text)






//===================== break;  continue 

// Директива break ==> полностью прекращает выполнение цикла

// continue ==> прерывает текущую итерацию циклов и 
// продолжает выполнение цикла со следующей итерации

// for (let i = 0; i <= 10; i++) {
//   if ( i === 7 ) break;
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if ( i % 2 == 0) continue;
//   console.log(i);
// }

// for (let i = 1; i <= 10; i = i + 2) { 
//   console.log(i);
// }

