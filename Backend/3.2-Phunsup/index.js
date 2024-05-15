import express from "express";
const app = express();

app.get("/",(req, res) =>{
    res.send("Artsd");
});

app.get("/contact",(req,res) =>{
    res.send("Contact")
});

app.get("/about",(req,res)=>{
    res.send("About me");
})
const port = 3000;
app.listen(port,() =>{
    console.log(port)
})