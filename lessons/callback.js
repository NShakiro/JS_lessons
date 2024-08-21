/**
 * 
 *Простое определение: колбэк это функция, которая выполнится после другой функции, завершившей своё выполнение. Следовательно, отсюда и название, ‘call back’.

Определение посложнее: В JavaScript, функции это объекты. Поэтому, функции, могут брать другие функции в виде аргументов и также могут быть возвращены другими функциями. Функции которые так делают, называются функциями высшего порядка. Любая функция, которая передается как аргумент — именуется callback-функцией.
 */

function multiply(a, b) {
   return a * b
}


function divide(a, b) {
   return a / b
}


function showResult(a, b, callback) {
   if (typeof callback === 'function') {
      console.log(callback(a, b))
   }
   else return console.log("Your numbers are " + a + " and " + b)
}

showResult(3, 4, (a, b) => a * b)
showResult(21, 3, multiply)
//showResult(21, 3)

// //not a callback, regular function
function calc(a, b, sign) {
    if (sign == "*") {
        return a * b
    }
    else if (sign == "/") {
        return a / b
    }
}


//closure example
function calc2(a, b, sign ){
    if (sign == "*") {
        return multiply(a, b)
    }
    else if (sign == "/") {
        return divide(a, b)
    }
}
console.log(calc2(7, 7, '*'))