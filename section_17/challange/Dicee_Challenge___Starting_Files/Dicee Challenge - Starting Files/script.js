var random_number1 = Math.floor(Math.random() * 6) + 1;
var random_number2 = Math.floor(Math.random() * 6) + 1;
var img1 = document.querySelector(".p1 img");
var img2 = document.querySelector(".p2 img");
var h1 = document.querySelector(".title");
var flag = 0;

function Rand() {
  switch (random_number1) {
    case 1:
      img1.setAttribute("src", "./images/dice1.png");
      break;
    case 2:
      img1.setAttribute("src", "./images/dice2.png");
      break;
    case 3:
      img1.setAttribute("src", "./images/dice3.png");
      break;
    case 4:
      img1.setAttribute("src", "./images/dice4.png");
      break;
    case 5:
      img1.setAttribute("src", "./images/dice5.png");
      break;
    case 6:
      img1.setAttribute("src", "./images/dice6.png");
      break;
  }

  switch (random_number2) {
    case 1:
      img2.setAttribute("src", "./images/dice1.png");
      break;
    case 2:
      img2.setAttribute("src", "./images/dice2.png");
      break;
    case 3:
      img2.setAttribute("src", "./images/dice3.png");
      break;
    case 4:
      img2.setAttribute("src", "./images/dice4.png");
      break;
    case 5:
      img2.setAttribute("src", "./images/dice5.png");
      break;
    case 6:
      img2.setAttribute("src", "./images/dice6.png");
      break;
  }

  if (random_number1 > random_number2) {
    h1.textContent = "🚩Player 1 Wins!";
  } else if (random_number2 > random_number1) {
    h1.textContent = "Player 2 Wins! 🚩";
  } else {
    h1.textContent = "Draw!";
  }
}

window.onload = function () {
  var reloading = sessionStorage.getItem("reloading");
  if (reloading) {
    sessionStorage.removeItem("reloading");
    Rand();
  }
};

window.onbeforeunload = function () {
  sessionStorage.setItem("reloading", "true");
};
