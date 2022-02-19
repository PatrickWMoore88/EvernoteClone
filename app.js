const express = require("express");
const app = express();
require("dotenv").config({path: ".env"});

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/addNote", (req, res) => {
    console.log("Note Added")
})

app.get("/getNote", (req, res) => {
    console.log("Note Gotted")
})

app.get("/editNote", (req, res) => {
    console.log("Note Edited")
})

app.get("/deleteNote", (req, res) => {
    console.log("Note Deleted")
})

app.listen(process.env.PORT, () => console.log(`App listening on Port ${process.env.PORT}`))