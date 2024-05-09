//Shrinking Guest List: You just found out that your new dinner table won’t
//arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16.
//Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//Each time you pop a name from your list, print a message to that person letting them
//know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
//Print your list to make sure you actually have an empty list at the end of your program.
//creating guestlist array
var Guestlist = ["Farrukh", "Madiha", "Shahrukh"];
// making var for those who re nit comiing
var NotComing = Guestlist[0];
//print the
console.log(NotComing, "Can't Come");
//
Guestlist.splice(0, 1, "Bushra");
//print message for guests
console.log("Good News ! we have found a bigger table for Dinner.");
//adding a new guest at starting index
Guestlist.unshift("Sameen");
//adding new name in ending index
Guestlist.push("Marziya");
//adding a new guest in middle index array
var middleIndex = Math.floor(Guestlist.length / 2);
//adding a new g)uest to middle index of array
Guestlist.splice(middleIndex, 0, "Irtiza");
//print message of updated list
console.log("update list of our guest");
//sending an invitation msg to our guest
Guestlist.forEach(function (oneguest) { return console.log("I would like to invite ".concat(oneguest, " for a dinner")); });
// 17th assignment start
//inform guest about only 2 ppl can come
//inform thst only 2 guests should be invited
console.log("Unfortunately, the new dinner table won't arrive , so i can only invite two Guests for dinner");
// using while-loop to remove guests from the array until only two names left
while (Guestlist.length > 2) {
    var removeGuest = Guestlist.pop();
    console.log("Sorry, ".concat(removeGuest, " I cant invite you for dinner"));
}
//sending invitation for last two lefties
console.log("Invitation to the last two guests");
Guestlist.forEach(function (lasttwo) { return console.log("luckily ".concat(lasttwo, ", You are still invited to dinner")); });
//remove those who left 
Guestlist.pop();
Guestlist.pop();
console.log("Empty List:", Guestlist);
