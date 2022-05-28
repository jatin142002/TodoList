const express = require("express");
const bodyParser = require("body-parser");

let items = ["Cardio" , "Web Dev" , "Cycling"];

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const port = 3000;

app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  };

  let day = today.toLocaleDateString("en-US" , options);

  res.render("list", { kindOfDay: day , newListItem: items});
});

app.post("/" , function(req , res){
  items.push(req.body.newItem);
  res.redirect("/");
})


app.listen(port, function () {
  console.log("Server started at port 3000");
});
