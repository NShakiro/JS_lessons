//https://www.w3schools.com/js/js_object_definition.asp
// ============= Objects =================================
/**
 * In JavaScript, objects are king. If you understand objects, you understand JavaScript.

In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.

Objects are variablrs!
It is a common practice to declare objects with the const keyword.
 */


//  ======= examples:

//{key : values,} -property

// const person = {
//   name: "Ivan",
//   surname: "Petrov",
//   age: 33,
//   job: "QA engineer",
//   isAdmin: false
// }

// const person2 = {
//     id: '02',
//     personalInfo: {
//       name: {
//         first: 'Jane',
//         last: 'Dow',
//       },
//       dob: '01/01/1990',
//       "contactInfo": {
//         phone: '+123456789',
//         email: null,
//         address: {
//           city: "Boston",
//           state: "M"
//         }
//       },
//     },
//     purchases: [null],
//   }
// console.log(person2.personalInfo.contactInfo);

//  console.log(typeof person2);

// const arr = [1];
// console.log(typeof arr);


// ===================  Обьявление обьекта  ===========================

//let obj = new Object();
// let user = {};

// let obj = {
//   name: 'Bob',
//   "age": 21,
//   "isAdult": true,
//   "salary": undefined,
//   4: null,
//   address : "Houston",
// };
// console.log(obj);

// Последнее свойство объекта (property) может заканчиваться запятой ",".

// =========================================

// ключ может состоять из нескольких слов, но тогда он
// _обязательно_ должен быть заключен в кавычки:
// let number
// number = 9

// let user = new Object()
// let user1 = {
//   name: "John",
//   age: 30,
//   'high school': true,
// }

// console.log("original ", user );

// //value of age и name изменено:
// user.age = 20;
// user.name = 'Bill';
// console.log("modified ", user);

// //добавлено свойство address:
// user.address = {
//   city: 'SF',
//   state: 'CA',
//   country: 'USA',
// }
// user. hello = "Hi"
// console.log("added new key - address and hello ", user);
//console.log(user.address.state);

// //============================================
// //оператор delete:

//  delete user.address.country;     //удаление свойства country
//  console.log("deleted  ",user);


// ====================  обращение к свойствам  =============================

// Для обращения к свойствам используется запись «через точку»: person.name, person.age.
//  или через [ ] :       person['name'], person["age"]

// const person = {
  
//   age: 30,
//   "likes cats": true,
//    name: 'Joey',
// };

// // //выведение значения

//  console.log(person.name);
//  console.log(person.age);

// //let arr = [4, "g", 66]
//  console.log(person["name"]); //arr[0]
//  console.log(person['age']);
//  console.log(person["likes cats"]);


// ==================  Добавление свойства(property)  ================================


//создаем объект
//  const obj = {};

// // //присваиваем значения
//  obj.name = 'Jess'; //через точку arr[0]= "jess"
// console.log(obj);

//  obj['likes read'] = true; //через скобки []
// console.log(obj);

//  obj['age'] = 28;
//  console.log(obj);

// let carModel = 'mini'; //через переменную
// obj[carModel] = 1;
// //obj['carModel'] = 3;
//  console.log(obj);


// // =======================  Изменение свойства(property)  ===================================

// obj.name = "Bill";           //через точку
// obj['likes read'] = false;     //через скобки []
// obj[carModel] = 5;           //через переменную

//  console.log(obj);



// ================== Создание объекта с использованием переменной  =====
//let key = prompt("Что вы хотите узнать о пользователе?", "name");
// let name1 = "Anna";
// let age = 17
// const user = {
//    [name1]: "Olya",
//    age: age,
   
// };
// console.log(user);



// ============================================================
// Обращение к свойствам объекта

// let arr = [1,3,5,7]
// const customers = [
//   {               //   !!! Array[0]
//     id: '01',                //
//     personalInfo: {  name: { first: 'John', last: 'Dow'}, },},

