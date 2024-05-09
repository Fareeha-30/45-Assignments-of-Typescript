function makeSandwich(...Items: string[]){
console.log("\nmaking a sanwich with the following Items:\n");
Items.forEach(singleItem => console.log(singleItem));

console.log("\nNow enjoy Sandwich");
}

makeSandwich("Chicken", "Cheese", "mayo" , "Egg");
makeSandwich("Bread","Butter");
makeSandwich("Patty", "herbs", "tomato", "lettue", "Egg");