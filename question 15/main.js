//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the name
// of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who
// can’t make it with the name of the new person you are inviting.
var GuestList = ["Mr Farrukh Saleem", "Mrs Madeeha Saleem", "Mr Shahrukh Saleem"];
var NotCome = GuestList[0];
console.log(NotCome, "Not Comming");
GuestList.splice(0, 1, "Miss Bushra Zaidi");
GuestList.forEach(function (Invite) { return console.log("I would like to invite ".concat(Invite, " for dinner")); });
