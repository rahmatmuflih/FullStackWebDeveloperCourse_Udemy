// ALTERNATIVE
// document.querySelectorAll(".set .drum").forEach((element) =>
//   element.addEventListener("click", function () {
//     alert(element.textContent + " got clicked");
//   })
// );

let drum = document.querySelectorAll(".set .drum");

for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", function () {
    this.buttonSelection = drum[i].innerHTML;
    makeSomeNoise(this.buttonSelection);
  });
}

document.addEventListener("keydown", function (e) {
  makeSomeNoise(e.key);
});

function makeSomeNoise(key) {
  switch (key) {
    case "w":
      this.sound = new Audio("./sounds/tom-1.mp3");
      this.sound.play();
      break;
    case "a":
      this.sound = new Audio("./sounds/tom-2.mp3");
      this.sound.play();
      break;
    case "s":
      this.sound = new Audio("./sounds/tom-3.mp3");
      this.sound.play();
      break;
    case "d":
      this.sound = new Audio("./sounds/tom-4.mp3");
      this.sound.play();
      break;
    case "j":
      this.sound = new Audio("./sounds/snare.mp3");
      this.sound.play();
      break;
    case "k":
      this.sound = new Audio("./sounds/crash.mp3");
      this.sound.play();
      break;
    case "l":
      this.sound = new Audio("./sounds/kick-bass.mp3");
      this.sound.play();
      break;
    default:
      break;
  }
}