//   {                //    !!! Array[1]
//     id: '02',                //
//     personalInfo: {          //
//       name: {                //
//         first: 'Jane',       //
//         last: 'Dow',         //
//       },
//       dob: '01/01/1990',         //
//       "contactInfo": {           //
//         phone: '+123456789',     //
//         email: [1,2,3],             //
//         address: null,           //
//       },
//     },
//     purchases: [null],           //
//   }];

// 1. Свойства 1-го уровня -array elements
//  console.log(customers.length);
//  console.log(customers[0]);
//  console.log(customers[1]);
 //console.log(customers[2]);

// 2. Свойства 2-го уровня -from array to object
//  console.log(customers[0].id);
//  console.log(customers[1]['id'])

// 3. Свойства 3-го уровня
//  console.log(customers[1].personalInfo.name);
//  console.log(customers[1].personalInfo.dob);
//  console.log(customers[1]['personalInfo']['dob']);

// 4. Свойства 4-го уровня
// console.log(customers[1].personalInfo.name.first);
//  console.log(customers[1].personalInfo.contactInfo.email[2]);
//  console.log(customers[1]['personalInfo']['contactInfo']['email']);

// ====================  Проверка существования свойства  ======================================

// ===== проверка с undefined
// В отличие от многих других языков, особенность JavaScript-объектов в том,
// что можно получить доступ к любому свойству. Даже если свойства не существует –
// ошибки не будет!

// При обращении к свойству, которого нет, возвращается undefined.
// Это позволяет просто проверить существование свойства:

// let user = {
//    newKey: undefined,
// };
// console.log(user)
// console.log(user.age);
// console.log(user.newKey);
// console.log(user.name === undefined); // true означает "свойства нет"
// user.name = "Anna"
// // console.log(user)
// // user.name = " Pavel"
// console.log(user)
// console.log(user.newKey !== undefined)

// ===== через оператор in check the key
// let obj = {
//   firstName: 'Sofia',
//   lastName: 'I.',
//   age: 35,
//   language: 'Java',
//   newKey: undefined,
//   9: false,
//   job: {name1 : "Olga", age1 : 23},
// };
// console.log(obj);

// console.log("firstName" in obj);
// console.log("first" in obj);
// console.log(undefined in obj);
// console.log( "age1" in obj);  // can't check by value

// console.log(obj.newKey === undefined);


// ==================================Example
// let userInfo = {
//    name: "Anna",
//    age:  30,
//    address : {
//       city: "Boston",
//       street: "Rose Dr."
//    }
// }

// //Operator in
// if ("name" in userInfo){            // check if key  -name- in object
//    console.log(userInfo.name)
// }

// //console.log(userInfo.address.street)
// //опциональная цепочка
// console.log(userInfo?.address?.street)


// ============================================================ 

// обращение, добавление на примере

// let obj = {
//   firstName: 'Sofia', 
//   lastName: 'I.', 
//   country: 'Argentina', 
//   continent: 'Americas', 
//   age: 35, 
//   language: 'Java'
// };
// let name1 = obj.firstName;
// let language = obj.language;

// console.log(name1," ," , language);

// let a = `Hi ${name1}, Do you like ${obj.language}?`;

// console.log(a);

// let newKey = 'hello';
// obj[newKey] = a;      // obj.hello = a;

// console.log(obj);


// =======================  цикл for ... in  =================================== 

// const arr = ['a', 'b', 'c'];
// for (let i = 0; ; i++) {}
// for (let el of arr) {}

// Для итерации по объекту используется цикл for ... in

// for (let key in object) {
//   тело цикла выполняется для каждого свойства объекта
// }

// let obj = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for(let key in obj){
//   // ключи
//   //console.log(key);  // name, age, isAdmin

// //   // значения ключей
//  //  console.log(obj[key]); // John, 30, true   /arr[i]

//   console.log(key + ": " + obj[key]);
// }


// //count salaries
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;
// for(let key in salaries) { 
//    sum += salaries[key];
// }

// console.log(sum); // 390


