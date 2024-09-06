/**
 * 1.1 Напишите программу по согласованию отпуска в зависимости
 * от месяца. Если месяц “July” или “August”, то программа должна
 *  показать - ‘approved’, если другие месяцы, то - “denied”.
 */

// let myMonth = 'July'
// let month = myMonth.toLowerCase()

// if (month == 'july' || month == 'august') {
//   console.log('approved')
// }
// else console.log('denied')

/**
 * 1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений 
 * для арифметических операций.
 У вас должны быть две переменные для исходных чисел и одна для оператора.
 В зависимости от оператора, должно происходить то или иное арифметическое действие 
 и выводиться результат в консоль.
 */
let num1 = 4
let num2 = 'k'
let operator = '*'
let result

if (typeof num1 === 'number' && isNaN(num2) != true) {
  if (operator == '+') {
    result = num1 + num2
  } 
  else if (operator == '-') {
    result = num1 - num2
  } else if (operator == '*') {
    result = num1 * num2
  } else if (operator == '/') {
    if (num2 == 0) {
      console.log('Devision by 0 is not allowed')
    } else {
      result = num1 / num2
    }
  } else result = 'Please, enter correct operator'
  console.log(result)
} else {
  console.log('Check your numbers!')
}

/**
 * 1.3 Решите задачу с помощью пройденных тем:
 «Улитка ползёт вверх по стене высотой 5 метров. 
 Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз
 на 2 метра. За сколько дней она доползёт до вершины стены?»
 */

// let dayDistance = 3
// let nightDown = 2
// let totalMeters = 0
// let daysNumber = 0
// let wall = 5

// //1
// if ((totalMeters += dayDistance) < wall) {
//   console.log(`Day ${++daysNumber}, your distance is ${totalMeters} meter(s). `)
//   console.log('Go forward!')
// }
// else if (totalMeters == wall) {
//   console.log(`Day ${++daysNumber}, your distance is ${totalMeters} meter(s). `+ 'You reached your destination!')
// }
// totalMeters -= nightDown

// //2
// if ((totalMeters += dayDistance) < wall) {
//   console.log(`Day ${++daysNumber}, your distance is ${totalMeters} meter(s). `)
//   console.log('Go forward!')
// }
// else if (totalMeters == wall) {
//   console.log(`Day ${++daysNumber}, your distance is ${totalMeters} meter(s). ` +'You reached your destination!')
// }
// totalMeters -= nightDown

// //3
// if ((totalMeters += dayDistance) < wall) {
//   console.log(`Day ${++daysNumber}, your distance is ${totalMeters} meter(s). `)
//   console.log('Go forward!')
// }
// else if (totalMeters == wall) {
//   console.log(`Day ${++daysNumber}, your distance is ${totalMeters} meter(s). ` + 'You reached your destination!')
// }
// totalMeters -= nightDown

// //4
// if ((totalMeters += dayDistance) < wall) {
//   console.log(`Day ${++daysNumber}, your distance is ${totalMeters} meter(s). `)
//   console.log('Go forward!')
// }
// else if (totalMeters == wall) {
//  console.log(`Day ${++daysNumber}, your distance is ${totalMeters} meter(s). ` + 'You reached your destination!')
// }
// totalMeters -= nightDown
