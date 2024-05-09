//Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same,
// but each message should be personalized with the person’s name.
// [] we use square brackets for array
var friendsName = ["Sehrish", "Mehwish", "Aniqa", "Andleeb"];
friendsName.forEach(function (friendName) { return console.log("hello ".concat(friendName, ", how are you")); });
