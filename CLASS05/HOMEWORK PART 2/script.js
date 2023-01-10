// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let body = document.getElementsByTagName("body")[0];
let myDiv = document.createElement("div");
body.appendChild(myDiv);

let myList = document.createElement("ul");
myDiv.appendChild(myList);


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    let list = document.createElement("li");
    list.innerHTML = array[i];
    myList.appendChild(list);
}

let result = 0;
let equasion = "";
for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i === 0) {
        equasion += "( " + array[i];
    }
    else {
        equasion += " + " + array[i];
    }
    if (i === array.length - 1) {
        equasion += " = " + result + " )"
    }
}

let text = document.createElement("text");
text.innerText = "Sum off all numbers in array is: " + equasion;
myDiv.appendChild(text);