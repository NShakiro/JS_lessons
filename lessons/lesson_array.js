// =============== Arrays ===========
// https://learn.javascript.ru/array

// массив - упорядоченная коллекция данных
// JavaScript arrays are resizable and can contain a mix
// of different data types.

// ------ объявление массива
 //const arr = [];
 
 //const arr = new Array();
 
//  let arr = [];
// console.log(arr)

// const arr1 = ['a', 'b'];
// console.log(arr1);

// let arr2 = ['ok', "pine", "oak", "aspen"];
// console.log(arr2);

// const arr3 = [1, 2, 3, 4];   // пустой массив
// console.log(arr3);

// let five = 5;   //variables
// let six = 6;
// let seven = "seven"

//  const diffTypes = [null, "One", 2, true, undefined, five, [1,2,3]] ;
//  console.log(diffTypes);

// ------- обращение к массивам

// arr[index];    // индексы начинаются с 0
// arr.length;
// arr[arr.length - 1];  // принимает ноль и положительные индексы
// arr.at(index)       // принимает отрицательные индексы!

 const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// indexes:        0    1    2    3    4    5    6
//  or:                  . . .        -3   -2   -1

//console.log(diffTypes.length); //количество элементов = всего
// console.log(letters[0]);
// console.log(letters[letters.length - 1]);// 7 -1 = 6
// console.log(letters.at(-2));

// --- обращение к не существующему элементу в массиве

//console.log(letters[10]);
//console.log(letters.at(-10));



// ============= изменение элемента в массиве

// const trees = ["maple", "pine", "oak", "aspen"];

// console.log(trees);
// trees[1] = "ash";
// console.log(trees);


// trees[5] = "birch";
// console.log(trees, trees.length);

//https://www.w3schools.com/js/js_object_definition.asp


// //----------- ==; === -------- compare arrays

// let arr = [1, 2];
// let arr1 = ["a", "b"]

// console.log(arr == arr1);
// console.log(arr > arr1);
// console.log(arr < arr1);

// const a = [1, 2, 3];
const b = [1, 2, 3];

// const a1 = [1, 2, 7];
// const b1 = [1, 2, 6];
// let a2 = a1.join()
// let b2 = b1.join()

// console.log(JSON.stringify(a1) == JSON.stringify(b1)) // compare string
//  console.log(JSON.stringify(a1))
// console.log(b.toString() === a.toString());
// let z = b.toString()
//let x = JSON.stringify(b)

 //console.log(x.length)

// =========================

//let arr = [1, 2, 3];
let emptyArr = []
// emptyArr.push(1, 5, 7)
// emptyArr.push(1, 3, 5, "f")
// emptyArr[0] = "A"
// console.log(emptyArr)
// let str2 =
// console.log(String(arr), " /", String(emptyArr) );
// console.log(Number(...arr), Number(emptyArr));
// console.log(Boolean(arr), Boolean(emptyArr));




