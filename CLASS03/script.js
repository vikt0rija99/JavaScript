// EXERCISE 1

// Function that sums 2 numbers
function sums (x,y){
    let result = x + y;
    return result;
}

// Function that subtracts 2 numbers
function subtracts (x,y){
    let result = x - y;
    return result;
}

// Function that multiplies 2 numbers
function multiplies (x,y){
    let result = x * y;
    return result;
}

// Function that divides 2 numbers
function divides (x,y){
    let result = x / y;
    return result;
}

// Calling function 
console.log(sums(5,10));
console.log(subtracts(10,5));
console.log(multiplies(5,10));
console.log(divides(10,5));

// EXERCISE - 2
/* Decription: Celsius to Fahrenheit formula: X°C x 1.8 + 32
Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
Bonus: Write another function that will be able to convert Fahrenheit to Celsius and display the result. Formula: (5/9) * (Fahrenheit-32); */


function celsiusToFahrenheit (celsius){
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(10) + " " + "Fahrenheit");

function fahrenheitToCelsius (fahrenheit){
    let celsius = (5/9) * (fahrenheit - 32);
    return celsius;
}

console.log(fahrenheitToCelsius(100) + " " + "Celsius");

// STUDENT EXERCISE - #3
// THE AGE CALCULATOR
// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the age based on those years.
// outputs the result to the screen like so: "You are NN years old"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

let currentYear = new Date().getFullYear();
function calculateAge (birthYear){
    let yearOfBirth = currentYear - birthYear;
    return yearOfBirth;
}

console.log (`You are ${calculateAge(1992)} years old`);
console.log (`You are ${calculateAge(1998)} years old`);
console.log (`You are ${calculateAge(1972)} years old`);

// HOMEWORK PART 1
// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

// object
// boolean
// number
// string
// undefined


function checkType(value){
    let userInput = value;
    if(userInput === Object){
        console.log(typeof userInput);
    } else if (userInput === true){
        console.log(typeof userInput);
    }else if(userInput === Infinity){
        console.log(typeof userInput);
    }else if (userInput === " "){
        console.log(typeof userInput);
    }else if (userInput === undefined){
        console.log(typeof userInput);
    }else{
        console.log(typeof userInput);
    }
}
checkType({});
checkType(false);
checkType(45);
checkType("");
checkType();


// HOMEWORK PART 2
// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well

function dogToHuman(age){
    let dogYears = 7 * age;
    console.log(`Your dog is ${dogYears} years old`);
}

dogToHuman(5);

function humanToDog (age){
    let humanToDog = 7 / age;
    console.log(`You are ${humanToDog} years old`);
}

humanToDog(5);

// HOMEWORK PART 3
// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

let userInput =parseInt( prompt("How much money you want to withdraw"));
let amountCash = 1000;
let balance = amountCash - userInput;

function validateAmount (){
    if(Number.isNaN(userInput)){
        console.log("Please enter numeric value");
    }
}

function withdrawAmount () {
    if(amountCash < userInput || userInput === 0 ){
        console.log ("Insufficient funds");
    } else if (amountCash >= userInput){
        console.log(`Successful transaction! Current Balance is ${balance}`)
    } else {
        console.log("Enter amount you want to withdraw");
    }
}


validateAmount ();
withdrawAmount();
