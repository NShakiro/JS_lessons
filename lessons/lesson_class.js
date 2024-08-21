//JavaScript Classes are templates for JavaScript Objects
//Use the keyword class to create a class
//Always add a method named constructor()
//The constructor method is called automatically when a new object is created.

//======================Syntax========================================
class ClassName {
   constructor() {  }
}

class Car {
   constructor(name, year) {
      this.name = name;
      this.year = year;
   }
}
//The example above creates a class named "Car".
//The class has two initial properties: "name" and "year".
//A JavaScript class is not an object!

//===============Using a Class=========================================
//When you have a class, you can use the class to create objects:

//Example
let myCar1 = new Car("Ford", 2014);  //use new -keyword
let myCar2 = new Car("Audi", 2019);

//===============The Constructor Method=================================
//The constructor method is a special method:
//It has to have the exact name "constructor"
//It is executed automatically when a new object is created
//It is used to initialize object properties
//If you do not define a constructor method, JavaScript will add an empty constructor method.

