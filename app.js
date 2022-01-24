const express= require("express")
const app=express()
const path= require("path")

app.get('/', (req,res)=>{
    res.send("ahora si entre")
})

app.get('/login', (req,res)=>{
    res.sendFile((__dirname + '/views/login.html'))

})
app.use(express.static(path.join(__dirname, './public')))

app.listen(3005,()=>{
    console.log("servidor corriendo")

})