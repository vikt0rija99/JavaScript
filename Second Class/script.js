/* EXERCISE - #1
Decription: Using prompt() display a dialog box that prompts the visitor for input. Will return null on 'Cancel' or the value provided on 'Ok'
Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do */

//let userName = prompt("Hi whats your name :) ?");

// if(userName != null){
//     console.log(`Helloo ${userName}`);
// };

// //let userMoney = prompt("How much money you have?");
// userName = '';

// if(userMoney >= 30){
//     console.log(`${userName} should go out`);
// } else if (userMoney <=30){
//     console.log(`${userName} should stay home`);
// } else{
//     console.log (`${userName} enter the sum`);
// };

/*HOMEWORK
Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig */

let inputYear = prompt('Enter a year');

switch ((inputYear - 4) % 12){
    case 0:
        console.log('Rat');
        break;
    case 1:
        console.log('Ox');
        break;
    case 2:
        console.log('Tiger');
        break;
    case 3:
        console.log('Rabbit');
        break;
    case 4:
        console.log('Dragon');
        break;
    case 5:
        console.log('Snake');
        break;
    case 6:
        console.log('Horse');
        break;
    case 7:
        console.log('Goat');
        break;
    case 8:
        console.log('Monkey');
        break;
    case 9:
        console.log('Rooster');
        break;
    case 10:
        console.log('Dog');
        break;
    case 11:
        console.log('Pig');
        break;
    default:
        console.log('default');    
}