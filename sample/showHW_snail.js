//const prompt = require('prompt-sync')();

let height = 5
let upDay = 3
let downNight = 2
let days = 0
let progress = 0
let night = 0
//day1+night1
if (progress <= height) {
   progress += upDay
   days++
   height -= progress
   console.log(`End day ${days} progress ${progress}m left to climb  ${height} m`)
}
if (progress <= 5) {
   progress -= downNight
   night++
   height += downNight
   console.log(`End night ${night} progress ${progress}m left to climb  ${height} m`)
}
//day2+night2
if (progress <= height) {
   progress += upDay
   days++
   height = 5 - progress
   console.log(`End day ${days} progress ${progress}m left to climb  ${height} m`)
}
if (progress <= 5) {
   progress -= downNight
   night++
   height += downNight
   console.log(`End night ${night} progress ${progress}m left to climb  ${height} m`)
}
//day3
if (progress <= height) {
   progress += upDay
   days++
   height = 5 - progress
   console.log(`End day ${days} progress ${progress}m left to climb  ${height} m`)
}
if (progress == 5) {
   console.log(`It took snail ${days} days to reach his goal`)
}