console.log("class Animal ==========================\n")

class Animal {
   constructor(name, eyesColor) {
      this.name = name;       //this refers to current object
      this.eyes = true;
      this.eyesColor = eyesColor;
      this.brain = 'brain';
      this.spine = 'spine';
      this.isBreath = true;
   }
   getName() {
      return (`The name of the animal is ${this.name}.`)
   }

   hasEyes() {
      return this.eyes
   }

   breath() {
      if (this.isBreath) return (`This ${this.name} can breath`)
      else return "It's not alive"
   }

   canMove(){
      return true
   }

   canEat() {
      console.log(`The ${this.name} can eat`)
   }
}
// Making object with the help of the constructor
let animal1 = new Animal("animal");
//let animal2 = new Animal('salmon', "blue");

console.log(animal1.name.toUpperCase());
console.log(animal1.getName())
animal1.eyesColor = "yellow"
console.log("Eyes color is "+ animal1.eyesColor);
animal1.canEat()
console.log(animal1.breath())
console.log(animal1.hasEyes())



console.log("\nclass Mammal =========================\n")

class Mammals extends Animal {
   //ovberrides cunstructor
   constructor(name, eyesColor ) {  
      super(name, eyesColor)
      this.skin = "fur"
      this.legsNumber = 4
      this.lungs = 'lungs'
   }

   setSkin(skin) {
      this.skin = skin
      return this.skin
   }
   
   showBodyParts() {
      console.log(`${this.name} has ${this.legsNumber} legs and ${this.skin}.`)
   }

   breath() {
      console.log(super.breath() +` with ${this.lungs}.`)
   }

   feedKids(){
      console.log(`The ${this.name} feeds its kids milk.`)
   }

   reproduceType(){
      return 'baby'
   }
}

let mammal1 = new Mammals("mammal", 'green')
console.log(mammal1.name.toUpperCase());
console.log(mammal1.getName())
console.log(mammal1.eyesColor );
mammal1.canEat()
mammal1.showBodyParts()
mammal1.breath()
mammal1.feedKids()


console.log("\nclass Predator ==========================\n")

class Predator extends Mammals {
   //ovberrides cunstructor
   constructor(name, eyesColor) {
      super(name, eyesColor)
      this.claws = 'claws'  //animal nails
      this.fangs = 'fangs'  //sharp teeth
   }

   canEat() {
      console.log(`The ${this.name} can eat meat.`)
   }

   showBodyParts() {
      let newName = this.name[0].toUpperCase() + this.name.slice(1)

      console.log(`${newName} has ${this.legsNumber} legs, ${this.skin} and sharp ${this.claws} and ${this.fangs}.`)
   }

  
}
let predator1 = new Predator("predator", 'green')
// console.log(predator1.name.toUpperCase());
// console.log(predator1.getName())
console.log("==>>>"+ predator1.fangs);
// predator1.canEat()
// predator1.showBodyParts()
// predator1.breath()
// predator1.feedKids()


console.log("\nclass Cat ======================\n")


class Cat extends Predator{
   constructor(name, eyesColor, nikName) {
      super(name, eyesColor)
      this.nikName = nikName  
   }

   moves() {
      let newName = this.name[0].toUpperCase() + this.name.slice(1)
      console.log(`${newName} moves softly.`)
   }
   sayMeow() {
      let sound = 'meow'
      if (this.name == 'cat') {
         sound = 'roar'
      }
      console.log(`This ${this.name} says ${sound}.`)
   }
   
}
//cat is catsObject
let cat = new Cat("cat", 'green', "Prosha")
console.log(cat.name.toUpperCase());
console.log(cat.nikName.toUpperCase())
console.log("Has eyes: " + cat.eyes);
cat.canEat()

// you can use two ways to set a property
//cat.setSkin("red fur with black stripes")//1
cat.skin = "red fur"//2
console.log(cat.skin)
cat.showBodyParts()
cat.moves()
cat.sayMeow()




