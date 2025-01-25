//promice
//Объект Promise используется для отложенных и асинхронных вычислений.
//has 2 parameters : resolve, reject - functions 

const promise1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('everything is ok');
   }, 3000);
});

// promise1.then((value) => {
//    console.log(value);
//    //expected output: "foo"
// });

//promice methods
// promise1.then(() => { });    //in 'then' we operate with resolve
// promise1.catch();         //'catch' will called if called reject, 'then' will be ignored

// console.log(result);
// expected output: [object Promise]

//-----------------------------------------------
function someFunction() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('Hello_1000');
          reject('catch an error')//comment resolve
      }, 3000);
   });
}
//what is happening
//someFunction()->function ->{
//    value: undefined
//    onFulfill: []   //each then function will come here
//    onRejected:[]     // each catch function will come here
// }

someFunction()
   .then(console.log)
   .catch(console.error)




//var2
function someFunction2() {
   return new Promise((print, reject) => {
      setTimeout(() => {
         print('Hello');
      }, 1000);
   });
}

// someFunction2()
//    .then(response=>{
//       //console.log(response)
//       return response + '!'
//    })
//    .then(console.log)
//    .catch(console.error)
//    .finally(()=>{console.error('this is an error')})

let str = "Hello!"
let ms = 10
function delay(ms, str) {
   return new Promise((print) => setTimeout(() => {
      print(str);
   }, ms));
}

// delay(3000, 'Olya').then(response => {
   
//    return console.log(response + '?')
//    //response + '!'
//    })