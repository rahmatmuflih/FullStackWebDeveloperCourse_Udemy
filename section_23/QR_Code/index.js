import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

console.log("Hi, welcome to Link to QR-Code Converter");

const question = [
  {
    name: "link",
    type: "input",
    message: "input link that you want to convert: ",
    validate(value) {
      const pass = value.match(
        /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/\S*)?$/i
      );
      if (pass) {
        return true;
      }

      return "Please enter a valid link";
    },
  },
];

inquirer.prompt(question).then((answer) => {
  var qr_svg = qr.image(answer.link, { type: "png" });
  qr_svg.pipe(fs.createWriteStream("qr_image.png"));
});
