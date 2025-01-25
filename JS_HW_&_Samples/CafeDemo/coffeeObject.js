/**
 * Внедрите в свой код про кофе объект, там, где это может
 *  понадобиться. Добавьте комментарии в код с пояснениями
 *  изменений, зачем они нужны.
 */

//declare all variables
// let cupSize
// let smallCup = 'small cup'
// let mediumCup = 'medium cup'
// let largeCup = 'large cup'
// let water
// let hotWater = 'hot water'
// let coldWater = 'cold water'
// let price = 5
// let coffeeType
// let latte = 'Latte'
// let icedCoffee = 'Iced Coffee'
// let beansArabica = 'Arabica ground beans'
// let beansEthiopian = 'Ethiopian ground beans'

let coffee = {
  name: {
    latte: 'Latte',
    icedCoffee: 'Iced Coffee'
  },
  water: {
    hot: 'hot water',
    cold: 'cold water'
  },
  price: 5,
  cupSizes: {
    small: 'small',
    medium: ' medium',
    large: 'large'
  },
  milk: {
    whole: 'whole milk',
    reduced: 'reduced fat milk',
    almond: 'almond milk',
    lactozeFree: 'lactoze free milk'
  },
  beans: {
    arabica: 'Arabica',
    ethiopian: 'Ethiopian'
  }
}

let latte = {
  name: coffee.name.latte,
  milk: coffee.milk.whole,
  coffeeAmount: '1 tea spoun',
  beans: coffee.beans.arabica,
  water: coffee.water.hot
}
// console.log('Welcome to our self-service cafe!')
// console.log('We have different cup sizes. Please, choose one:\n')

//Show cup sizes and thier prices
function displayAllPrices () {
  let price = coffee.price
  for (let i in coffee.cupSizes) {
    if (i == 'medium') price *= 1.5
    else if (i == 'large') price *= 2
    console.log(i + ' - ' + price + ' $')
  }
}
 displayAllPrices()

//Show coffee types with ingredients
console.log('We have following coffee types: \n')
function displayAllCoffeeTypes () {
  for (let i in coffee.name) {
    console.log(i)
  }
}
displayAllCoffeeTypes()

function displayLatteIngredients () {
  console.log(
    latte.name.toUpperCase() + ':',
    '\n',
    latte.milk,
    '\n',
    latte.water,
    '\n',
    latte.beans,
    '\n'
  )
}
displayLatteIngredients()

// //Make a choice
// coffeeType = icedCoffee
// cupSize = smallCup

// if (coffeeType == icedCoffee) {
//   water = coldWater
// } else {
//   water = hotWater
// }

// if (cupSize == mediumCup) {
//   price *= 1.5
// } else if (cupSize == largeCup) {
//   price *= 2
// }

// //Output for client
// let order = `You choosed a ${cupSize} of ${coffeeType} \n Follow the steps:`
// let step1 = ` Take a ${cupSize}`
// let step2 = ' Put 1 spoon of coffee in it'
// let step3 = ` Pour ${water} in a cup with coffee`
// let step4 = ' Pour milk in a cup of coffee'
// let step5 = ' Stir coffee in a cup with a spoon'
// let orderPrice = `The order price is ${price}$`
// let result = `Enjoy your coffee!`

// //add steps to recipe
// let recipe = [step1, step2, step3, step4, step5]
// let clientRecipe = ''
// let isLactoseFree = true
// for (let i = 0; i < recipe.length; i++) {
//   if (isLactoseFree == true && recipe[i] == step4) continue
//   clientRecipe = clientRecipe + (i + 1) + recipe[i] + '\n'
// }
// console.log(order + '\n' + clientRecipe + '\n' + orderPrice + '\n' + result)

// // let coffee = ''
// // for (let i = 0; i < receipt.length; i++) {
// //   coffee = coffee + receipt[i] + '\n'
// // }
// // console.log(coffee)
