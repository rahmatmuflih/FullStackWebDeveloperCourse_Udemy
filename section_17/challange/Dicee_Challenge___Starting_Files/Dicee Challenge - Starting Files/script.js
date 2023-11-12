function Rand() {
  var random_number1 = Math.floor(Math.random() * 6) + 1;
  var random_number2 = Math.floor(Math.random() * 6) + 1;
  var rand_img_src1 = "./images/dice" + random_number1 + ".png";
  var rand_img_src2 = "./images/dice" + random_number2 + ".png";
  var img1 = document.querySelector(".p1 img");
  img1.setAttribute("src", rand_img_src1);
  var img2 = document.querySelector(".p2 img");
  img2.setAttribute("src", rand_img_src2);
  var h1 = document.querySelector(".title");

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
