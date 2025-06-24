import express from "express";
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

const isi =
  "<a href='/'>Home</a><br>" +
  "<a href='/contact'>Contact</a><br>" +
  "<a href='/about'>About</a>";

const style = "'margin-top:20px;'";

const home = `<h1 style=${style}> Home Page </h1>`;
const contact = `<h1 style=${style}> Contact Page </h1> <p> my phone is: 0832132133123</p>`;
const about = `<h1 style=${style}> About Page </h1> <p> hello my name is muflih</p>`;

app.get("/", (req, res) => {
  res.send(isi + home);
});

app.get("/contact", (req, res) => {
  res.send(isi + contact);
});

app.get("/about", (req, res) => {
  res.send(isi + about);
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
