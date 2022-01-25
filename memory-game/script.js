const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardFliped = false;
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
  "purple"
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

//add reset

document.getElementById("reset").addEventListener("click", e =>{
  if (e.target.id == "reset"){
    window.location.reload();
  }
})

// TODO: Implement this function!
function handleCardClick(event) {

  
  if (noClicking) return;
  if (event.target.classList.contains("flipped")) return;

  //set up cards
  let currentcard = event.target;
 
  //define card1 and card2
  if (card1 === null || card2 ===null){
    currentcard.classList.add("flipped");
    currentcard.style.backgroundColor = currentcard.classList[0];
    card1 = card1 || currentcard;
    // console.log("this is card1:", card1.classList[0]);
    card2 = currentcard == card1 ? null : currentcard;
    // console.log("this is card2:", card2.classList[0]);

  // match condition
    if (false || card2.classList.contains("flipped")){
      if (card2.classList[0] == card1.classList[0]){
        // console.log("matched")
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        card1.removeEventlisenter("click", handleCardClick);
        card2.removeEventlisenter("click", handleCardClick);
      }else{
        setTimeout(function() {
          // console.log("NOT matched")
          card1.classList.remove("flipped");
          card2.classList.remove("flipped");
          card1.style.backgroundColor = "white";
          card2.style.backgroundColor = "white";
          card1 = null;
          card2 = null;
    
          
          noClicking = false;
        }, 1000)
        
      }
    }
  }


}

// when the DOM loads
createDivsForColors(shuffledColors);
