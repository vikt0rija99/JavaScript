// HOMEWORK PART 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

document.body.style.backgroundColor = '#339e9c';

let firstH1 = document.querySelector("#myTitle");
firstH1.innerText = "Animals!";

let firstParagraph = document.querySelector(".paragraph");
firstParagraph.innerText = "Discover the strongest, smartest, and fastest animals in the world by searching below, or scroll to see all animals listed from A-Z!"

let secondParagraph = document.getElementsByClassName("second")[0];
secondParagraph.innerText = "We believe that if people know more about the world’s creatures they will better care for them. That’s why we add new animals for you to discover – each and every day! Learn about any animal using the search box below or subscribe to our YouTube Channel. Also be sure to check out our growing list of Animal Quizzes and Web Stories.";

let text = document.getElementsByTagName("text")[0];
text.innerHTML = "Discover Your Favorite Animal Today!";

let lastDiv = document.getElementsByTagName("div")[2];

let header1Last = lastDiv.getElementsByTagName("h1")[0];
header1Last.innerText = "The 7 Main Types of Animals And Their Characteristics";

let header3Last = header1Last.nextElementSibling;
header3Last.innerHTML = "1. Mammals <br><br> The official mammal class is Mammalia. Animals that are considered mammals include warm-blooded vertebrates that have hair or fur and whose babies drink milk. Unlike other animal types like birds and insects, all mammal babies drink milk that comes from their mother’s bodies. This is one of the key ways to know if an animal is a mammal.";



