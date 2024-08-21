let coffee;
let size;
 coffee = "Americano";
// coffee = "Latte";
// coffee = "Cuppuccino";
size = "small";
size = "medium";
size = "big";
let priceSmall_$ = 3;
let priceMed_$ = 5;
let priceBig_$ = 7;
let recipeAmericano = "\n 1.Add 2 teaspoons of groundcoffe to the cup \n 2.Add 100ml of hot watter to the cup \n 3.Mix everything with teaspoon <br> <br> Enjoy your Americano"
let recipeLatte = "1.Add 2 teaspoons of groundcoffe to the cup <br>  2.Add 100ml of hot watter to the cup <br> 3. Add 50 ml of whole milk to the cup <br> 4.Mix everything with teaspoon <br> <br> Enjoy your Latte"
let recipeCuppuccino = "1.Add 2 teaspoons of groundcoffe to the cup <br>  2.Add 100ml of hot watter to the cup <br> 3.Mix everything with teaspoon <br> 4.Take 100 ml of hot whole milk and whisk it into foam with French press  5.Add milk foam to the cup with coffee <br> <br> Enjoy your Cuppuccino"

if (coffee === "Americano"){
    console.log (`Here is recipe for Americano ${recipeAmericano}`)
}
else if (coffee === "Latte"){
    console.log (`Here is recipe for Latte ${recipeLatte}`)
}
else {
    console.log (`Here is recipe for Cuppuccino ${recipeCuppuccino}`)
}
if (size == "small"){
console.log (`Your price is ${priceSmall_$} $`)
}
else if (size == "medium"){
    console.log (`Your price is ${priceMed_$} $`)
}
else {
    console.log (`Your price is ${priceBig_$} $`)
}