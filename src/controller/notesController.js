const db = require("../data/dbNotas");
const fs = require("fs");
const path = require("path");
const dbImages = require("../data/dbImagenes");

module.exports = {
    show : (req,res) => res.render("notes.ejs",{dbImages : dbImages}),

    new : (req,res) => {
        let ultimoId = (db.length - 1)
        let nota ={
            id : (db[ultimoId].id + 1),
            image : req.query.image,
            titulo : req.query.titulo,
            autor : req.query.autor,
            descripcion : req.query.descripcion,
        }
        db.push(nota);
        fs.writeFileSync(path.join(__dirname,"../data/notas.json"),JSON.stringify(db),"UTF-8");
        res.redirect("/");
        },

    delete : (req,res) =>{
        for(let i=0;i<db.length;i++){
            db[i].id == req.query.id ? db.splice(i,1) : " ";
        }
        fs.writeFileSync(path.join(__dirname,"../data/notas.json"),JSON.stringify(db),"UTF-8");
        res.redirect("/");
    },

    showOld : (req,res) =>{
        res.render("notes.ejs",{
            dbImages : dbImages,
            nota : db.find(e => e.id == req.query.id)
        })
    },

    update : (req,res) =>{
        db.forEach(e => {
            if(e.id === Number(req.query.id)){
                e.image = req.query.image
                e.titulo = req.query.titulo
                e.autor = req.query.autor
                e.descripcion = req.query.descripcion
            }
        });
        fs.writeFileSync(path.join(__dirname,"../data/notas.json"),JSON.stringify(db),"UTF-8");
        res.redirect("/");
    }
}
