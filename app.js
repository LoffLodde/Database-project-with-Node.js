const express = require("express");
const path = require("path");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

const db = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
});

app.use(express.static(path.join(__dirname, "website")));

db.connect((err) => {
  if (err) {
    console.error("Connection failed" + error);
    return;
  }

  console.log("Connection was sucsessful");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "website/index.html"));
});

//Testing purposes
app.get("/visitors", (req, res) => {
  const name = "Jake";
  const surename = "Miller";
  const comment = "Nothing at all";

  db.query(
    "INSERT INTO visitors ( Name, Surename, Comment) VALUES (?, ?, ?)",
    [name, surename, comment],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
