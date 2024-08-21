/**
 * Внедрите в свой код про кофе цикл, там, где это может понадобиться. Добавьте комментарии в код с пояснениями изменений, зачем они нужны.
 *
 */


//declare all variables
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
let beansArabica = 'Arabica ground beans';
let beansEthiopian = 'Ethiopian ground beans'


function showWelcomeMessage(){
   console.log("Welcome to our self-service cafe!")
   console.log("We have different cup sizes. Please, choose one:\n")
}

//Show cup sizes and thier prices
function showCupSizes(){}
let cupSizes = [smallCup, mediumCup, largeCup]
for (let i in cupSizes) {
   if (cupSizes[i] == smallCup) {
      console.log(cupSizes[i] + '- ' + price + '$')
   }
   else if (cupSizes[i] == mediumCup) {
      console.log(cupSizes[i] + '- ' + price * 1.5 + '$')
   }
   else if (cupSizes[i] == largeCup) {
      console.log(cupSizes[i] + '- ' + price * 2+ '$')
   }
   if (i == cupSizes.length - 1) {
      console.log('\n')
   }
}

//Show coffee types with ingredients
let latteIngredients = `${latte}:\n 1 spoon of ${beansArabica} \n ${hotWater} \n milk \n`
let icedCoffeeIngredients = `${icedCoffee}: \n 1 spoon of ${beansEthiopian} \n ${coldWater} \n milk \n `

console.log('We have following coffee types: \n')
let menu = [latteIngredients, icedCoffeeIngredients]

for (let i = 0; i < menu.length; i++) {
   console.log(menu[i])
}


//Make a choice
function makeChoice(coffeeType, cupSize = small) {
   //  = icedCoffee;
   //  = smallCup;

   if (coffeeType == icedCoffee) {
      return water = coldWater;
   } else {
      return water = hotWater;
   }

   if (cupSize == mediumCup) {
     return price *= 1.5
   }
   else if (cupSize == largeCup) {
      return price *= 2
   }
}

//Output for client
let order = `You choosed a ${cupSize} of ${coffeeType} \n Follow the steps:`;
let step1 = ` Take a ${cupSize}`;
let step2 = " Put 1 spoon of coffee in it";
let step3 = ` Pour ${water} in a cup with coffee`;
let step4 = " Pour milk in a cup of coffee";
let step5 = " Stir coffee in a cup with a spoon";
let orderPrice = `The order price is ${price}$`;
let result = `Enjoy your coffee!`;


//add steps to recipe
let recipe = [ step1, step2, step3, step4, step5]
let clientRecipe = ''
let isLactoseFree = true
for (let i = 0; i < recipe.length; i++) {
   
   if (isLactoseFree == true && recipe[i] == step4) continue
   clientRecipe = clientRecipe + (i + 1)+ recipe[i] + '\n'
}
console.log(order + '\n' + clientRecipe + '\n' + orderPrice + '\n' + result)









function showCoffee() {
   let coffee = ''
   for (let i = 0; i < receipt.length; i++) {
      coffee = coffee + receipt[i] + '\n'
   }
   console.log(coffee)
}

showCoffee()

