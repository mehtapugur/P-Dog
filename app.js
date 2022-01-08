const express = require("express");
const ejs = require("ejs");

//oluşturduğumuz app değişkenine express fonksiyonunu atarız
const app = express();

//Template Engine
app.set("view engine", "ejs");

app.use(express.static("public"));

//Routes
//önce ulaşmak istediğimiz adresi yazarız ("/")
app.get("/", (req, res) => {
  res.render("index"); //ekrana yazar
});

app.get("/about", (req, res) => {
  res.render("about"); //ekrana yazar
});

app.get("/add", (req, res) => {
  res.render("add"); //ekrana yazar
});

const port = 3000;
//server ın çalışması için listen metodu yazmamız gerek
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
