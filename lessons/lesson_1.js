// ============= JavaScript ===========

//https://learn.javascript.ru
// https://learn.javascript.ru/variables

// ==== Variables  Переменные ===========



 //console.log("Hello World!");

// var
// let
//const PI = 3.14;
// PI = 7;



// ====== Names of variables =======

// Обязательные правила:
// 1.  Имя переменной должно содержать только буквы, цифры или символы $ и _. 
// 2.  Первый символ не должен быть цифрой. 
// 3.  Нельзя использовать зарезервированные слова (let, var...)key words
// 4.  No keywords
// Необязательные правила, но общепринятые:
// Значимое имя
// camelCase : userFirstName
//  english alphabet

// === Присваивание переменной значения, переприсваивание.
///document.write('Make a cold turkey sandwich' )
// console.log('Hello world!2')

var bread 
let turkey, cheese

//console.log(bread)

bread = 'white bread'
//console.log(bread)
bread = " black bread"
//console.log(bread)
//bread = PI

//console.log(bread)


 



// =========== Типы данных =======
//data types: number, string, boolean (false, true), null, undefiened, object, BigInt

// string '' `` "2" 
// number  // integer, float 2.4
// boolean //true false
// null     - object
// undefined
// bigint 
// symbol
// object   - later

let a = 'string', b, c

//console.log(a )
  a = 9
//console.log(a)




 let first = 9;
 let second = 'ok';
 //console.log(first);
 //console.log(second);
 let result = first / second
 //console.log(first / second)
//console.log(first + second)


 //typeof(variable)

let num = 1.234;
let str = "hello";
//  console.log(typeof(num), num);
//  console.log(typeof str, str);
// console.log(result , typeof result);
// console.log(num);









// ============= string ======
// string не разделяет отдельные символы и слова
// Строка (string) в JavaScript должна быть заключена в кавычки.

let str2 = " Anna"
let str3 = '!'
let str4 = `hij` //tilda

// console.log(str2 + str3, str4)

//  === string concatenation, + 

let concat = str2 + str3 + str4
let concat2 = str2 + "   " + str3 + "   " + str4;

/*
 console.log(concat)
 console.log(concat2)
*/

let name1 = 'Liza';
//console.log(1 , 'My name is ' + name1)

// `${name}` insert variable in a string

//console.log(2, `My name is ${name1}`)


//Concatination:  + or ,

let slice_Of_Bread = 'slice of bread'
//console.log( slice_Of_Bread)

let topping1 = 'turkey'
let topping2 = `cheese`
let sandwich = 'Cold turkey sandwich'

let step1 = `1. Take a slice of ${bread}`

console.log(step1 + ' ', '\n', topping1, topping2,  '\n', sandwich)





//Дошла до этого места!!!





// ===== длина строки, индекс буквы


// let phrase = "Hello world!";//1-12
// let space = '.';

// //phrase.length
///console.log(phrase.length)
///console.log(space.length,)
// console.log(phrase.length);
// console.log(space.length);

// // // index:    
// // "Hellow world!" 0-11
// //  0123 ... 11

///console.log(phrase[11]')
///console.log(space[0])
// console.log(phrase[7]);
//console.log(phrase[0]);


// // string.toLowerCase();
 //console.log(phrase.toLowerCase());
// // string.toUpperCase();
 //console.log(phrase.toUpperCase());



// ============= number ======
// Числовой тип данных (number) представляет как целочисленные значения - int,
//  так и числа с плавающей точкой - float.


// + -  *  /  **  %

// let a = 8;    // 8 % 3 = 3
// let b = 3;
// let c = a ** b;

// // console.log(c);  //2*2*2 = 2^3
// let d = a % b;    // 5 / 7 = 0,  ostatok 5 
// let e = b % a;   // 7 / 5 = 1,  ostatok 2

// let remainder = a % b
// let division = a / b  //4 / 3 =

///console.log (`a is ${a}`,  '<br>' )
///console.log(`b is ${b}`,'<br>')
///console.log(`remainder is ${remainder}`, '<br>')
///console.log(`division is ${division}`, '<br>')
// console.log(d, e);

//   %  часто используется для определения четное / нечетное

// console.log(a % 2);
// let f = 16;
// console.log(f % 2); 

// console.log(5 - 7 + 2);
// console.log(5 - (7 + 2));

// console.log(a / 0);
// console.log(typeof(a / 0));

// ++  -- 

// ++a;
// console.log(a);

// b--;
// console.log(b);









// ----   NaN    ->   Not a Number
// NaN означает вычислительную ошибку. Это результат неправильной или 
// неопределённой математической операции

// let str7 = "abc";
// let dif = a - str7
// console.log(dif);

// console.log(typeof NaN);










// ============= boolean =====

// let bool = true;
// let bool2 = false;

// console.log(bool, bool2);
// console.log(typeof bool);










// ======  операторы сравнения ===
//comparison operators
// ==   ===  !=  !==   >  <   >=  <=  

// bool = (a === 5)
// console.log(bool);

// bool = (a === "5")
// console.log(bool);










// ============= Поменять тип данных ==
//cnahging data type

// --- в string:   '' + num; String(num);

// --- в number:  +str ; Number(str)

// let k = "345";
// console.log(+k);



// let str8 = "8";
// let summa = a ** str8
// console.log(summa);
//let c = 9
//console.log(typeof c) 
//var a = 5
//console.log(a)
// let a = 10
// if(a > c){
//   console.log(a)
//   a = "a is bigger"
//   console.log(a)
// }
// else{
//   console.log(a)
//   let a = "a is smaller"
//   console.log(a)
// }
// console.log(a)
