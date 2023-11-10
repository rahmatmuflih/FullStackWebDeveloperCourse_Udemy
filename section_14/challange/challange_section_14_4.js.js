var name = prompt("Enter your name:");
var capitalizedName = name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase();
alert("Hello " + capitalizedName);