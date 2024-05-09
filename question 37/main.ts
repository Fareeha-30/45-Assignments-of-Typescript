// Large Shirts: Modify the make_shirt() function so that shirts are large by default with
// a message that reads I love TypeScript. Make a large shirt and 
// a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirt(size: string = "Large", printMessage: string = "I love Typerscript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

//calling a funtion
make_shirt();


//calling a function now with medium size and default message]
make_shirt("Medium");


// calling a funtion with small size and different print message

make_shirt("Small", "I love JavaScript")
