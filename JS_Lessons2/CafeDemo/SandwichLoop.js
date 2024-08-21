//Sandwich 
let bread = "black bread"
let cheese = "Swiss cheese"
let turkey = "smoked turkey"
let salmon = "wild salmon"
let pepperoni = "pepperoni"
let topping
let sandwich

let turkeySandwich = "sandwich with turkey"
let pepperoniSandwich = "sandwich with pepperoni"
let salmonSandwich = "sandwich with salmon"

//sandwich = pepperoniSandwich
topping = pepperoni // or turkey or salmon

if (topping == salmon) {
   sandwich = salmonSandwich
}
else if (topping == pepperoni) {
   sandwich = pepperoniSandwich
}
else {
   sandwich = turkeySandwich
}


let step1 = `1. Take a piece of ${bread}`
let step2 = `2. Take a slice of ${cheese}`
let step3 = `3. Put cheese on bread`
let step4 = `4. Take a slice of ${topping}`
let step5 = `5. Put ${topping} on ${cheese}`
let result = `Your ${sandwich} is ready!`


// усложняем 

// let price = 10
// let count = 1
// while(topping != salmon) {
//     console.log("Order price is: $" + price )
//     count++
// }
// { console.log("Order price is: $" + price * 1.5) }

// if (topping != turkey) {
//     console.log( "Sorry, we don\’t have that option now!")
// }


let menu = [turkeySandwich, pepperoniSandwich, salmonSandwich ]
for(let i= 0; i < menu.length; i++){
   // let menuItems ...
    console.log(menuItems)
}

