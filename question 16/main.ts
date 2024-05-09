// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end
// of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


//creating guestlist array
let Guestlist = ["Farrukh","Madiha","Shahrukh"];

// making var for those who re nit comiing
let NotComing = Guestlist[0];

//print the
console.log(NotComing, "Can't Come");

//
Guestlist.splice(0,1, "Bushra");

//print message for guests
console.log("Good News ! we have found a bigger table for Dinner.");

//adding a new guest at starting index
Guestlist.unshift("Sameen");

//adding new name in ending index
Guestlist.push("Marziya");

//adding a new guest in middle index array
let middleIndex: number = Math.floor(Guestlist.length / 2);

//adding a new g)uest to middle index of array
Guestlist.splice(middleIndex,0, "Irtiza");

//print message of updated list
console.log("update list of our guest")

//sending an invitation msg to our guest
Guestlist.forEach(oneguest => console.log(`I would like to invite ${oneguest} for a dinner`));