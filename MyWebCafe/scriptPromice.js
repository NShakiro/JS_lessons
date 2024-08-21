function someFunction() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve('Hello');
      }, 5000);
   });
}

someFunction()
   .then(response => {
      console.log(response)
      return response + '!'
   })
   .then(console.log)
   .catch(console.error)
   .finally(() => { console.error('this is an error') })

 let str = "Hello!"
 let ms = 10


function delay() {
   return new Promise((resolve) => setTimeout(() => {
      resolve("Goodby");
   }, 5000));
}

delay(ms, str).then(response => {
   console.log(response)
   return response + '!'
})