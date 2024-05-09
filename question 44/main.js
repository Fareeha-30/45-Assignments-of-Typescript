function makeSandwich() {
    var Items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Items[_i] = arguments[_i];
    }
    console.log("\nmaking a sanwich with the following Items:\n");
    Items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy Sandwich");
}
makeSandwich("Chicken", "Cheese", "mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Patty", "herbs", "tomato", "lettue", "Egg");
