const butttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = butttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  return randomChosenColour;
}

function nextSound(randomColour) {
  switch (randomColour) {
    case "red":
      this.sound = new Audio("./sounds/red.mp3");
      this.sound.play();
      break;
    case "blue":
      this.sound = new Audio("./sounds/blue.mp3");
      this.sound.play();
      break;
    case "green":
      this.sound = new Audio("./sounds/green.mp3");
      this.sound.play();
      break;
    case "yellow":
      this.sound = new Audio("./sounds/yellow.mp3");
      this.sound.play();
      break;
    default:
      break;
  }
}
