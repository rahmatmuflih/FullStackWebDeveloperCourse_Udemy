const fs = require("fs");

// fs.writeFile("message.txt", "Hello again from Node JS", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

// fs.appendFile("message.txt", "\n" + "Hello from Muflih", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
