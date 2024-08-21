// const arr1 = [7, 4, 5, 6, 8];

const { createInvalidLegacyPluginError } = require("mocha/lib/errors")

// function callback(arr1) {
//    let out = '';
//    let arr2 = []
//    for (let i = 0; i < arr1.length; i++) {
//       out = '*' + arr1[i] ;
//       arr2.push(out)
//    }
   
//    console.log(arr2);
// }

// callback(arr1) 
let s = "3D2a5d2f"

function stringExpansion(s) {
   let totalStr = ''
   let totalStr2 = ''
   let count = 0
   let arr = []
   let newArrayFromString = s.split("")
   for (let i = 0; i < newArrayFromString.length; i++) {
      let el = parseInt(newArrayFromString[i])
      let str = ''
      let num = 0

      if (isNaN(el) == false) {
         arr.push(el)
      }
      if (arr.length === 0) {
         num = 1
      }
      else num = arr[arr.length - 1]
      if (isNaN(el)) {
         str += newArrayFromString[i]
         // if(num == 0)
         totalStr = str.repeat(num)
         totalStr2 += totalStr
      }
      if (isNaN(el) == false) {
         count++
      }

   }
   if (count == 0) {
      return s
   }

   return totalStr2

}

console.log(stringExpansion(s))
/**
 * if(newArrayFromString[i] != NaN){
         
      }
 * let str = newArrayFromString[i + 1]
         let num = newArrayFromString[i]
         string += newArrayFromString[i]
         console.log(str, num, string)
 */
let strTask3 = "";
let arrTask3 = [];
let count = 0;

for (let i = 0; i < 5; i++) { //this string will count  lines

   for (let j = 0; j < i + 1; j++) {

      if (j == 0) {
         strTask3 += (j + 1) + i + " ";
      }
      if (j == 1) {
         strTask3 += (j + 1) + 4 + (i - j) + " ";
      }
      if (j == 2) {
         strTask3 += (j + 1) + 4 + 3 + (i - j) + " ";
      }
      if (j == 3) {
         strTask3 += (j + 1) + 4 + 3 + 2 + (i - j) + " ";
      }
      if (j == 4) {
         strTask3 += (j + 1) + 4 + 3 + 2 + 1 + (i - j) + " ";
      }

   }

   strTask3 += "\n";
}

console.log(strTask3);

let triangleHeight = 7
for (let i = 1; i <= triangleHeight; i++) {
   let numberinRow = i
   let delta = triangleHeight - 1
   let workStr = ''
   for (let k = 0; k < i; k++) {
      workStr = workStr + numberinRow.toString() + ' '
      numberinRow = numberinRow + delta
      delta--
   }
   console.log(workStr)
}
