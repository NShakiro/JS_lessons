let cupSize;
let smallCup = "small cup";
let mediumCup = "medium cup";
let largeCup = "large cup";
let water;
let hotWater = "hot water";
let coldWater = "cold water";
let price = 5;
let coffeeType;
let latte = "Latte";
let icedCoffee = "Iced Coffee";

//make a choice
coffeeType = icedCoffee;
cupSize = smallCup;

alert("Hello!");
if (coffeeType == icedCoffee) {
    water = coldWater;
} else {
    water = hotWater;
}

//show cup sizes 
console.log("Welcome to our self-service cafe!")
console.log("We have different cup sizes. Please, choose one:\n")
let cupSizes = [smallCup, mediumCup, largeCup]
for (let i in cupSizes) {
    if (cupSizes[i] == smallCup) {
        console.log(cupSizes[i] + '- ' + price + '$')
    }
    else if (cupSizes[i] == mediumCup) {
        price *= 1.5
        console.log(cupSizes[i] + '- ' + price + '$')
    }
    else if (cupSizes[i] == largeCup) {
        price *= 2
        console.log(cupSizes[i] + '- ' + price + '$')
    }
    if (i == cupSizes.length - 1) {
        console.log('\n')
    }
}

//show coffee types
let latteRecipe = "Latte:\n 1 spoon of coffee \n Hot water \n Milk \n"
let icedCoffeeRecipe = "Iced Coffee: \n 1 spoon of coffee \n Cold water \n Milk \n "

console.log('We have following coffee types: \n')
let menu = [latteRecipe, icedCoffeeRecipe]
for (let i = 0; i < menu.length; i++) {
    console.log(menu[i])

}


// steps for coffee recipe
let order = `You choosed a ${cupSize} of ${coffeeType} <br> Follow the steps:`;
let step1 = `1. Take a ${cupSize}`;
let step2 = "2. Put 1 spoon of coffee in it";
let step3 = `3. Pour ${water} in a cup with coffee`;
let step4 = "4. Pour milk in a cup of coffee";
let step5 = "5. Stir coffee in a cup with a spoon";
let orderPrice = `The order price is ${price}$`;
let result = `Enjoy your coffee!`;


//add steps to receipt
let receipt = [order, step1, step2, step3, step4, step5, orderPrice, result]
let coffee = ''
for (let i = 0; i < receipt.length; i++) {
    coffee = coffee + receipt[i] + '<br>'
}
document.write(coffee)




