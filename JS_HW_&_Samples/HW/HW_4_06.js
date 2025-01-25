
//====================== HW#4 Part2 ===========================
//4

let countOpen = 0
let countClose = 0
let result = 0

//let myArr =['(', ')', '(', '(', '(', ')', '}', '(', ')', ')']
//let myArr = [')', '(', '(', '(', ')', '(', ')', ')', '(', ')']

// for (let i = 0; i < myArr.length; i++) {

//   if (myArr[i] == '(') countOpen += 1
//   else if (myArr[i] == ')')  countClose += 1

//    result = countOpen - countClose
//    console.log(result)
//   if (result < 0) {
//     console.log("Wrong sequance")
//     break
//   }
// }

// if (countOpen == countClose) {
//   console.log('equal')
// }
// else if(countOpen > countClose) console.log('not equal')



// //=============================== VAR 2

// for (let i in myArr) {

//   if (myArr[i] == '(') result++
//   else if (myArr[i] == ')') result--

//    console.log(result)
//   if (result < 0) {
//     console.log( "Wrong sequance")
//     break
//   }

//  // 
// }

// if (result == 0 )  console.log('Equal')
// else if (result > 0) console.log('Not equal')



// //=========================== VAR 3 

let result2 = 0
let result3 = 0

let myArr = ['{', '(', '(', ')', ')', '}', '[', ']']
for (let i in myArr) {

   if (myArr[i] == '(') result++
   else if (myArr[i] == ')') result--

   
   if (myArr[i] == '{') result2++
   else if (myArr[i] == '}') result2--

   if (myArr[i] == '[') result3++
   else if (myArr[i] == ']') result3--

   if (result3 < 0 || result < 0 || result2 < 0) {
      console.log("Wrong sequance ")//of '[]
      break
   }
    console.log(result, result2, result3)
}

if (result == 0 && result2 == 0 && result3 == 0) console.log('All  Equal')
else if (result > 0 || result2 > 0 || result3 > 0) console.log('Not equal')


/**
 * 4 Решите задачу с помощью цикла:
«Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.»
 */

let dayDistance = 3
let nightDown = -2
let distance = 0
let days = 0
let wall = 5

//1
// while ((distance += dayDistance) <= wall) {
//    days++
//    console.log(` - Current distance at the end of the day for day ${days}  is ${distance} meter(s)`)
//    if (distance == wall) console.log('Finish!')
//    else console.log('Go forward!')
//    distance += nightDown
// }
// //2
// if ((distance += dayDistance) <= wall) {
//   days++
//   console.log(` - Current distance at the end of the day for day ${days}  is ${distance} meter(s)`)
//   if (distance == wall) console.log('Ok')
//   distance += nightDown
// }
// //3
// if ((distance += dayDistance) <= wall) {
//   days++
//   console.log(` - Current distance at the end of the day for day ${days}  is ${distance} meter(s)`)
//   if (distance == wall) console.log('Ok')
//   distance += nightDown
// }
// // //4
// if ((distance += dayDistance) <= wall) {
//   console.log('num4')
//   days++
//   console.log(` - Current distance at the end of the day for day ${days}  is ${distance} meter(s)`)

//   distance += nightDown
// }
// else console.log('Finish')

// if (distance == wall) console.log('Ok')

