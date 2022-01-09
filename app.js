const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");
const ejs = require("ejs");
const photoController = require("./controllers/photoControllers");
const pageController = require("./controllers/pageController");

//oluşturduğumuz app değişkenine express fonksiyonunu atarız
const app = express();

//Connect DB
mongoose.connect("mongodb://localhost/pdog-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

//Routes
//önce ulaşmak istediğimiz adresi yazarız ("/")
app.get("/", photoController.getAllPhotos);
app.get("/photos/:id", photoController.getPhoto);
app.post("/photos", photoController.createPhoto);
app.put("/photos/:id", photoController.updatePhoto);
app.get("/about", pageController.getAboutPage);
app.get("/add", pageController.getAddPage);
app.get("/photos/edit/:id", pageController.getEditPage);
app.delete("/photos/:id", photoController.deletePhoto);

const port = 3000;
//server ın çalışması için listen metodu yazmamız gerek
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
