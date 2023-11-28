const express = require('express');
const bodyParser = require('body-parser');
// requiring local modules
const Date = require(__dirname + '/Date.js');


const app = express();
var items=[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.listen(3000, ()=>{
  console.log("server is running on port 3000");
});

app.get("/about",function (req,res){
  res.render("about");
});


app.get("/",function(req,res){
  //using fun which is exported by Date.js module
  let day=Date.getDate();

res.render("lists",{ day : day , newItems : items});

});

app.post("/",function(req,res){
  var type=req.body.button;
  if(type==="add"){
    var newItem = req.body.newItem;
    items.push(newItem);
  }
  else if(type==="remove"){
      items.pop();
  }
  res.redirect("/");
});
