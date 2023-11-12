function Rand() {
  let random_number1 = Math.floor(Math.random() * 6) + 1;
  let random_number2 = Math.floor(Math.random() * 6) + 1;
  let rand_img_src1 = "./images/dice" + random_number1 + ".png";
  let rand_img_src2 = "./images/dice" + random_number2 + ".png";
  let img1 = document.querySelector(".p1 img");
  img1.setAttribute("src", rand_img_src1);
  let img2 = document.querySelector(".p2 img");
  img2.setAttribute("src", rand_img_src2);
  let h1 = document.querySelector(".title");

  if (random_number1 > random_number2) {
    h1.textContent = "🚩Player 1 Wins!";
  } else if (random_number2 > random_number1) {
    h1.textContent = "Player 2 Wins! 🚩";
  } else {
    h1.textContent = "Draw!";
  }
}

window.onload = function () {
  let reloading = sessionStorage.getItem("reloading");
  if (reloading) {
    sessionStorage.removeItem("reloading");
    Rand();
  }
};

window.onbeforeunload = function () {
  sessionStorage.setItem("reloading", "true");
};
