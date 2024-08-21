//1===============================
// function mystery() {
//    var results =
//       { sanity: 'Hello' };
//    return
//    results;
// }
function mystery() {
   var results = { sanity: 'Hello' };
   return results;
}

//2===============================
// function animal(obj) {
//    return ?
// }
function animal(obj) {
   //{name:"dog",legs:4,color:"white"}
   return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

//3=================================
// items = []
// items.push{ a: "b", c: "d" }
items = []
items.push({ a: "b", c: "d" })

//4===============================
// function wrap(value) {
//    return
//    {
//       value: value
//    };
// }

function wrap(value) {
   return{
      value: value
   };
}

//5===================================
// var rooms = {

// }//5
var rooms = {
   room1: {
      name: "save your life",
      description: "you should save your life",
      completed: true,
   },
   room2: {
      name: "find a key",
      description: "you should find a key",
      completed: true,
   },
   room3: {
      name: "jump on rock",
      description: "you should jump on rock",
      completed: true,
   }
}

//6=================================
// var rooms = {
//    first: {
//       description: 'This is the first room'
//     items: {
//          chair: 'The old chair looks comfortable',
//          lamp: 'This lamp looks ancient'
//       },
//       second: {
//          description: 'This is the second room'
//     items: {
//             couch: 'This couch looks like it would hurt your back,
//       table: 'On the table there is an unopened bottle of water'
//          }
//       }
//    }
var rooms = {
   first: {
      description: 'This is the first room',
    items: {
         chair: 'The old chair looks comfortable',
         lamp: 'This lamp looks ancient',
      },
      second: {
         description: 'This is the second room',
    items: {
            couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water',
         },
      },
   }
}

//7==================================
// function giveMeFive(obj) {
//    //coding here

// }
function giveMeFive(obj) {
   let arr = []
   for (let key in obj) {
      if (key.length == 5) {
         arr.push(key)
      }
      if (obj[key].length == 5) {
         arr.push(obj[key])
      }
   }
   return arr
}

//8
// function numObj(s) {

// }
function numObj(s) {
   
   let arr = []
   for (let el in s) {
      let obj = {}
      obj[s[el]] = String.fromCharCode(s[el])
      arr.push(obj)
   }
   return arr
}

//9=========================================
// function isRubyComing(list) {

// }
function isRubyComing(list) {

   for (let i = 0; i < list.length; i++) {
      let el = list[i]
      if (el.language == "Ruby") {
         return true
      }
   }
   return false
}

//10================================================
// function greetDevelopers(list) {
//    // thank you for checking out my kata :)
// }

function greetDevelopers(list) {
   // thank you for checking out my kata :)
   let arr = []
   for (let el in list) {
      let obj = list[el]
      obj['greeting'] = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`
      arr.push(obj)
   }
   return arr
}

//12
function iTri(s) {
   //its gonna be a long day!
   //all distance = 2.4 + 112 + 26.2 //140.6
   let obj = {}
   let num = 0
   if (s == 0) {
      return 'Starting Line... Good Luck!'
   }
   else if (s <= 2.4) {
      num = 140.6 - s
      obj['Swim'] = `${num.toFixed(2)} to go!`
      return obj
   }
   else if (s <= 114.4) {
      num = 140.6 - s
      obj['Bike'] = `${num.toFixed(2)} to go!`
      return obj
   }
   else if (s < 140.6) {
      num = 140.6 - s
      obj['Run'] = `${num.toFixed(2)} to go!`
      return obj
   }
   else return "You're done! Stop running!"

}

//13
function redarr(arr) {
   // your code
   let obj = {}
   let newArr = arr.sort()
   newArr = [...new Set(newArr)]
   for (let i in newArr) {
      obj[i] = newArr[i]
   }

   return obj
}

//14==========================================
function testResult(array) {
   // your code
   let obj = {}
   let arr2 = []
   let sum = 0
   let h = 0
   let a = 0
   let l = 0
   let count = 0
   for (let i in array) {
      sum += array[i]
      count++    //counts how many elements in array
      if (array[i] >= 9) {
         h++
      }
      else if (array[i] == 7 || array[i] == 8) {
         a++
      }
      else if (array[i] <= 6) {
         l++
      }
   }
   obj['h'] = h
   obj['a'] = a
   obj['l'] = l

   let average = (sum / count).toFixed(3)

   arr2.push(parseFloat(average), obj)
   if (a == 0 && l == 0) arr2.push('They did well')

   return arr2

}

//15=======================================
//15
function boredom(staff) {
   let happiness = ''
   let score = 0
   for (let key in staff) {
      let dep = staff[key]
      if (dep == 'accounts') score += 1
      if (dep == 'finance') score += 2
      if (dep == 'finance') score += 2
      if (dep == 'canteen') score += 10
      if (dep == 'regulation') score += 3
      if (dep == 'trading') score += 6
      if (dep == 'change') score += 6
      if (dep == 'IS') score += 8
      if (dep == 'retail') score += 5
      if (dep == 'cleaning') score += 6
      if (dep == 'pissing about') score += 25
   }

   if (score <= 80) {
      happiness = 'kill me now'
   }
   else if (score < 100 && score > 80) {
      happiness = 'i can handle this'
   }
   else if (score >= 100) {
      happiness = 'party time!!'
   }
   return happiness
}