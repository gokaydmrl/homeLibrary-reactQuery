const express = require("express");
const app = express();
const booksRouter = require("./router/booksRouter");
const cors = require("cors");
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("we the express service workin");
});

app.listen("3001", () => {
  console.log("service is running");
});

app.use("/", require("./router/booksRouter"));
