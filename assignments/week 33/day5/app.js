const express = require('express');
const app = express()
const parser = require("body-parser")
const fileupload = require("express-fileupload")
const port = 1111
const path = require('path')

app.use(parser.json())
app.use(fileupload())

app.set("view engine","ejs")
app.set("views","./src/views")
const pathstatic = path.join(__dirname,'./public')
app.use(express.static(pathstatic))
console.log(pathstatic)
app.get('/',(req,res)=>
{
    const query= req.query.error
    res.render("homepage",{error:query})
})
app.post('/profile',(req,res)=>{
    const imagefile = req.files.image
    if(imagefile.mimetype==='image/jpeg')
    {
        imagefile.mv(`${__dirname}/public/images/${imagefile.name}`,function(err,data)
    {
        res.render("profile",{image:`${imagefile.name}`})
    })
    }
    else
    {
        // res.render("homepage",{error:"Only jpg/jpeg files are allowed to upload"})
        res.redirect('/?error=Only jpg/jpeg files are allowed to upload')
    }
})

app.listen(port,()=>{console.log("port on",port)})