//https://nodejs.org/api/readline.html
// const readline = require("readline");

// const q1 = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout,
// });
// const q2 = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout,
// });
// let answer = 0

// //do{
// console.log('What type of sandwich would you like to eat today? \nPlease, choose from the list below and enter the number: \nturkey -1, \nsalmon-2, \npepperoni-3 ')
// q1.question("Type your choice here: ", function (answer) {

//    if (answer == 1) {
//       answer = "turkey sandwich"
//       console.log("Good choce! \nYour order is ready \nCafe Closed");
//       q1.close();

//    }
//    else if (answer == 2) {
//       answer = "salmon sandwich"
//       console.log("Good choce! \nYour order is ready \nCafe Closed");
//       q1.close();
//    }
//    else if (answer == 3){
//       answer = 'pepperoni sandwich'
//       console.log("Good choce! \nYour order is ready \nCafe Closed");
//       q1.close();
//    }
//    else (answer = "Please, enter a valid answer")
//    console.log(`You choosed:  ${answer}`);

//  // while (answer !== 1 || answer !== 2 || answer !== 3)

//    //console.log(`You choosed:  ${answer}`);
//    // console.log("Cafe Closed");
//    // q1.close();

//    })


// // }
// // while (answer !== 1 || answer !== 2 || answer !== 3){

// // }


//====================================2
const readline = require("readline"); //call readline

const q1 = readline.createInterface({  //create interface to ask and handle answer
   input: process.stdin,
   output: process.stdout,
});

let answer

q1.question("What type of sandwich would you like to eat today? \nPlease, choose from the list below and enter the number: \nturkey -1, \nsalmon-2, \npepperoni-3 \nType your choice here: ", (answer) => {

   if (answer == 1) {
      answer = "turkey sandwich"
      q1.close();
   }
   else if (answer == 2) {
      answer = "salmon sandwich"
      q1.close();
   }
   else if (answer == 3) {
      answer = 'pepperoni sandwich'
      q1.close();
   }
   else {
      answer = "Please, enter a valid answer"
      console.log(`You choosed:  ${answer}`)
   }
})

q1.on('close', () => {
   console.log("Good choce! \nYour order is ready \nCafe Closed");
})