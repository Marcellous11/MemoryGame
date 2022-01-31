const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let numOfMatches = document.querySelector("#result");
let matchCounter = 0;
let noClicking = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
let flippedCards = [];

function handleCardClick(e) {
  let currentCard = e.target; //is a element
  currentCard.style.backgroundColor = currentCard.classList[0];
  console.log(currentCard);

  flippedCards.push(currentCard);
  flippedCards.splice(2);

  card1 = flippedCards[0];
  card2 = flippedCards[1];

  currentCard.classList.toggle("turnedOver");

  //  double click probelm
  // probelm with the counter
  // also a probelm with the last line of code #game over probelm

  if (card1.className.includes("turnedOver")) {
    currentCard.click(false);
  } else if (card1.className === card2.className) {
    matchCounter += 1;
    flippedCards.splice(0);
    numOfMatches.innerText = matchCounter;
  } else {
    card1.style.backgroundColor = "";
    card2.style.backgroundColor = "";
    flippedCards.splice(0);
  }

  //end of the game
  if (parseInt(numOfMatches.innerText) === 5) {
    alert("Game Completed");
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);

// let currentCard = e.target; //is a element
// 	currentCard.style.backgroundColor = currentCard.classList[0];

// 	flippedCards.push(currentCard);
// 	flippedCards.splice(2);

// 	card1 = flippedCards[0].className;
// 	card2 = flippedCards[1].className;

// 	if (card1 === card2) {
// 		numOfMatches += 2;
// 	} else {
// 		car.style.backgroundColor = '';
// 		card2.style.backgroundColor = '';
// 		flippedCards.pop();
// 		flippedCards.pop();
// 		flippedCards.splice(0);
// 	}
