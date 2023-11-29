const butttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

$(document).ready(function () {
  $(document).on("click", function () {
    nextSequence();
    $("#level-title").html("Level " + gamePattern.length);
    $("#" + gamePattern[gamePattern.length - 1]).fadeOut(50);
    $("#" + gamePattern[gamePattern.length - 1]).fadeIn(50);
    nextSound(gamePattern[gamePattern.length - 1]);
    // for (let i = 0; i < gamePattern.length; i++) {
    //   setTimeout(function () {
    //     $("#" + gamePattern[i]).fadeOut(50);
    //     $("#" + gamePattern[i]).fadeIn(50);
    //     nextSound(gamePattern[i]);
    //   }, i * 1000);
    // }
  });
});

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
