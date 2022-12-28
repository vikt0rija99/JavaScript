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
//console.log(sums(5,10)); ...

// EXERCISE - 2
/* Decription: Celsius to Fahrenheit formula: X°C x 1.8 + 32
Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
Bonus: Write another function that will be able to convert Fahrenheit to Celsius and display the result. Formula: (5/9) * (Fahrenheit-32); */


function celsiusToFahrenheit (celsius){
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

// console.log(celsiusToFahrenheit(10) + " " + "Fahrenheit");

function fahrenheitToCelsius (fahrenheit){
    let celsius = (5/9) * (fahrenheit - 32);
    return celsius;
}

// console.log(fahrenheitToCelsius(100) + " " + "Celsius");

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

// console.log (`You are ${calculateAge(1992)} years old`);
// console.log (`You are ${calculateAge(1998)} years old`);
// console.log (`You are ${calculateAge(1972)} years old`);

// HOMEWORK PART 1
// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

// object
// boolean
// number
// string
// undefined

