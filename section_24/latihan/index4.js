import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(
    `<h1>Your Band Name is:</h1><h2 style='margin-top:20px;'>${
      req.body.street + req.body.pet
    }🚩</h2>`
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
