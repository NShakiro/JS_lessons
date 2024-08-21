/*
 * 1. Задача про Палиндром. 
Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
 */

function palyndrome(str) {
   str = str.toLowerCase()
   let newStr = str.split('').reverse().join('')
   return ('Is palindrome: ' + (newStr == str))
}

console.log(palyndrome('Book'))






























//скобки
let myArr1 = ['{', '(', '(', '', ')', '}', '[', ']']

//|| myArr[i] == ']' && newArr[-1] == '[' || myArr[i] == '}' && newArr[-1] == '{'
function isValid(myArr) {

   let opening = ['(', '[', '{']
   const newArr = [];
   let count = 0
   for (let i = 0; i < myArr.length; i++) {
      ////myArr[i]== '('
      if (opening.includes(myArr[i])) {
         newArr.push(myArr[i])
         count++
      }
      else if ((myArr[i] == ')' && newArr.slice(-1) == '(') || (myArr[i] == ']' && newArr.slice(-1) == '[') || (myArr[i] == '}' && newArr.slice(-1) == '{')) {
         newArr.pop()
      }
   }
   return newArr.length == 0;
}

// function isClosedBracket(el) {
//   return [')', ']', '}'].indexOf(el) > -1;
// }
console.log(isValid(myArr1))
//  else count--

// if (count < 0) return console.log('Wrong sequense') 