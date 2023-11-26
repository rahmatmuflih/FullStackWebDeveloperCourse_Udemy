const butttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = butttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  return gamePattern;
}
