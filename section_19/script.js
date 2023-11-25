// $("h1").css({
//   color: "red",
//   "font-size": "100px",
// });
// Add css properties
// Alternatives ⬇️ add css using add class
$("h1").addClass("big-text margin-50");

//------------Button------------------
$(".container .first").css({
  "background-color": "red",
  border: "red 1px solid",
  color: "white",
});

$(".container .second").css({
  "background-color": "green",
  border: "green 1px solid",
  color: "white",
});
$(".container .third").on("click", function () {
  alert("Hello world");
});
var button4 = $(".fourth");
button4.on("click", function (e) {
  console.log(e);
});

$(document).keydown(function (e) {
  $("h1").text(e.key);
});
