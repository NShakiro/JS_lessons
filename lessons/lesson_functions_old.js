
// ============= Functions =================================
// https://learn.javascript.ru/function-basics

// console.log("Hello World!");
//alert("Hello!");

// ============ Option 1:  function declaration ====

// function name(param1, param2...) {
//    statements
// return expression;
// }

// ============ Option 2:  function expression ====

// let name = function(param1, ...) {
//      statements
// return expression;
// };

// ============ Option 3: arrow functions ======

// let name = (arg1, arg2, ...) => expression;

//  ==========================================================
//  =================== function declaration

//1. Слово function,
//2. Имя функции
//3. Список парометров в круглых скобках через запятую
//4. Код функции («тело функции»), внутри фигурных скобок.
//Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
//Function Invocation
//The code inside the function will execute when "something"  invokes(calls) the function:

//  When an event occurs(when a user clicks a button)
//  When it is invoked(called) from JavaScript code
//  Automatically(self invoked)

//print("Hi");
// function sum(a, b) {
//     let result = a + b
//    return print(result)
  
// }
// function sum(a, b) {
//     return a + b
//sum(1, 4)
// }
// let result = sum(1, 3) + 5
// console.log(result)
//console.log(a) /
function print (arg) {
  console.log(arg);
}

// // print([1, 2, 3]);

// // print("abcde");
// // print([1, 2, 3]);
// // print(7);

// // когда код читается, то при такой декларации первыми он будет
// // "искать" функции

// let result
// /a is not defined
// sum(6, 9);
// console.log(sum(-7,1))
// let c = sum(5, 5)
// console.log(result)

// можно помещать функцию в другую функцию


// void function ===>  возвращает undefined  /нет "return", 
// но выполняет вложенные в тело функции действия

// "return" может находиться в любом месте тела функции.
// Как только выполнение доходит до этого места, функция 
// останавливается, и значение возвращается в вызвавший её код

// console.log(a + b);  // a is not defined

// Переменные, объявленные внутри функции, видны только внутри этой функции 
// console.log(a, b);

// Но у функции есть доступ к внешним переменным:

//console.log(showMessage("John"));
//console.log(showMessage("Anna"));

// let name1 = 'Anna';//global
// let greet = "Hi"
// //console.log(name1);

// function showMessage(name1) { //local
//   return name1 ;
  
// }
// console.log(showMessage());

//console.log(showMessage("John"));
//console.log(name1);
// function showHi(){
//     return "Hi"
// }
// function showName(name){
//     return name + "!"
// }
// function showMessage2(){
//     console.log("Hi ")
// }
// let a = 6
// let c = a
// console.log(showMessage2("Olya"))

 

// let name = 'Anna';

// function showMessage() {
//   let name = "Bill";
//   return name = 'Hi ' + name;
// }
// console.log(showMessage());
// console.log(name);

// function sum2(a, b) {  
//     return a + b
    
// }

//  console.log(sum2(9,7))

//  ===================  function expression
// https://learn.javascript.ru/function-expressions

//  в Function Expression ставится точка с запятой ; на конце, 
// а в Function Declaration нет

//  Вы НЕ можете использовать function expression до того, 
// как вы её объявили

//hello("Anna");   // Cannot access 'hello' before initialization

// let hello = function  (name) {
//   console.log("Hi, " + name);
// };

// hello([1, 2, 3]);

// let sum = function(a, b) {
//   return a + b;
// };

// let arr = [];
// arr.push(sum(3, 7));
// console.log(arr);
    


//  ===================  arrow functions
let sum = (a, b) => {
    
    return    `Your numbers are: ${a} , ${b} and sum = ` + (a + b) 
};

console.log(sum(3, 9));
//console.log()

// let toPay = (price, weight) => price * weight;

// console.log(toPay(3.22, 7));

// Если у нас только один аргумент, то круглые скобки
// вокруг параметров можно опустить:

// let double = n => n * 2;
// console.log(double(456));

// let greeting = name => ;


// Если аргументов нет, круглые скобки будут пустыми,
// но они должны присутствовать:


// let hello = () => console.log("Hello!");
// hello();

// если нужна более сложная стрелочная функция, с несколькими выражениями,
// то это также возможно, нужно лишь заключить их в фигурные скобки.
// При этом важно! – в таких скобках для возврата значения нужно
// использовать "return"

// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };
// console.log(sum(4, 6));


//=======================================
//if we do not know the amount of arguments

//  ...args  ==>  «собери оставшиеся параметры и положи их в массив args»
// ==========================

// function showArg(...args) {
//   console.log(args);
  
//   let sum = 0;
//   for(let i = 0; i < args.length; i++){
//     sum += args[i];
//   }
//   console.log(sum);
// }
// showArg(10, 10, 20, 30, 40, 60, 0);  // !== showArg([10, 10, 20, 30, 40]);


// =============================================
//                  Methods
//=========================================================
//Methods: Math.round(), Math.floor(); Math.ceil(); Math.trunc();

//=========================================================
//Math.round() <==== матеиатическое округление

// (function myFunction() {
//   var a = Math.round(0.406);       // 0
//   var b = Math.round(0.909);       // 1
//   var c = Math.round(5.00789);     // 5
//   var d = Math.round(5.412345);    // 5
//   var e = Math.round(-5.10234);    // -5
//   var f = Math.round('');          // 0
//   console.log(a, b, c, d, e, f);
// })();

// let c = Math.round(5.789 * 10) / 10;
// console.log(c);

//=========================================================
//Math.floor() <==== округляет вниз ("к полу") в меньшую сторону
//Round a number downward to its nearest integer

// (function myFunction() {
//   var a = Math.floor(0.406);      //
//   var b = Math.floor(0.909);      //
//   var c = Math.floor(5.00789);    // 5
//   var d = Math.floor(5.412345);   //  5
//   var e = Math.floor(-5.10234);   //  -6
//   var f = Math.floor(-5.99999);   //  -6
//   console.log(a, b, c, d, e, f);
// })();

function printMyArray(a ) {
  //let newStr1
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]) //newStr1 += a[i] + '*' 
  }
  // console.log(newStr1)
}
let b = [5, 8, 9]
 printMyArray(b)
// printMyArray.apply({}, [7, 7, 7])

// function printMyArray(a ) {
//   let newStr1 = a[0]+10
  
//   return console.log(newStr1)
// }
// printMyArray([5, 8, 9])
