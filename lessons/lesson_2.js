// ===== длина строки, индекс буквы

const { stringify } = require( "mocha/lib/utils" )

let phrase = 'Hello world!' //1-12
let space = '.'

phrase.length
// console.log(phrase, phrase.length)
// console.log(space, space.length)

//  index:
//"Hello" 0-4
// 01234

// console.log(phrase[4])
// console.log(phrase[0])

//==== String formatting
//string.toLowerCase()
//string.toUpperCase()

// console.log(phrase.toLowerCase())
// console.log(phrase.toUpperCase())





// ============= data type - NUMBER ======
// Числовой тип данных (number) представляет как целочисленные значения - int,
//  так и числа с плавающей точкой - float, double
// NaN
// Infinity

// =====  Math operators: + -  *  /  **  % =====

// let a = 8
// let b = 3
// console.log(`a is ${a}`)
// console.log(`b is ${b}`)

//===== addition (+)
//let c = a + b
//console.log(c)

//====== change a sign, substraction (-)
let mySub = 12 - 6
let num = 9 * -1
//console.log(mySub, num)

//===== multiplication (*)
let myMultiply = 2 * 6
//console.log(myMultiply)

//===== division (/)
let myDivision = 8/3
//  console.log(myDivision)
// console.log(typeof myDivision)

//===== (**) exponentiation , возведение в степень
// let c = 2 ** 3
// console.log(c);  //2*2*2 = 2^3

//===== modulus, remainder of division (even, odd numbers) (%)
let remainder = 8 % 3  // 8 % 3 = 2    => 8-3 = 5; 5-3= 2  , 2 //1+1
// console.log(`remainder is ${remainder}`)

//==== %  часто используется для определения четное- even / нечетное -odd
let f = 15
// console.log(f / 2 )
// console.log(f % 2)

//==== priority
// console.log(5 - 7 + 2) //0
// console.log(5 - (7 + 2)) //-4


//==== increment and decrement (--, ++)
// num++  in general =>  num = num +1 or num += 1
let myNum = 10
//++myNum 
// console.log('number is ' + myNum++)
// console.log(myNum)
--myNum
// console.log('decrement '+ myNum--)
// console.log(myNum)
// ++myNum
// console.log("increment" + myNum)

// ----   NaN    ->   Not a Number
// NaN означает вычислительную ошибку. Это результат неправильной или
// неопределённой математической операции

let str7 = "abc"
let dif = 5 - str7
// console.log(dif)
// console.log(typeof NaN)

// ---- Infinity   ->   результат деления на 0
//console.log(5 / 0)
//console.log(typeof(5 / 0))

// The isFinite() method returns true if a value is a finite (not infinite) number.
// Infinite (not finite) values are Infinity, -Infinity, or NaN

// let inf = 5 / 1
// console.log(isFinite(inf))






// ============= data type - boolean ======
// boolean может принимать только два значения: true (истина) и false (ложь).
// Булевые значения также могут быть результатом сравнений

let bool = true
let bool2 = false
// console.log(bool, bool2)
// console.log(typeof bool)

// ======  Операторы сравнения ===
//comparison operators: ==   ===  !=  !==   >  <   >=  <=
// let a = 5
// let b = 3

// bool = (a == 5)
// console.log("not strict: " + bool)

// bool = (a == '5')
// console.log("not strict: " + bool)

// bool = (a === 5)
// console.log("strict: " + bool)

// bool = (a === "5")
// console.log("strict: " + bool)

// let a = "5";//string
 //let b = -10;
// let c = "c";
// let C = "C"
// let d = "0";

// console.log(a)
// console.log(a == 5);  // true
// console.log(a === 5); // false
// console.log(b)
// console.log(b != "-10");  // false
// console.log(b !== "-10"); // true
// console.log(c == "C")
// console.log(c === "c")

// рекомендуется использовать === и !==
// let a = 3
// let d = 7
// console.log(a > 0);
// console.log(b > 0);
// console.log(d >= 0);    // false
// console.log(d <= 0);   //  true
//-(8)



//=======   Logical operators: &&, ||, ! ===================
// || (ИЛИ)       && (И)       ! (НЕ)
// Приоритет оператора И && больше, чем ИЛИ ||, поэтому он выполняется раньше.

let massaKg = 70;
// console.log(massaKg > 50 || massaKg > 90);  // true || false
// console.log(massaKg < 50 || massaKg > 60);  // false || true
// console.log(massaKg < 50 || massaKg < 60)  // false || false

// console.log( true || true );   //  true
// console.log( false && true );  //  false
// console.log( true && false );  //  false
// console.log( false && false ); //  false

// console.log(massaKg > 50 && massaKg < 90);  // true

// console.log(!true);   // false
// console.log(!false);  //  true
//  console.log(!(massaKg > 50)); // false





// ============= Cnahging data types ====

// --- в string:   '' + num; String(num);
// --- в number:  +str ; Number(str)

//let k = '345'
// console.log(typeof +k)
// console.log(typeof k)
// let strToNumber = Number(k)
// console.log(strToNumber, typeof strToNumber)

// let str8 = "8"
// let summa = 4 + str8 
// console.log(summa, typeof summa)

// let c = 9
// console.log(c, typeof c)
// let newVar = String(c)
// console.log(newVar, typeof newVar)




//=========== Another data types =============
// undefined (variable with no value),   null (object),
// let someVar
// console.log(someVar)

// let myNum2 = null
// console.log(myNum2)
// console.log(typeof myNum2)






//=====  Conditional statement if and flowcharts (see presentation)
/**
 * if(condition) {
 *    operation
 * }
 * else{
 *    operation
 * }
 */
// example 1:
// let a = 10
// let c = 30
// let result

// if(a > c){
//   console.log('a = ' + a, 'c = ' + c)
//   result = "a is bigger"
 
// }
// else{
//   console.log('a = ' + a, 'c = ' + c)
//   result = "a is smaller"
  
// }
// console.log(result)

//example 2:
// let login = 'MyLogin'
// let pass = 12345

// //fix code to correct
// if (login == 'MyLogin' && pass == 12345) {
//   console.log('click Submit')
// } 
// // if (pass == 12345) {  
// //   console.log('Click Submit')
// // } 
// else {
//   console.log('Invalid credentials')
// }





// //example 3:
let a = 5
let b = 4
let operator = '*'
let result
if (operator == '*') {
  result = a * b
  console.log('Your result is: ' + result)
}
