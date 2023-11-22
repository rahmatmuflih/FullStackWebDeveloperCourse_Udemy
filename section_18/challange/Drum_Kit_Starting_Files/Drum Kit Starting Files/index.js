// Alternative
// document.querySelectorAll(".set .drum").forEach((element) =>
//   element.addEventListener("click", function () {
//     alert(element.textContent + " got clicked");
//   })
// );

let drum = document.querySelectorAll(".set .drum");
let tom_1 = new Audio("./sounds/tom-1.mp3");

for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", function () {
    this.style.color = "white";
  });
}
