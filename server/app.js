import express from 'express'

const app = express()

// TODO: add your endpoints here
app.use(express.static("exercises/public"));

app.set("views", "exercises/views"); 

app.set("view engine", "ejs");

app.get("/d1e2", (req, res) => {
    const msg = "Hello from d1e2!";
    // TODO: Render 'd1e2.ejs' and pass the msg
    res.render("d1e2.ejs", { msg });
  });

  app.get("/d1e3", (req, res) => {
    const shopping = [
      "Eggs",
      "Flour",
      "Sugar",
      "Lifesize cutout of Christian Bale as Batman",
      "Milk",
      "Bread",
    ];
  
    // TODO: Render 'd1e3.ejs', passing the value of `shopping
    res.render("d1e3.ejs", { shopping });
  });

export default app
