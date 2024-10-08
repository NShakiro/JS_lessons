/**
 * 1.
 * Внедрите в свой код с Кофе, как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.
   show coffeeFunction
 */
/**
 * 2. Напишите функцию с калькулятором (используйте предыдущий код), в которую, в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.
example:  function calculate(a, b, operator){}

 */
function sum(a, b) {
   return a + b
}
function substract(a, b) {
   return a - b
}
function multiply(a, b) {
   return a * b
}
function divide(a, b) {
   if ( b == 0) {
      return "Division by 0 is not allowed! Enter another number"
   }
   else return a / b
}

function calc(a, b, sign){
   let result = 0
   if(isNaN(a) || isNaN(b)) result = "Please, enter a number!"
   else{
      if (sign == "+") result = sum(a, b)
      else if (sign == "-") result = substract(a, b)
      else if (sign == "*") result = multiply(a, b)
      else if (sign == "/") result = divide(a, b)
      else result = 'Please, enter the right sign!'
   }
   return result
}

//console.log(calc(8, 6, "*"))

/**
 *3. Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, которое вы передаете в функцию.look coffeeFunction

 */
// this function will greet customer
//name- to enter the customer's name
function greetCustomer(name) {
   let greetings = `Hi, ${name}! \nWelcome to our self-coffee!\n`
   console.log(greetings)
}
greetCustomer("Anna")