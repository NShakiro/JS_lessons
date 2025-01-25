//this function will greet customer
//name- to enter the customer's name
function greetCustomer(name) {
   let greetings = `Hi, ${name}! \nWelcome to our self-coffee!\n`
   console.log(greetings)
}
greetCustomer("Anna")

//this function will set appropiate coffee recipe
//coffeeType - to enter the coffeeType that customer wants
function setCoffeeRecipe(coffeeType) {
   let coffeeRecipe = `You choosed a ${coffeeType}, bellow is your recipe:\n1.Pour water in a cup with coffee\n2.Pour milk in a cup of coffee\n3.Stir coffee in a cup with a spoon\n`
   if (coffeeType == 'IcedCoffee') {
      chosenCoffee = coffeeRecipe.replace('water', 'cold water')
   }
   else if (coffeeType == 'Latte') {
      chosenCoffee = coffeeRecipe.replace('water', 'hot water')
   }
   else (chosenCoffee = "Sorry, we don't have this coffee type right now")

   return chosenCoffee
}
console.log(setCoffeeRecipe('IcedCoffee'))

//this function will set the price accordingly to cup size 
function setCoffeePrice(cupSize) {
   let price = 10
   if (cupSize == 'medium') {
      price *= 1.5
   }
   else if (cupSize == 'large') {
      price *= 2
   }
   return price
}
//console.log(setCoffeePrice("small"))

//this function will show coffee price to customer
function showCoffeePrice(cupSize) {
   let price = setCoffeePrice(cupSize)
   console.log(`The order price is ${price}$`)
}
showCoffeePrice("small")

