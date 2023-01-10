// CREATE A GREETING APP WITH JQUERY
// Create an input
// Create a button
// When clicked the button should print a greet message in an h1 header
// Ex: input: Petko output message: Hello there Petko!

// You must use JQuery to complete the task

let btn = $("#btn").first();
let text = $("#text");


btn.on("click", function(){
    $("#text").hide();
    $("#text").first().after("<h1>Hello there Petko!</h1>");
})