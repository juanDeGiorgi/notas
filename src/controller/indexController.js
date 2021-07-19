const path = require("path");

const db = require("../data/dbNotas");

module.exports ={
    index : (req,res) => res.render("index",{db : db}),

}