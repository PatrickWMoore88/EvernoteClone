require("dotenv").config({path: ".env"});
const express = require("express");
const app = express();

const mysql = require("mysql");

const addNote = require("./routes/addNote");
const deleteNote = require("./routes/deleteNote");
const editNote = require("./routes/editNote");
const getNote = require("./routes/getNote");

const dbConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.ROOT,
    password: process.env.ROOT_PASSWORD
})

dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

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