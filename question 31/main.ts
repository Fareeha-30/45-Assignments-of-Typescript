// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


//step 1
let userNames = ["Fareeha","Madiha","Bushra","Admin","Zainab"]

//step 2
userNames = []

if(userNames.length === 0){
    console.log("list is empty We need to find some users!")
}else{

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would You like to see a Status report?`)
}else{
    console.log(`Hello ${oneUser}, Thank you for logging in again.`)
}
})
}