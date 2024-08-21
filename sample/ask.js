const readline = require("readline");

const q1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

q1.question("Where do you live? ", function (answer) {
  console.log(`Oh, so you live in ${answer}`);
  console.log("Interface Closed");
  q1.close();
});
 
//to run this code simply type in terminal ->  node ask.js

