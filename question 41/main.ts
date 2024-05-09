//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians()
 //which prints the name of each magician in the array.

 function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
 }

 // define an array containg magicians name
 let magician_names = ["Raza", "Rayyan" , "Ali"]

 show_magicians(magician_names)