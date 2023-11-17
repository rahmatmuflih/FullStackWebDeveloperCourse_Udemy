// Alternative
// document.querySelectorAll(".set .drum").forEach((element) =>
//   element.addEventListener("click", function () {
//     alert(element.textContent + " got clicked");
//   })
// );

let drum = document.querySelectorAll(".set .drum");

for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", function () {
    // alert(drum[i].textContent + " got clicked");
  });
}
