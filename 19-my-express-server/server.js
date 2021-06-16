const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello, World!</h1>");
});

app.get("/about", function(req, res){
  res.send("Hello, my name is John I ❤️ coffee and code.")
})

app.get("/contact", function(req, res){
  res.send("Contact me at: john@gmail.com");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Coffee</li><li>Code</li><li>Hot Chocolate</li></ul>")
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
