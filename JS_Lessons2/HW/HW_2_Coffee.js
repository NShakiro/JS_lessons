let cup
let smallCup = 'small cup'
let mediumCup = 'medium cup'
let largeCup = 'large cup'
let water
let hotWater = 'hot water'
let coldWater = 'cold water'
let price = 5
let coffeeType
let latte = 'Latte'
let icedCoffee = 'Iced Coffee'

//make your choice here
coffeeType = icedCoffee
cup = smallCup

if (coffeeType == icedCoffee) {
    water = coldWater
}else {
    water = hotWater
}


if (cup == mediumCup) {
    price *= 1.5
}else if (cup == largeCup) {
    price *= 2
}

let order = `Make one ${cup} of ${coffeeType}:`
let step1 = `1. Take a ${cup}`
let step2 = '2. Put 1 spoon of coffee in it'
let step3 = `3. Pour ${water} in a cup with coffee`
let step4 = '4. Pour milk in a cup of coffee'
let step5 = '5. Stir coffee in a cup by a spoon'
let orderPrice = `The order price is ${price}$`
let result = `Enjoy your coffee!`
  
console.log(order,'\n',
    step1,'\n',
    step2,'\n',
    step3,'\n',
    step4,'\n',
    step5,'\n',
    orderPrice,'\n',result
)
