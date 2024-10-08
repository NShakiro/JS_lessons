// ============= Functions =================================
// https://learn.javascript.ru/function-basics

// console.log("Hello World!");
//alert("Hello!");

// ============ Option 1:  function declaration ====

// function name(param1, param2...) {
//    code block
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
//The code inside the function will execute when "something"
// invokes(calls) the function:

//  When an event occurs(when a user clicks a button)
//  When it is invoked(called) from JavaScript code
//  Automatically(self invoked)

// let result = 1

/**
 * This function calculates devision
 * @param {number} a
 * @param {number} b
 * @param {string} c
 * @returns
 */
// function sum (a = 4, b = 6) {
//   let result = a + b
//   return {
//     result,'ok'}
// }
// //let sum2 = sum(1, 3)

// console.log(sum(1, 4))
//  console.log(sum(4, 7))
// let result2 = sum()
// function sum (a, b, c = '!') {
//   let result = a / b
//   return `${result}${c}`;
//   //return [result, c];
//   //return { result, c }
// }
// console.log(sum(3,5))

// print('abcde')

// function print (atr = 2) {
//   console.log(atr)
// }
//console.log(print('Home'))

// console.log(sum(2, 2))

// let result = sum(1, 3) + 7
// console.log(result)

//print([1, 2, 3])

// print("abcde");
// print([1, 2, 3]);
// print(7);

// // когда код читается, то при такой декларации первыми он будет
// // "искать" функции

//a is not defined
// sum(6, 9);
// console.log(sum(-7,1))
// let c = sum(5, 5)
// console.log(c)

// можно помещать функцию в другую функцию

// void function ===>  возвращает undefined  /нет "return",
// но выполняет вложенные в тело функции действия

// "return" может находиться в любом месте тела функции, но после него ничего не сработает
// Как только выполнение доходит до этого места, функция
// останавливается, и значение возвращается в вызвавший её код

// Переменные, объявленные внутри функции, видны только внутри этой функции = локальные
// console.log(a, b);

// Но у функции есть доступ к внешним переменным:

//console.log(showMessage("John")); //to show the error
// console.log(showMessage("Anna"));

// let name2 = 'Anna'
// let greet = 'Hi'
//console.log(name1);

// function showMessage (name1) {
//   //local

//   return name1 + ', '+  name2
// }
// console.log(showMessage("John"));

//console.log(showMessage("John"));
//console.log(name1);

// function showHi(){
//     return "Hi"
// }

// function showName(name){
//     return name + "!"
// }
// console.log(showName('Peter'))

// function showMessage2(){
//     console.log("Hi ")
// }
// let a = 6
// let c = a
// console.log(showMessage2()) //will show undefiened - no return

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
//console.log(a + b);  // a is not defined

//  в Function Expression ставится точка с запятой ; на конце,
// а в Function Declaration нет

//  Вы НЕ можете использовать function expression до того,
// как вы её объявили

//hello("Anna");   // Cannot access 'hello' before initialization

// let hello = function  (name) {
//   let output = "Hi, " + name
//   return output
// }
// hello('Olya')

// function checkAllElementsVisible () {
//   checkLabel()
//   checkInput()
//   checkButton()
// }
// checkAllElementsVisible()
// let arr = [];
// arr.push('ok');
//arr.push(sum(3, 7))
// console.log(arr);

//===================default value

//  ===================  arrow functions
// let sum = (a, b) => `Your numbers are: ${a}  and sum = ` + (a +b)

// console.log(sum(3, 9));
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

// function login (email, pass) {
//   typeEmail(email)
//   typePass(pass)
//   clickSubmit()
// }
// login(email, pass)

// function show (item) {
//   console.log(item)
// }

// function calc (a, b) {
//   result = a + b
//   return result
// }

// function showResult (num1, num2) {

//   let out = calc(num1, num2)
//   show(out)
//   calc(num1, num2)
// }

// showResult(3, 2)
// function typeEmail (email) {
//   getElement().type(email)
// }

// What is an Immediately Invoked Function in JavaScript?
//An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.
(function() {
  console.log('I am a IIFY')
})()

(() => console.log('Hello!'))()

