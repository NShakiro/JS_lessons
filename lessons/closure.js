/**
 * 
 * Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена. Другими словами, замыкание даёт вам доступ к Scope (en-US) внешней функции из внутренней функции. В JavaScript замыкания создаются каждый раз при создании функции, во время её создания. 
 */


let y = 10
//example 1
function outer(x) {
   let tmp = 3;
   // console.log(tmp)
   function inner(y) {
      console.log(x + y + (++tmp)); // выведет 16
   }
   inner(y);
   console.log(tmp)
}
outer(2);
// outer(2)
// console.log(tmp)



//example 2
// let Person = function (pName) {  //old class
//    let name = pName;

//    this.getName = function () {
//       return name;
//    }
// }

// let person = new Person("Natan");  // create an instance of person class
// console.log(person.getName());

