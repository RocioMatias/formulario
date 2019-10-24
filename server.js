const express = require("express")

const app = express();

const posts = [
    {
        titulo:"hola mundo",
        img:"img.jpg"
    }
]

app.use(express.static("/front"))
app.use(express.json())

app.get("/posts", function(req, res){
    res.json(posts)
})

app.post("/posts", function(req, res){
    console.log(req.body)
    
    res.json({msg: "todo chido" })
})

app.listen(8080,function(){
    console.log("servidor escuchando");
    
})