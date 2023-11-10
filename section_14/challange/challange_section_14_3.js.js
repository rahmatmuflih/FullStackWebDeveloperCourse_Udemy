var txt = prompt("Enter Text:");
var txtSliced = txt.slice(0,140);
var maxNumb = 140;

alert("You have written " + txt.length + " characters, you have " + (maxNumb-txt.length) + " characters left.");
alert(txtSliced);