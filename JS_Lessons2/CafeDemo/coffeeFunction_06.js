/**
 * Внедрите в свой код с Кофе, как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.
 *
 */


//declare all variables
//let cupSize;
// let smallCup = "small cup";
// let mediumCup = "medium cup";
// let largeCup = "large cup";
// let water;
// let hotWater = "hot water";
// let coldWater = "cold water";
//let coffeeType;



function showWelcomeMessage() {
   console.log("Welcome to our self-service cafe!")
   console.log("We have different cup sizes. Please, choose one:\n")
}

function showCupsOptions() {
   let smallCup = "small cup"
   let mediumCup = "medium cup"
   let largeCup = "large cup"
   let price = 5

   let cupsOptions = [[smallCup, price], [mediumCup, (price * 1.5)], [largeCup, price * 2]]

   for (let i = 0; i < cupsOptions.length; i++) {
      console.log(cupsOptions[i][0] + '- ' + cupsOptions[i][1] + '$')

      if (i == cupsOptions.length - 1) {
         console.log('\n')
      }
   }
}

function showCoffeeTypesAndIngredients() {
   let latte = "Latte";
   let icedCoffee = "Iced Coffee";
   let beansArabica = 'Arabica ground beans';
   let beansEthiopian = 'Ethiopian ground beans'
   let hotWater = "hot water"
   let coldWater = "cold water"

   let latteIngredients = `${latte}:\n 1 spoon of ${beansArabica} \n ${hotWater} \n milk \n`
   let icedCoffeeIngredients = `${icedCoffee}: \n 1 spoon of ${beansEthiopian} \n ${coldWater} \n milk \n `

   console.log('We have following coffee types. Please, choose one: \n')
   let menu = [latteIngredients, icedCoffeeIngredients]

   for (let i = 0; i < menu.length; i++) {
      console.log(menu[i])
   }
}


function setWaterForCoffee(coffeeType) {
   if (coffeeType.toLowerCase() == 'iced coffee') {
      return water = 'cold water';
   } else {
      return water = 'hot water';
   }
}


function getCupPrice(cupSize) {
   let price = 5
   if (cupSize == "small") {
      return price
   }
   else if (cupSize == "medium") {
      return price *= 1.5

   } else if (cupSize == "large") {
      return price *= 2
   }
}


function showRecipeToClient(cupSize, coffeeType, isLactoseFree, milk = 'half&half') {
   let water = setWaterForCoffee(coffeeType)
   let price = getCupPrice(cupSize)

   let order = `You choosed a ${cupSize} cup of ${coffeeType.toUpperCase()} \n Follow the steps:`;
   let step1 = ` Take a ${cupSize} cup`;
   let step2 = " Put 1 spoon of coffee in it";
   let step3 = ` Pour ${water} in a cup with coffee`;
   let step4 = ` Pour ${milk} in a cup of coffee`;
   let step5 = " Stir coffee in a cup with a spoon";
   let orderPrice = `The order price is ${price}$`;
   let result = `Enjoy your coffee!`;

   //add steps to recipe
   let recipe = [step1, step2, step3, step4, step5]
   let stepNum = 1
   let clientRecipe = ''
   for (let i = 0; i < recipe.length; i++) {

      if (isLactoseFree == true && recipe[i] == step4) continue
      clientRecipe = clientRecipe + (stepNum ++) + recipe[i] + '\n'
   }
   console.log(order + '\n' + clientRecipe + '\n' + orderPrice + '\n' + result)

}

//============================================

showWelcomeMessage()
showCupsOptions()
showCoffeeTypesAndIngredients()

showRecipeToClient('small', 'latte', true)

//.log(getCupPrice("medium"));







// function showCoffee() {
//    let coffee = ''
//    for (let i = 0; i < receipt.length; i++) {
//       coffee = coffee + receipt[i] + '\n'
//    }
//    console.log(coffee)
// }

// showCoffee()

