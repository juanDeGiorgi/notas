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
            image : req.body.image,
            titulo : req.body.titulo,
            autor : req.body.autor,
            descripcion : req.body.descripcion,
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

    old : (req,res) =>{
        res.render("notes.ejs",{
            dbImages : dbImages,
            nota : db.find(e => e.id == req.query.id)
        })
    },

    update : (req,res) =>{
        db.forEach(e => {
            if(e.id === Number(req.body.id)){
                e.image = req.body.image
                e.titulo = req.body.titulo
                e.autor = req.body.autor
                e.descripcion = req.body.descripcion
            }
        });
        fs.writeFileSync(path.join(__dirname,"../data/notas.json"),JSON.stringify(db),"UTF-8");
        res.redirect("/");
    }
}
