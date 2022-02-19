const express = require("express");
const app = express();
require("dotenv").config({path: ".env"});

const addNote = require("./routes/addNote");
const deleteNote = require("./routes/deleteNote");
const editNote = require("./routes/editNote");
const getNote = require("./routes/getNote");

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/addNote", (req, res) => {
    addNote.addNote();

    let note = req.query.note;
    console.log(note);
    
})

app.get("/getNote", (req, res) => {
    getNote.getNote();
})

app.get("/editNote", (req, res) => {
    editNote.editNote();
})

app.get("/deleteNote", (req, res) => {
    deleteNote.deleteNote();
})

app.listen(process.env.PORT, () => console.log(`App listening on Port ${process.env.PORT}`))