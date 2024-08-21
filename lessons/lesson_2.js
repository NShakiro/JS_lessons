//======math operators 
// * , /, %, -, +, ++, --


//====== addition(+)

// let mySum = 2 + 6
// document.write(mySum, "<br>")

//====== change a sign, substraction (-)

// let mySub = 12 - 6
// let num = 9 *(-1)
// document.write(mySub, "<br>", num)

//===== multiplication (*)

// let myMultiply = 2 * 6
// document.write(myMultiply, "<br>")

//===== division (/)

//  let myDivision = 24 / 4
//  document.write(myDivision, "<br>")
// console.log(typeof myDivision)

//===== modulus, remainder of division (even, odd numbers) (%)

// let myModulus = 7 % 2 //(7 / 2 = 3  (1))
//  //even, odd
// document.write(myModulus, "<br>")
// console.log(myModulus)

//===== increment and decrement (--, ++)

//  let myVariable = 10
// // //document.write(myVariable, "<br>")
//  --myVariable
//  document.write(myVariable, "<br>")//after
// document.write(myVariable, "<br>")
// ++ myVariable 
// document.write(myVariable, "<br>")


//===== (**) exponentiation

// let myNum = 2 ** 4
// document.write(myNum, "<br>")



// ============= type number ======
//int, double
// ----   NaN    ->   Not a Number
//NaN  означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции
//Infinity
// let a
// let myDivision = 24 / a
//  document.write( myDivision, "<br>")

//======Another data types 
// undefined (variable with no value), boolean(true, false), array, null (object), 

// let myNum = null
// document.write(myNum, "<br>")
// console.log(typeof myNum)

// ====== boolean 
// boolean может принимать только два значения: true (истина)
// и false (ложь).
// Булевые значения также могут быть результатом сравнений

// let bool1 = true; //false
// let bool2 = (5 < 9);  // true
// document.write(bool1, "<br> ", bool2)


// ===== string concatenation ,  +  ${}
//assign value to a variable

// let firstName = "Anna"
// let lastName = "Karenina"
// let fullName = firstName + lastName
// let fullName2 = firstName + " " + lastName

// console.log(fullName2)
// document.write(firstName, " "+ lastName)

// let name = 'Liza'
// //document.write('My name is ' + name)

// //`${name}`
// document.write(`My name is ${name} and I like apple`+ "Anna")




// ===== сравнение переменных 
// comparison operators: ==   ===  !=  !==   >  <   >=  <=  

//let a = "5";//string
//let b = -10;
// let c = "c";
// let C = "C"
// let d = "0";

//console.log(a)
// console.log(a == 5);  // true
// console.log(a === 5); // false
// console.log(b)
// console.log(b != "-10");  // false
// console.log(b !== "-10"); // true
// console.log(c == C);
// console.log(c === "c");

// рекомендуется использовать === и !==
let a = 3
let d = 7
// console.log(a > 0);
// console.log(b > 0);
//console.log(d >= 0);    // false
//console.log(d <= 0);   //  true
//-(8)



//=====   logical operators: &&, ||, !
//|| (ИЛИ)       && (И)       ! (НЕ)

//let massaKg = 70;
//console.log(massaKg > 50 || massaKg > 90);  // true || false
//console.log(massaKg < 50 || massaKg > 60);  // true

// console.log( true && true );   //  true
// console.log( false && true );  //  false
// console.log( true && false );  //  false
// console.log( false && false ); //  false

// console.log(massaKg > 50 && massaKg < 90);  // true

//console.log(!true);   // false
// console.log(!false);  //  true
//  console.log(!(massaKg > 50)); // false

// Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше.




//=====Conditional statement if and flowcharts (see presentation)

// let a = 3
// let b = 5

// if (a > b)
// {
//   document.write("'a' is bigger than 'b'")

// }
// else{
//   document.write("go home")
// }



// if(a > b){
//   document.write(a  “ is bigger than” b)}
// else{
//   document.write(a, “ is less than “, b)}



// let a = 5
// let b = 4
// let sum = a + b
// let operator
// let result
// if (operator == *){
// result = a* b
// document.write(“Your result is: “ + result}