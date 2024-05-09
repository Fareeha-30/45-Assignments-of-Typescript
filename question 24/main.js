// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["banana", "mango", "apple", "watermelon", "grapes"];
// test for equality and inequality with strings
console.log("Is apple equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple not equal to apple?");
console.log(apple != "apple");
// Test using lowercase function
console.log("\nis APPLE equal to apple afer converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nis APPLE not equal to apple afer converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical tests involving equality and inequality,
//greater than and less than, greater than or equal to, and less than or equal to
console.log("\nis ten equal to twenty?");
console.log(ten == twenty);
console.log("\nis ten not  equal to twenty?");
console.log(ten != twenty);
console.log("\nis ten greater than zero?");
console.log(ten > 0);
console.log("\nis twenty less than 10?");
console.log(twenty < 10);
console.log("\nis ten greater than or equal to five?");
console.log(ten >= 5);
console.log("\nis twenty is less than or equal to ten?");
console.log(twenty <= ten);
// Tests using "and" and "or" operators
console.log("\ntwenty is not equals to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equals to 10 and twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30);
console.log("\ntwenty is greater than 50 or twenty is equal to 20?");
console.log(twenty > 50 || twenty == 20);
console.log("\ntwenty is not equals to 20 or twenty is greater than 40?");
console.log(twenty != 20 || twenty > 40);
//Test whether an item is in a array
console.log("\nIs grapes add in my fruits array?");
//Changes in TSC conf file es 2016 and DOM
console.log(fruits.includes("grapes"));
console.log("\nIs grapes not added in my fruits array?");
console.log(!fruits.includes("grapes"));
