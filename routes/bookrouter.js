var express=require('express')
const router=express.Router();
var bookarray=[{
    btitle:"war and peace",
    genre:"fiction",
    bauthor:"nichole",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Guerraepace.jpg/800px-Guerraepace.jpg"
},{
    btitle:"inferno",
    genre:"fiction",
    bauthor:"dan brown",
    image:"https://upload.wikimedia.org/wikipedia/en/b/bb/Inferno-cover.jpg"
},{
    btitle:"nagas",
    genre:"fiction",
    bauthor:"amish",
    image:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiz1IeHj_DjAhW_7nMBHZ1zCb0QjRx6BAgBEAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Secret_of_the_Nagas&psig=AOvVaw30wzU0sTlGRZmO38eF80EP&ust=1565245238173116.jpg"
}]
router.get("/",function(req,res){
    res.render("books",{pagetitle:"library",nav:[{link:"/books",title:"books"},{link:"/authors",title:"authors"}],bookr:bookarray})
})
router.get("/:id",function(req,res){
    var id=req.params.id
    console.log(id)
    res.render("singlebook",{pagetitle:"library",nav:[{link:"/books",title:"books"},{link:"/authors",title:"authors"}],bookr:bookarray[id]})

})
module.exports=router;