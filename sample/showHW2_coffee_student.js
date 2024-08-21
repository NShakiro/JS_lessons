let water = 'filtered water';
let beans = 'medium roast ground beans';
let milk = 'lactose free milk';
let coffee = 'cappuccino'; // latte/cappuccino/espresso
let size = 'large'; // small/medium/large
let price = 3;

console.log("Welcome to the Andy's coffeshop! What can i get for you?")
if (coffee === 'latte') {
   console.log(`Perfect! Your ${size} ${coffee} will be ready shortly!`);
   console.log(`1. Poor ${water} in the water bin.`);
   console.log(`2. Fill the bean container with ${beans}.`);
   console.log(`3. Grind the ${beans} into a portafilter.`);
   console.log('4. Install the portafilter into the extraction space.');
   console.log(`5. Push "Brew" button to start pouring shot of espresso into a ${coffee} ${size} cup.`);
   console.log(`6. Poor some ${milk} into a jug.`);
   console.log(`7. Place the jug with ${milk} on the sensor and push "Milk" button to start milk frothing process.`);
   console.log(`8. Poor frothed ${milk} into the ${coffee} ${size} cup with the shot of espresso. 
        //BARISTA REMINDER// ${coffee} = 30% coffee/60% steamed milk/10% milk foam on top.`);
   if (size === 'small') {
      price++
      console.log(`Your total will be $${price} for ${size} ${coffee}. Enjoy your coffee and have a great day!`);
   } else if (size === 'medium') {
      price += 2
      console.log(`Your total will be $${price} for ${size} ${coffee}. Enjoy your coffee and have a great day!`);
   } else {
      price *= 2
      console.log(`Your total will be $${price} for ${size} ${coffee}. Enjoy your coffee and have a great day!`);
   }
   console.log('\n' + '9. Clean your workspace before starting a new order!');
} else if (coffee === 'cappuccino') {
   console.log(`Perfect! Your ${size} ${coffee} will be ready shortly!`);
   console.log(`1. Poor ${water} in the water bin.`);
   console.log(`2. Fill the bean container with ${beans}.`);
   console.log(`3. Grind the ${beans} into a portafilter.`);
   console.log('4. Install the portafilter into the extraction space.');
   console.log(`5. Push "Brew" button to start pouring shot of espresso into a ${coffee} ${size} cup.`);
   console.log(`6. Poor some ${milk} into a jug.`);
   console.log(`7. Place the jug with ${milk} on the sensor and push "Milk" button to start milk frothing process.`);
   console.log(`8. Poor frothed ${milk} into the ${coffee} ${size} cup with the shot of espresso. 
        //BARISTA REMINDER// ${coffee} = 30% coffee/35% steamed milk/35% milk foam on top.`);
   if (size === 'small') {
      price++
      console.log(`Your total will be $${price} for ${size} ${coffee}. Enjoy your coffee and have a great day!`);
   } else if (size === 'medium') {
      price += 2
      console.log(`Your total will be $${price} for ${size} ${coffee}. Enjoy your coffee and have a great day!`);
   } else {
      price *= 2
      console.log(`Your total will be $${price} for ${size} ${coffee}. Enjoy your coffee and have a great day!`);
   }
   console.log('\n' + '9. Clean your workspace before starting a new order!');
} else if (coffee === 'espresso') {
   console.log(`Perfect! Your ${size} ${coffee} will be ready shortly!`);
   console.log(`1. Poor ${water} in the water bin.`);
   console.log(`2. Fill the bean container with ${beans}.`);
   console.log(`3. Grind the ${beans} into a portafilter.`);
   console.log('4. Install the portafilter into the extraction space.');
   console.log(`5. Push "Brew" button to start pouring ${size} shot of espresso into a ${coffee} cup.`);
   if (size === 'single') {
      console.log(`Your total will be $${price} for ${size} ${coffee}. Enjoy your coffee and have a great day!`);
   } else {
      price++
      console.log(`Your total will be $${price} for ${size} ${coffee}. Enjoy your coffee and have a great day!`);
   }
   console.log('\n' + '6. Clean your workspace before starting a new order!');
} else {
   console.log(`I'm so sorry, but we do not do ${coffee} for now.`);
}