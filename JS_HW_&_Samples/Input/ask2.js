//https://nodejs.org/api/readline.html

// const readline = require("readline"); //call readline

// const q1 = readline.createInterface({  //create interface to ask and handle answer
//    input: process.stdin,
//    output: process.stdout,
// });

// let answer1 = ''

// q1.question("Welcome! What type of sandwich would you like to eat today? \nPlease, choose from the list below and enter the number: \nturkey -1, \nsalmon-2, \npepperoni-3 \nType your choice here: ", (answer) => {

//    if (answer == 1) {
//       answer1 += "turkey sandwich"
//       q1.close();
//    }
//    else if (answer == 2) {
//       answer1 += "salmon sandwich"
//       q1.close();
//    }
//    else if (answer == 3) {
//       answer1 += 'pepperoni sandwich'
//       q1.close();
//    }
//    else {
//       q1.setPrompt("Please, enter a valid answer\n")
//       q1.prompt()                                 //call the prompt
//       q1.on('line', (answer)=>{
//          if (answer == 1 || answer == 2 || answer == 3){
//             q1.close()
//          }
//          else{
//             q1.setPrompt("Please, enter a valid answer again\n")
//             q1.prompt() 
//          }
//       })
//     }
// })

// q1.on('close', () => {
//    console.log(`You choosed ${answer1}!\nYour order is ready \nEnjoy your meal!`);
// })

//======2
const readline = require("readline"); //call readline

const q1 = readline.createInterface({  //create interface to ask and handle answer
   input: process.stdin,
   output: process.stdout,
});

let answer1 = ''

q1.question("Welcome! Would you like to make an order? ", (answer) => {

   if (answer.trim() == "no") {
      answer1 +=''
      console.log('Bye, bye!')
      q1.close()
   }
   else {
      q1.setPrompt("What type of sandwich would you like to eat today? \nPlease, choose from the list below and enter the number: \nturkey -1, \nsalmon-2, \npepperoni-3 \nType your choice here:\n")
      q1.prompt()                                 //call the prompt
      q1.on('line', (answer) => {
         if (answer == 1) {
            answer1 += "turkey sandwich"
            q1.close();
         }
         else if (answer == 2) {
            answer1 += "salmon sandwich"
            q1.close();
         }
         else if (answer == 3) {
            answer1 += 'pepperoni sandwich'
            q1.close();
         }
         else {
            q1.setPrompt("Please, enter a valid answer again\n")
            q1.prompt()
         }
         
      })
      q1.on('close', () => {
         console.log(`You choosed ${answer1}!\nYour order is ready \nEnjoy your meal!`)
      })
   }
})

