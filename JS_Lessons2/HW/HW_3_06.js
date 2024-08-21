/*
 * 1. Напишите программу калькулятора со switch, обработайте возможные ошибки ввода 
 */

let num1 = 11
let num2 = 0
let operator = '&'

switch (operator) {
  case "+":
    result = num1 + num2
    console.log("The result is " + result)
    break
  case "-":
    result = num1 - num2
    console.log("The result is " + result)
    break
  case "*":
    result = num1 * num2
    console.log("The result is " + result)
    break
  case "/":
    if (num2 != 0) result = num1 / num2
    else result = "you can't divide by 0"
    console.log("The result is " + result)
    break

  default:
  //  console.log("Unknown operation, please enter correct operator!");
}



//============3. При помощи цикла for выведите чётные числа от 2 до 10
// for(let i = 2; i <= 10; i+=2){
//     console.log( i)
// }
// console.log('------------------------------------')

// for (let i = 1; i <= 10; i ++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// }



//================ 4. Задача с интервью*====================================

//У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] ,
//количество элементов и последовательность может быть разной.
//Нужно выяснить, у каждой ли скобки есть соответствующая пара(открывающая и закрывающая).

let sum1 = 0
let sum2 = 0

//let arr = ['(', ')', '(', ')', ')']
let arr = ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a']

for (let i = 0; i < arr.length; i++) {

  if (arr[i] == '(') {
    sum1 += 1
  }
  else if (arr[i] == ')') {
    sum2 += 1
  }
}
// console.log('openning = ' + sum1 + ', closing = ' + sum2)

// if (sum1 == sum2) {
//     console.log('equal')
// }
// else console.log('not equal')




/**
 * ================= *Креативное задание===============================
 Имеется зашифрованное предложение 
 “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
 мы знаем, что оно означает “You are the best QA ever”.
 Нам нужно придумать программу дешифратор.
 */
//coder
let text = "You are the best QA ever"
let newText = ''
let count = 0
for (let i = 0; i < text.length; i++) {

  if (count % 2 == 0) {
    newText = newText + text[i] + "br"
  }
  count += 2
}
//console.log(newText)

//decoder
let decodedResult = ''
for (let i = 0; i < newText.length; i += 3) {

  decodedResult += newText[i]

}
//console.log(decodedResult)

/**
 * ================ 5.Задачка посложнее* =============================
  Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему
 */

// let message = 'Work smarter, not harder! Be on time'
// let keyWord = "Open your shop in the morning"

// let encriptedMessage = ''

// for (let i = 0; i < message.length; i++) {

//     for ( let e = 0; e < keyWord.length; e++) {

//         if( i == e)   {
//             encriptedMessage = encriptedMessage + message[i] + keyWord[e]
//             keyWord += keyWord[e]
//       }

//     }   
// }
// console.log("Keyword = "+ keyWord)
// console.log('============')
// console.log("Encrypted message = " + encriptedMessage)
// console.log('============')


// let decriptedMessage = ''
// for (let i = 0; i < encriptedMessage.length; i+=2) {
//     decriptedMessage = decriptedMessage + encriptedMessage[i] 
// }
// console.log("The message = " + decriptedMessage)


// //================ inner loop work example================
// let keyWord2 = "+++"
// let message2 = 'Work smarter, not harder!Be on time'
// let encriptedMessage2 = ''
// let countE = 0
// let countI = 0
// for (let i = 0; i < message2.length; i++) {

//     for (let e = 0; e < keyWord2.length; e++) {

//             encriptedMessage2 = encriptedMessage2 + message2[i] + keyWord2[e]

//         //else { encriptedMessage = encriptedMessage + message[i] + keyWord[e+1] }
//         countE++
//     }
//     countI++
// }
// console.log(countI, countE)
// console.log(encriptedMessage2)

//decoder
// let str2 = ''
// for (let i = 0; i < newText.length; i += 3) {

//     text2 = text2 + newText[i]

// }
// console.log(text2)