// let obj = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   let res = 0;
//   for(let key in obj) {
//      //res += obj[key] * 2;
//     if(typeof obj[key] == 'number'){
//       res += obj[key] * 2;
//    }
//   }
//   return res;
// }
// console.log(multiplyNumeric(obj));



// ============================================================ 

// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.
// Они хранят свойства (пары ключ-значение), где:

// => Ключи свойств должны быть строками (string) или символами (symbol) (обычно строками).
// => Значения могут быть любого типа.
// => Чтобы получить доступ к свойству, мы можем использовать:

// => Запись через точку: obj.key.
// => Квадратные скобки obj["key"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
// Удаление свойства: delete obj.key.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for(let key in obj).

// ======================  Методы объектов  ====================================== 

// Object.keys, values, entries
// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].


// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
//   language: "JavaScript",
// };

// console.log("Keys: ", Object.keys(user));    //выводит ключи (keys)
// console.log("Values: ", Object.values(user));  //выводит значения (values)
// console.log(Object.entries(user)); //выводит массив массивов

// ======== перебор в цикле
//console.log('===========');
// let user = {
//   name: "John",
//   age: 30,
//   language: 'en',
//   home: 'apartment',
//   number: 6
// };

// // // перебор значений -checking values
// for (let i of Object.entries(user)) {
//   console.log(i); 
// }


// =======
// const str = 'ABCD EFGHIJKLMNOPQRSTUVWXYZ';

// const obj = {};

// for(let i = 0; i < str.length; i++){
//     obj[i+1] = str[i];
// };
// console.log(obj);


// end



















// =====================  Object.fromEntries:  ========================== 

// let arr = [[1, 'a'], [2, 'b'], [3, 'c']];

// console.log(Object.fromEntries(arr));


// У объектов нет множества методов, которые есть в массивах, например map, filter и других.

// Если мы хотели бы их применить, то можно использовать Object.entries 
// с последующим вызовом Object.fromEntries:

// Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj.
// На нём вызываем методы массива, например, map.
// Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект.


// let items = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let arr = Object.entries(items)
// console.log(arr);
// console.log(Object.fromEntries(arr));

// let arr = Object.entries(items);
// console.log(arr);

// let newArr = arr.map(([key, value]) => [key, (value * 1.1).toFixed(2)]); 
// console.log(newArr); 
// const itemsNew = Object.fromEntries(newArr);
// console.log(itemsNew); 


//  ======  https://www.codewars.com/kata/576a29ab726f4bba4b000bb1/train/javascript

// What is my name score? #1

// const alpha = {'ABCDE': 1,
//                'FGHIJ': 2,
//                'KLMNO': 3,
//                'PQRST': 4,
//                'UVWXY': 5};


// function nameScore(name){
//   let str = name.toUpperCase();
//   let count = 0;
//    for(let i = 0; i < str.length; i++){
//     for(let key in alpha){
//       if(key.includes(str[i])) 
//         count += alpha[key];
//     }
//   }
// return {[name]: count}; 
// }
// console.log(nameScore('Mary Jane'));


// ======  https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript
// String Reordering
// Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

//  let arr = [
//             {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
//             {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
//            ];
// console.log(arr);

// const sentence = arr => 
//     arr.sort((a, b) => Object.keys(a) - Object.keys(b))
//              .map(obj => Object.values(obj))
//              .join(' ')
// console.log(sentence(arr));




// ==================================
// let userInfo = {
//    name: "Anna",
//    age:  30,
//    address : {
//       city: "Boston",
//       street: "Rose Dr."
//    }
// }

// //Operator in
// if ("name" in userInfo){            // check if key  -name- in object
//    console.log(userInfo.name)
// }

// console.log(userInfo.address.street)
// опциональная цепочка
// console.log(userInfo?.address?.street)

// objects methods
// const person = {
//    firstName: "John",
//    lastName: "Doe",
//    id: 5566,
//    fullName: function () {
//       return this.firstName + " " + this.lastName;
//    }
// };

// console.log(person.fullName())