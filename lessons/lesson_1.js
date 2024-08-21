// ============= JavaScript ===========

//https://learn.javascript.ru
// https://learn.javascript.ru/variables

// ==== Variables  Переменные ===========


// var
// let
 //const pi = 3.14

// === Присваивание переменной значения, переприсваивание.
// document.write('Make a cold turkey sandwich' ,'<br>')
//console.log('Hello world!2')
let bread 
let topping1 = 'turkey'
let topping2 = `cheese`
let sandwich = 'Cold turkey sandwich'

bread = " black bread"

let step1 = `1. Take a slice of ${bread}`

document.write(step1 + '<br>'+ topping1 +'<br>',  topping2,' ', sandwich + '<br>')

bread = 'gluten free'
document.write(bread)
let slice_Of_Bread = 'slice of bread'
document.write( slice_Of_Bread)







 // let a = 'string', b, c

 // document.write(a ,'<br>')
 // a = 9
 // document.write(a)
 // a = 5

/*
 let first = '3';
 let second = 5;
 console.log(first);
 console.log(second);
 console.log(first / second)
*/
// first = 7;
// console.log(first);

// const PI = 3.14;
// PI = 7;

//data types : number, string, boolean (false, true), null, undefiened, object


// var three = "third";
// console.log(three);



// ====== Names of variables =======

// Обязательные правила:
// 1.  Имя переменной должно содержать только буквы, цифры или символы $ и _. 
// 2.  Первый символ не должен быть цифрой. 
// 3.  Нельзя использовать зарезервированные слова (let, var...)
//  no keywords
// Необязательные правила, но общепринятые:
//    Значимое имя
//    camelCase : userFirstName
//    english alphabet


// =========== Типы данных =======

// string '' `` "2" 
// number  // integer, float 2.4
// boolean //true false
// null     - object
// undefined
// bigint 
// symbol
// object   - later


// typeof(variable)

// let num = 1.234;
// let str = "hello";
//  console.log(typeof(num), num);
//  console.log(typeof str, str);
// console.log(str);
// console.log(num);

// ============= string ======
// string не разделяет отдельные символы и слова
// Строка (string) в JavaScript должна быть заключена в кавычки.

// let str2 = " Anna";
// let str3 = '!';
// let str4 = `hij`; //tilda

//  console.log(str2 + str3, str4);

// // === string concatenation, + 

// let concat = str2 + str3 + str4;
// let concat2 = str2 + "   " + str3 + "   " + str4;

// document.write(concat, '<br>');
// console.log(concat2);

// let name = 'Liza';
// console.log('My name is ' + name);

// `${name}` insert variable in a string

// console.log(`My name is ${name}`);


// ===== длина строки, индекс буквы


// let phrase = "Hello world!";//1-12
// let space = '.';

// //phrase.length
// document.write(phrase.length, '<br>')
// document.write(space.length, '<br>')
// console.log(phrase.length);
// console.log(space.length);

// // // index:    
// // "Hellow world!" 0-11
// //  0123 ... 11

// document.write(phrase[11], '<br>')
// document.write(space[0])
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

// document.write (`a is ${a}`,  '<br>' )
// document.write(`b is ${b}`,'<br>')
// document.write(`remainder is ${remainder}`, '<br>')
// document.write(`division is ${division}`, '<br>')
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