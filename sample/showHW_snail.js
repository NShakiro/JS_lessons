
// let height = 5
// let upDay = 3
// let downNight = 2
// let days = 0
// let progress = 0
// let night = 0
// //day1+night1
// if (progress <= height) {
//    progress += upDay
//    days++
//    height -= progress
//    console.log(`End day ${days} progress ${progress}m left to climb  ${height} m`)
// }
// if (progress <= 5) {
//    progress -= downNight
//    night++
//    height += downNight
//    console.log(`End night ${night} progress ${progress}m left to climb  ${height} m`)
// }
// //day2+night2
// if (progress <= height) {
//    progress += upDay
//    days++
//    height = 5 - progress
//    console.log(`End day ${days} progress ${progress}m left to climb  ${height} m`)
// }
// if (progress <= 5) {
//    progress -= downNight
//    night++
//    height += downNight
//    console.log(`End night ${night} progress ${progress}m left to climb  ${height} m`)
// }
// //day3
// if (progress <= height) {
//    progress += upDay
//    days++
//    height = 5 - progress
//    console.log(`End day ${days} progress ${progress}m left to climb  ${height} m`)
// }
// if (progress == 5) {
//    console.log(`It took snail ${days} days to reach his goal`)
// }


//example 2
// const wallHeight = 5
// const dayTrip = 3
// const nightTrip = 2
// let day = 0
// let currentHeight
// day++
// currentHeight = dayTrip
// if (currentHeight >= wallHeight) {
//   console.log(`The snail reached the top of the wall in ${days} days`)
// } else {
//   currentHeight = currentHeight - nightTrip
//   // console.log(currentHeight)
//   // вывел чтобы посмотреть, на какой высоте улитка на конец этого дня
// }

// currentHeight = currentHeight + dayTrip
// day++
// if (currentHeight >= wallHeight) {
//   console.log(`The snail reached the top of the wall in ${days} days`)
// } else {
//   currentHeight = currentHeight - nightTrip
// }

// currentHeight = currentHeight + dayTrip
// day++
// if (currentHeight >= wallHeight) {
//   console.log(`The snail reached the top of the wall in ${day} days`)
// } else {
//   currentHeight = currentHeight - nightTrip
// }


//example 3, not correct
// let height = 5
// let day = 3
// let night = -2
// let path = height / (day + night)
// console.log('Snail needs to have ' + path )

//example 4
// let wall = 5
// let pass = 0
// let num = 0
// while (pass < 5) {
//   num++
//   pass += 3
//   console.log(`День: ${num}, Высота: ${pass}`)
//   if (pass >= 5) {
//     break
//   }
//   pass -= 2
// }


// let wallHeight = 5;  // высота стены
// let progress = 3;    // прогресс за день
// let retreat = 2;     // отступление за ночь
// let currentPosition = 0; // текущее положение улитки
// let days = 0; // количество дней
// if (currentPosition < wallHeight)
//  {
//     days++; // увеличиваем счетчик дней - День 1-ый
//     currentPosition += progress; // подъем за день
//     if (currentPosition >= wallHeight) { // если достигли или преодолели высоту стены
//         console.log('Улитка на вершине стены');
//     }
//     currentPosition -= retreat; // сползание за ночь
//     days++; // увеличиваем счетчик дней - День 2-ой
//     currentPosition += progress; // подъем за день
//     if (currentPosition >= wallHeight) { // если достигли или преодолели высоту стены
//         console.log('Улитка на вершине стены');
//     }
//     currentPosition -= retreat; // сползание за ночь
//     days++; // увеличиваем счетчик дней - День 3-ий
//     currentPosition += progress; // подъем за день
//     if (currentPosition >= wallHeight) { // если достигли или преодолели высоту стены
//         console.log('Улитка на вершине стены');
//     }
// }
// console.log(`Улитка доползёт до вершины стены за ${days} день(ей).`);


// let height = 5 //не верное
// let allwayUpinaday = 3
// let allwayDowninaday = 2
// let startLocation = 0
// let howmanydays = 0
// let reached = (height/(allwayUpinaday-allwayDowninaday))
// console.log (reached)

// let currentheight = 0// need fix
// let up = 3
// let down = 2
// let day = 0
// if ((currentheight += up) == 5) {
//   console.log(`Prypovz na ${day} den`)
// } else {
//   currentheight -= down
//   day += 1
// }
// if ((currentheight += up) == 5) {
//   console.log(`Prypovz na ${day} den`)
// } else {
//   currentheight -= down
//   day += 1
// }
// if ((currentheight += up) == 5) {
//   console.log(`Prypovz na ${day} den`)
// } else {
//   currentheight -= down
//   day += 1
// }
// if ((currentheight += up) == 5) {
//   console.log(`Prypovz na ${day} den`)
// } else {
//   currentheight -= down
//   day += 1
// }
// if ((currentheight += up) == 5) {
//   console.log(`Prypovz na ${day} den`)
// } else {
//   currentheight -= down
//   day += 1
// }

let a
let b
let operator
a = 7
b = 3
operator = '+'
if (operator == '+') {
  console.log(a + b)
} else if (operator == '-') {
  console.log(a - b)
} else if (operator == '*') {
  console.log(a * b)
} else if (operator == '/') {
  if (b != 0) {
    console.log(a / b)
  } else {
    console.log("You can't divide by zero!")
  }
}
if (
  operator !== '+' &&
  operator !== '-' &&
  operator !== '*' &&
  operator !== '/'
) {
  console.log('Invalid operation sign!')
}



