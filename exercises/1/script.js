let btn = document.getElementById("btn");
let getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};
let getRandomColor = () => {
  let r = getRandomNumber(255);
  let g = getRandomNumber(255);
  let b = getRandomNumber(255);
  return `rgb(${r} ${g} ${b})`;
};

let setBackgroundColor = () => {
  let randomColor = getRandomColor();
  document.querySelector("body").style.backgroundColor = randomColor;
  background.style.color = randomColor;
};

addEventListener("click", setBackgroundColor);
getRandomColor();
