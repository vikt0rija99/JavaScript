// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs

let userInput1 = prompt("Please enter name!");
let userInput2 = prompt("Please enter kind!");
let message = prompt("Please enter message");

let animal = {
    name: userInput1,
    kind: userInput2,
    speak: function (message) {
        return "My " + this.name + " is a " + this.kind + ". And " + this.name + " want to say: " + "'" + message + "!'";
    }
}


console.log(animal.speak(message));

// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML


var library = [ 
    {
        title: 'The Robots of dawn',
        author: 'Isaac Asimov',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

    for (let i = 0; i < library.length; i++) 
   {
    let book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }
