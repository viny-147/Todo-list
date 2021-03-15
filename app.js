//jshint eversion:6
const express=require("express");
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
let items=[];


app.get("/",function(req, res){

    const today= new Date();
    let weekday ={
        day:"numeric"
    };
    let day = today.toLocaleDateString("en-IN", weekday);
    let curMonth = {
        month:"short",year:"numeric"
    };
    let month = today.toLocaleDateString("en-IN", curMonth);
    res.render("list", {type:day, curmonth:month,newListItem:items});
});
app.post("/",function (req, res) {
    let item = req.body.new;
    items.push(item);
    res.redirect("/");
    if(res.body.check==true)
    {
        items.pop();
    }
})

app.listen(3000, function(){
    console.log("You have been connected to port 3000.");
});