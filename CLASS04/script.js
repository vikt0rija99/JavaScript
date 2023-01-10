// EXAMPLE
// Action: Write a JavaScript program to read ten array values, determine the largest value, and print it

let array = [10,23,8,99,5,-18,33,50,48,2];

function largestValueInArray(array){
    let largestValue = array[0];
    for (let i = 0; i < array.length; i++){
        let element = array[i];
        if(element > largestValue){
            largestValue = element;
        }
    }
    return largestValue;
}


let result = largestValueInArray(array);

console.log(`The Biggest Number is: ${result} `);


// STUDENT EXERCISE
// Decription: The Math object allows you to perform mathematical tasks.
// Math.pow(x,y); - Returns the value of x to the power of y
// Action: Write a JavaScript program to write the sum of squares of the numbers from 101 to 150


function sumOfSquares (x,y){
    let sum = 0;
    let i = x;
    while (i <= y) { 
       sum += Math.pow(i, 2);
       i++;
    } 
    return sum;
}
console.log(sumOfSquares(10, 30));
console.log(sumOfSquares(101, 150));
 
// EXAMPLE
// Action: Write a JavaScript program that will read in a number and write out its digits

function digitsCount(number) {
    let count = 0;
    if (number >= 1) ++count;
    while (number / 10 >= 1) {
      number /= 10;
      ++count;
    }

    return count;
  }
  
  console.log(digitsCount(1202));


//   HOMEWORK #1
//   Create a function called tellStory()
  
//   The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
  
//   The function should return one big string with a story made from the arguments
  
//   Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
  
//   The value that is returned from the function should be printed in the console or in alert

let arguments = ["Viktorija", "good","learning"];

function tellStory(arguments){
    console.log(`This is ${arguments[0]}. ${arguments[0]} is a nice person. Today they are ${arguments[1]}.They are ${arguments[2]} all day.The end.`);
    
    }

tellStory(arguments);



// HOMEWORK #2

// Write a function that will take an array of 5 numbers as an argument and return the sum.

// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

function sumArray(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {;
        let isValid = validateNumber(array[i]);
        if (!isValid ) {
            return `${array[i]} is not the valid number`;
        }
        result += array[i];
    }
    return result;
}

function validateNumber(num){
    if(typeof (num) === 'number' && !Number.isNaN(num)){
        return true;
    }
    return false;
}

console.log(sumArray([59,6,18,23,10]));
console.log(sumArray([1,8,"arr",50]));


// HOMEWORK #3
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

function stringArr(arr){
    let result = ' ';
    for(let i = 0; i < arr.length; i++){
        if (i === 0 || i === arr.length - 1){
            result += arr[i];
        }else {
            result += ' ' + arr[i];
        }
    }
    return result;
}

console.log(stringArr(["Hello", "there", "students", "of", "SEDC", "!"]));


// let stringsArray = ["Hello", "there", "students", "of", "SEDC", "!"];
// let resultString = stringsArray.join();
// console.log(resultString);



// HOMEWORK #4
// Title: Looping structures

// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

function joinNumbers(interateTo) {
    let result = "";
    for (let i = 1; i <= interateTo; i++) {
        if (i % 2 === 0) {
            result += i + "\n";
        } else {
            result += i + " ";
        }
    }
    return result;
}
console.log(joinNumbers(20));


// HOMEWORK #5
// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

function validateNumber(num) {
    if (typeof (num) !== "number") {
        return false;
    }
    return true;
}

function minMaxSum(array) {
    let max = array[1];
    let min = array[1];
    for (let i = 0; i < array.length; i++) {
        let isValid = validateNumber(array[i]);
        if (!isValid) {
            continue;
        }
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log("Max:" + max + " Min:" + min + " Sum:" + (max + min));
}
minMaxSum([3, 5, 6, true, 8, "a", 11,]);



// HOMEWORK #6
// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

function combineName(firstNames, lastNames) {
    let full = [];
    for (let i = 0; i < firstNames.length; i++) {
        let student = (i + 1) + ". " + firstNames[i] + " " + lastNames[i];
        full.push(student);
    }
    return full;
}
let full = combineName(["Bob", "Jill"], ["Gregory", "Wurtz"]);
console.log(full);