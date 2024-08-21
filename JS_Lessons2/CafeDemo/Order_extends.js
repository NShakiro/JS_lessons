//import SandwichClass from "./SandwichClass.js"
import SandwichClass from "./SandwichClass.js"

class Order extends SandwichClass {
   constructor(bread, cheese, topping, orderNumber) {
      // call the super class constructor and pass in the bread, cheese, topping parameters
      super(bread, cheese, topping)
      this.orderNumber = orderNumber

   }

   showSandwichIngredients() {
      console.log(`Yours sandwich ingredients are:\n ${this.bread} bread\n ${this.cheese} cheese\n topping - ${this.topping}`)
   }
}
let order = new Order('white', 'swiss', 'salmon', 1)
//console.log(order)
console.log(order.getSandwichName('salmon'))
order.showSandwichChoice()
order.showSandwichIngredients()
order.setPrice()


//=========================================================
// import   { turkeySandwich as TS  }  from './Sandwich.js'
// import showSandwichIngridients from './Sandwich.js'

//  console.log(TS)

//  showSandwichIngridients("salmon")

//js module is nothing than peace of code that can be shared this other files
// it can be class, function, variable or object
//you can use named, default exports 
//also you can rename by using "as" 
//or you can export multiple files together