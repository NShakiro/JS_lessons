//Sandwich 
let bread = "black bread"
let cheese = "Swiss cheese"
let turkey = "smoked turkey"
let salmon = "wild salmon"
let pepperoni = "pepperoni"


//variant 1
export const turkeySandwich = {
   name: "sandwich with turkey",
   bread: "black",
   cheese: "swiss",
   topping: "turkey",
} 
const pepperoniSandwich = {
   name: "sandwich with pepperoni",
   bread: "white",
   cheese: "mozarella",
   topping: "pepperoni",
} 
const salmonSandwich = {
   name: "sandwich with salmon",
   bread: "whole weat",
   cheese: "cheddar",
   topping: "salmon",
}  

const sandwichNames = {
   salmon : "sandwich with salmon",
   turkey : "sandwich with turkey",
   pepperoni : "sandwich with pepperoni",
};


export default function showSandwichIngridients(topping){
   console.log(`Ingredients for your ${sandwichNames[topping]}\n` )
   if (topping == 'salmon') {
     for(let el in salmonSandwich){
         if (el == "name") continue
        console.log( el + " : " + salmonSandwich[el])
     }
   }
   else if (topping == 'pepperoni') {
      for(let el in pepperoniSandwich){
         if (el == "name") continue
         console.log( el + " : " + pepperoniSandwich[el])
      }
   }
   else if (topping == 'turkey') {
      for (let el in turkeySandwich) {
         if (el == "name") continue
         console.log( el + " : " + turkeySandwich[el])
      }
   }
   
}

let price = 10

function setPrice(topping) {
   if (topping == salmon) { console.log("Order price is: $" + price * 1.5) }
   else  console.log("Order price is: $" + price) 
    
}

showSandwichIngridients("turkey")
setPrice(turkey)
