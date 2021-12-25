const express = require("express");

//oluşturduğumuz app değişkenine express fonksiyonunu atarız
const app = express();

//önce ulaşmak istediğimiz adresi yazarız ("/")
app.get("/", (req, res) => {
  res.send("Merhabaa"); //ekrana yazar
});

const port = 3000;
//server ın çalışması için listen metodu yazmamız gerek
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
