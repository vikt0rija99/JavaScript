// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use google! :)

function createTable()
{
rn = window.prompt("Input number of rows");
cn = window.prompt("Input number of columns");
  
 for(let r = 0; r <parseInt (rn,10) ; r++){
   let x = document.getElementById ('myTable').insertRow(r);
   for(let c = 0; c<parseInt(cn,10); c++)  {
     let y = x.insertCell(c);
     y.textContent = `${r + 1}. ${c + 1}`
     y.style.border = '1px solid black';
    }
   }
}