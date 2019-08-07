var express=require('express')
var app=express()
const path=require('path')
var bookrouter=require('./routes/bookrouter')

app.use("/books",bookrouter)
app.get("/",function(req,res){
    res.render("index",{pagetitle:"library",nav:[{link:"/books",title:"books"},{link:"/authors",title:"authors"}]})
})

app.set("view engine","ejs")
app.set("views","./src/views")
app.use(express.static(path.join(__dirname,"/public")))
app.listen(3000,function(req,res){
    console.log("loading")
});