let drink
let espresso = 'espresso'
let cappuccino = 'cappuccino'
let latte = 'latte'
let coffeeAmount = 7 //g freshly ground coffee

let size
let sizeS = 'small'
let sizeM = 'medium'
let sizeL = 'large'

let hotWater = 'ml hot water'
let hotWaterV = 40
let hotMilk = 'foamed hot milk'
let suggar = 'brown suggar'
let syrup = 'caramel syrup'

let menu = ['Espresso', 'Cappuccino', 'Latte']

let price = 1.5

// Welcome message

function greetings () {
  console.log('Welcome! Choose your drink for a good mood!')
}
greetings()

//Menu

function showingMenu () {
  for (let i in menu) {
    console.log(menu[i])
  }
}
showingMenu()

//Price

function showigPrice (price) {
  console.log('Our price:')
  console.log(`Small cup - ${price}$`)
  console.log(`Medium cup - ${price * 1.5}$`)
  console.log(`Large cup - ${price * 2}$`)
}
showigPrice(price)

// Make your coffee choice

drink = cappuccino
size = sizeS

if (size == sizeS) {
  price = 1.5
  coffeeAmount = 7
  hotWaterV = 40
} else if (size == sizeM) {
  price *= 1.5
  coffeeAmount *= 2
  hotWaterV *= 1.5
} else if (size == sizeL) {
  price *= 2
  coffeeAmount *= 3
  hotWaterV *= 2.25
} else console.log('Please! Сhoose cup size.')

//Steps

let order = `Make a ${size} cup of ${drink}:`
let step1 = `- Take a ${size} cup.`
let recipeEspS = `- Put ${coffeeAmount} g freshly ground coffee and pour ${hotWaterV} ${hotWater} in it.`
let step4 = `- Add ${hotMilk} in a cup with coffee.`
let step5 = `- Add ${suggar} or ${syrup}.`
let step6 = '- Mix all well with a teaspoon.'
let result = 'Enjoy!'

function makeCappucLatte () {
  console.log(
    order,
    '\n',
    step1,
    '\n',
    recipeEspS,
    '\n',
    step4,
    '\n',
    step5,
    '\n',
    step6,
    '\n'
  )
}

function makeEspresso () {
  console.log(
    order,
    '\n',
    step1,
    '\n',
    recipeEspS,
    '\n',
    step5,
    '\n',
    step6,
    '\n'
  )
}

if (drink == latte || drink == cappuccino) {
  add = hotMilk
  makeCappucLatte()
  console.log(`The order price is ${price}$`, '\n', result)
} else if (drink == espresso) {
  add = hotWater
  hotWaterV = 40
  makeEspresso()
  console.log(`The order price is ${price}$`, '\n', result)
} else console.log('Make your choice!')
