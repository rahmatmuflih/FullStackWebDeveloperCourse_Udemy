const butttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let colour = "";
let answer = 0;

$(document).ready(function () {
  $(document).on("click", function () {
    $(document).off("click");

    gameStart();
  });
});

function gameStart() {
  colour = nextSequence();

  $("#level-title").text("Level " + level);

  setTimeout(function () {
    $("#" + colour).fadeOut(50);
    $("#" + colour).fadeIn(50);
    playSound(colour);
  }, 1000);

  $(".btn").on("click", function (e) {
    let userChosenColour = e.target.id;

    userClickedPattern.push(userChosenColour);

    checkAnswer();
    playSound(userChosenColour);
    animatePress(userChosenColour);
    // console.log(userClickedPattern);
  });
}

function checkAnswer() {
  for (let i = 0; i < userClickedPattern.length; i++) {
    console.log("cycle- " + i);
    console.log("this is game Pattern " + gamePattern);
    if (userClickedPattern[i] === gamePattern[i]) {
      answer++;
      console.log(
        "checking " + userClickedPattern[i] + " and " + gamePattern[i]
      );
      console.log("this is user clicked pattern " + userClickedPattern);
      console.log("Right");
    } else {
      userClickedPattern = [];
      console.log(
        "checking " + userClickedPattern[i] + " and " + gamePattern[i]
      );
      console.log("this is user clicked pattern " + userClickedPattern);
      console.log("Wrong");
    }
  }
  console.log("----- end of cycle -----");
  if (
    userClickedPattern.length === gamePattern.length &&
    answer === gamePattern.length
  ) {
    userClickedPattern = [];
    gameStart();
  }
}

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = butttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  level++;

  return randomChosenColour;
}

function animatePress(currentColour) {
  var activeButton = document.querySelector("." + currentColour);

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

function playSound(randomColour) {
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
