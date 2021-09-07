const express = require("express");
const cloudinary = require('cloudinary');

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bgTest.html");
})

app.listen(process.env.PORT || 3000, function(){ //heroku will decide the port
  console.log("server is running on port 3000");
})
