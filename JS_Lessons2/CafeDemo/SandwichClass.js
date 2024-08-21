//export default 
export default class SandwichClass {

   constructor(bread, cheese, topping) {
      this.bread = bread
      this.cheese = cheese
      this.topping = topping
   }

   getSandwichName() {
      if (this.topping == 'salmon') {
         return 'Salmon Sandwich'
      }
      else if (this.topping == 'pepperoni') {
         return 'Pepperoni Sandwich'
      }
      else if (this.topping == 'turkey') {
         return 'Turkey Sandwich'
      }
   }
 
   showSandwichChoice() {
    
      if (this.topping == 'salmon') {
         console.log(`You choosed ` + this.getSandwichName())
      }
      else if (this.topping == 'pepperoni') {
         console.log(`You choosed ` + this.getSandwichName())
      }
      else if (this.topping == 'turkey') {
         console.log(`You choosed ` + this.getSandwichName())
      }
   }

   setPrice() {
      let price = 10
      if (this.topping == "salmon") { console.log("Order price is: $" + price * 1.5) }
      else { console.log("Order price is: $" + price) }
   }

}
let sandwich = new SandwichClass('white', "swiss", "salmon")
//let name = sandwich.getSandwichName()
console.log(sandwich.getSandwichName())

// class Order extends SandwichClass {
//    constructor(bread, cheese, topping, orderNumber) {
//       // call the super class constructor and pass in the bread, cheese, topping parameters
//       super(bread, cheese, topping)
//       this.orderNumber = orderNumber

//    }

//    showSandwichIngredients() {
//       console.log(`Your sandwich ingredients are:\n ${this.bread} bread\n ${this.cheese} cheese\n topping - ${this.topping}`)
//    }
// }
// let order = new Order('white', 'swiss', 'salmon', 1)
// //console.log(order)
// console.log(order.getSandwichName('salmon'))
// order.showSandwichChoice()
// order.showSandwichIngredients()
// order.setPrice()