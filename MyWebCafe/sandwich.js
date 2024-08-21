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

let ask = prompt('Would you like to order?')

while( ask != "yes"){
     ask = prompt('Would you like to order?')
}
let askTopping = prompt('Choose from  bellow toopings: salmon - 1, turkey - 2, pepperoni - 3 ')

if (askTopping == 1) {
   topping = salmon
   sandwich = salmonSandwich
}
else if (askTopping == 3) {
   topping = pepperoni
   sandwich = pepperoniSandwich
}
else {
   topping = turkey
   sandwich = turkeySandwich
}


let step1 = `1. Take a piece of ${bread}`
let step2 = `2. Take a slice of ${cheese}`
let step3 = `3. Put cheese on bread`
let step4 = `4. Take a slice of ${topping}`
let step5 = `5. Put ${topping} on ${cheese}`
let result = `Your ${sandwich} is ready!`

 document.write(`Recipe for ${sandwich}  <br>` + "<br>" + step1 + "<br>" + step2 + "<br>" + step3 + "<br>" + step4 + "<br>" + step5 + "<br>", "<br>", result, "<br>")

// усложняем 

let price = 10

if (topping == salmon) { document.write("Order price is: $" + price * 1.5) }
else { document.write("Order price is: $" + price) }

   



