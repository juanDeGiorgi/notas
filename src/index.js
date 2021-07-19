const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;


// CONFIG

app.set("view engine","ejs");
app.set("views","./src/views")

const indexRouter = require("./routes/index");
const notesRouter = require("./routes/notes");

// MIDDLEWARES

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

// ROUTING

app.use("/",indexRouter);
app.use("/notes",notesRouter);


// START SERVER

app.listen(port,() => console.log(`server on port  : ${port}`));