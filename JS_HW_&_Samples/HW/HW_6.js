/*
 * 1. Задача про Палиндром. 
   Палиндром — слово, предложение или последовательность символов, которая 
   абсолютно одинаково читается как в привычном направлении, так и в обратном. 
   К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
   Дана строка; нужно написать функцию, которая позволяет вернуть значение true,
   если строка является палиндромом, и false — если нет. При этом нужно учитывать
  пробелы и знаки препинания.
  'А роза упала на лапу Азора'
 */
//  str ='А роза, упала на лапу Азора!'//'Anna1' //

// function isPalyndrome (str) {
//   str = str.toLowerCase().replace(/\p{P}|\s/ug, '')
//   let newStr = str.split('').reverse().join('')
//   return console.log('Is palindrome: ' + (newStr == str), newStr)
// }

// isPalyndrome(str)

/**
 find all spaces: / /g  or /\s/g
 find all punctuation: /\p{P}/u
 to combine two regex use | 
 */

//codewars
//https://www.codewars.com/kata/515e271a311df0350d00000f
/**
 *1.Complete the square sum function so that it squares each number passed into it 
  and then sums the results together.
  For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
 */

function squareSum (numbers) {
  let sum = 0
  for (let i in numbers) {
    sum += numbers[i] ** 2
  }
  return sum
}
// console.log(squareSum([1, 2, 2]))

/**https://www.codewars.com/kata/53dc54212259ed3d4f00071c
 * 2.Write a function that takes an array of numbers and returns the sum
 * of the numbers. The numbers can be negative or non-integer.
 * If the array does not contain any numbers then you should return 0.
 */
function sum (numbers) {
  if (numbers.length == 0) {
    return 0
  } else return numbers.reduce((total, b) => total + b, 0)
}
 //console.log(sum([1, 5.2, 4, 0, -1]))

/**
 * https://www.codewars.com/kata/572cb264362806af46000793 
 * - splice and other methods
 * 3.Coding in function threeInOne. function accept 1 parameters arr, 
 * it's a 1D number array. Your task is to merge each of the 3 elements
 * into 1 elements (sum value) and return the result.
   Note1: You should not modify the original array.
   Note2: Because this is a beginner Kata, and due to the author's mercy ;-),
   so you do not have to verify the validity of the parameter, 
   and do not worry about the number
   of elements of the array is not a multiple of 3.
 */

function threeInOne (arr) {
  var newArr = []
  for (let i = 0; i < arr.length; i += 3) {
    newArr.push(arr[i] + arr[i + 1] + arr[i + 2])
  }
  return newArr
}
// console.log(threeInOne([1, 2, 3, 4, 5, 6]))

/**https://www.codewars.com/kata/563b74ddd19a3ad462000054/
 * 4.write me a function stringy that takes a size and returns 
 * a string of alternating 1s and 0s.
   the string should start with a 1.
   a string with size 6 should return :'101010'.
 */

function stringy (size) {
  let str = ''
  for (let i = 1; i <= size; i++) {
    str += i % 2
  }
  return str
}
let checkIsString = stringy(8)

//console.log(typeof checkIsString, stringy(8))

/**https://www.codewars.com/kata/522551eee9abb932420004a0
 * 5. I love Fibonacci numbers in general, but I must admit I love some
 *  more than others.
   I would like for you to write me a function that, when given
    a number n (n >= 1 ),
    returns the nth number in the Fibonacci Sequence.
    Read this https://learn.javascript.ru/task/fibonacci-numbers 
 */
//-1
// function nthFibo (n) {
//   let [prev, curr] = [0, 1]
//   for (let i = 1; i < n; i++) {
//     [prev, curr] = [curr, prev + curr]
//   }
//   return prev
// }
// console.log(nthFibo(7))
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, …Sep 23, 2021
//-2
// function nthFibo (n) {
//   let numbers = [0, 1]
//   for (let i = 2; i < n; i++) {
//     numbers.push(numbers.at(-1) + numbers.at(-2))
//   }
//   return numbers[n - 1]
// }
// console.log(nthFibo(7))

//-3
// function nthFibo(n) {
//   let a = 0
//   let b = 1
//   for (let i = 2; i <= n; i++) {
//     let c = a + b
//     a = b
//     b = c
//   }
//   return a
// }
// console.log(nthFibo(7))











//скобки
let myArr1 = ['{', '(', '(', '', ')', '}', '[', ']']

//|| myArr[i] == ']' && newArr[-1] == '[' || myArr[i] == '}' && newArr[-1] == '{'
function isValid (myArr) {
  let opening = ['(', '[', '{']
  const newArr = []
  let count = 0
  for (let i = 0; i < myArr.length; i++) {
    ////myArr[i]== '('
    if (opening.includes(myArr[i])) {
      newArr.push(myArr[i])
      count++
    } else if (
      (myArr[i] == ')' && newArr.slice(-1) == '(') ||
      (myArr[i] == ']' && newArr.slice(-1) == '[') ||
      (myArr[i] == '}' && newArr.slice(-1) == '{')
    ) {
      newArr.pop()
    }
  }
  return newArr.length == 0
}

// function isClosedBracket(el) {
//   return [')', ']', '}'].indexOf(el) > -1;
// }
//console.log(isValid(myArr1))
//  else count--

// if (count < 0) return console.log('Wrong sequense')
