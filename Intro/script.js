//Exercise 1
//Write a JavaScript program to convert a length given in feet to meters.


let userInput = 100;
let feetPerMeter = 0.3048;

let conversion = userInput * feetPerMeter;
console.log(`The value of feet per meter is : ${conversion}`);


/*****************************************************************************************************/

//Exercise 2
//Write a JavaScript program that will read the two sides of a rectangle and calculate its area

let height = 5;
let width = 10;

let area = height * width;
console.log (`The area of rectangle is : ${area}`);

/******************************************************************************************************/

//Exercise 3
//Write a JavaScript program that will calculate area of Circle

let pi = 3.14;
let radius = 5;

let areaOfCirle = pi * radius * radius;

console.log (`The area of circle is : ${areaOfCirle}`);

/*******************************************************************************************************/

//HOMEWORK
//Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.


let phones = 30;
let priceOfPhone = 119.95;
let taxRate = (priceOfPhone / 100) * 5;

let allPhones = (priceOfPhone + taxRate) * phones;

console.log(`The price for ${phones} is : ${allPhones} $`);







