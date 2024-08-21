/**
 * 1.1 Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.
 */

// let myMonth = 'JulY'
// let month = myMonth.toLowerCase()

// if (month == 'july' || myMonth == 'august') {
//   console.log('approved')
// }
// else console.log('denied')


/**
 * 1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.
 */
//  let num1 = 5
//  let num2 = 3
//  let operator = "/"

//  if(operator == "+"){
//    console.log(num1 + num2)
//  }
//  else if (operator == "-") {
//     console.log(num1 - num2)
//  }
//  else if (operator == "*") {
//     console.log(num1 * num2)
//  }
//  else if (operator == "/" && num2 !=0) {

//     console.log(num1 / num2)
//  }
//  else console.log('Please, enter correct number!')


/**
 * 1.3 Решите задачу с помощью пройденных тем:
«Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.»
 */
 
let dayDistance = 3
let nightDown = -2
let distance = 0
let days = 0
let wall = 5

//1
if ((distance += dayDistance) <= wall) {
  days++
  console.log(` - Current distance at the end of the day for day ${days}  is ${distance} meter(s)`)
  if (distance == wall) console.log('Ok') 
  else console.log('Go forward!')
  distance += nightDown
}
//2
if ((distance += dayDistance) <= wall) {
  days++
  console.log(` - Current distance at the end of the day for day ${days}  is ${distance} meter(s)`)
  if (distance == wall) console.log('Ok')
  distance += nightDown
}
//3
if ((distance += dayDistance) <= wall) {
  days++
  console.log(` - Current distance at the end of the day for day ${days}  is ${distance} meter(s)`)
  if (distance == wall) console.log('Ok')
  distance += nightDown
}
// //4
if ((distance += dayDistance) <= wall) {
  console.log('num4')
  days++
  console.log(` - Current distance at the end of the day for day ${days}  is ${distance} meter(s)`)
  
  distance += nightDown
}
// else console.log('Finish')

// if (distance == wall) console.log('Ok')

//for PR