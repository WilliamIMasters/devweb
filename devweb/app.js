const express = require("express");
const app = express();


const port = 80;
app.set("view engine", "ejs");
app.use(express.static("node_modules/bootstrap/dist"));
app.use(express.static("node_modules/jquery/dist"));
app.use(express.static("public"));

app.get("/", function(req, res) {
   if(false) { // if logged in

   } else {
      res.render("homeLO")
   }

   res.render("TEST");
});

app.listen(port, () => console.log("Server listening on port " + port));
