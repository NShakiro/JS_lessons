// function func1() {
//    setTimeout(() => {
//       console.log(x);
//       console.log(y);
//    }, 3000);

//    var x = 2;
//    let y = 12;
// }
// func1();

// Code 2:

// function func2() {
//    for (var i = 0; i < 3; i++) {
//       console.log(i)
//       setTimeout(() => console.log(i), 2000);
//    }
// }
// func2();

// Code 3:

// (function () {
//    setTimeout(() => console.log(1), 2000);
//    console.log(2);
//    setTimeout(() => console.log(3), 0);
//    console.log(4);
// })();


//2===========================
// Code 1:

// let x = {}, y = { name: "Ronny" }, z = { name: "John" };
// x[y] = { name: "Vivek" };
// x[z] = { name: "Akki" };
// console.log(x[y]);

// Code 2:

// function runFunc() {
//    console.log("1" + 1);// 11
//    console.log("A" - 1);//NAN
//    console.log(2 + "-2" + "2");//2-22
//    console.log("Hello" - "World" + 78);//NAN
//    console.log("Hello" + "78");//Hello78
// }
// runFunc();

// // Code 3:

// let a = 0;
// let b = false;
// console.log((a == b));
// console.log((a === b));

// var x = 23;

// (function () {
//    var x = 43;
//    (function random() {
     
//       x++;
//       console.log(x);
//       var x = 21;
//    })();
//    //random()
// })(); 

// let hero = {
//    powerLevel: 99,
//    getPower () {
//       return this.powerLevel;
//    }
// }

// let getPower = hero.getPower;

// let hero2 = { powerLevel: 42 };
// console.log(getPower());
// console.log(getPower.apply(hero));

