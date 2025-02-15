//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
var port = 3000;
var tPass = "ILoveProgramming";
var userPass ="";
var isTrue = false;

app.use(bodyParser.urlencoded({extended: true}));

function checkPass(req,res,next){
    userPass = req.body["password"];
    if(userPass === tPass){
        isTrue = true;
    }
    next();
}

app.use(checkPass);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check",(req,res)=>{
    if(isTrue){
        res.sendFile(__dirname+"/public/secret.html");
    }else{
        res.sendFile(__dirname+"/public/index.html");
    }
});

app.listen(port,() =>{
    console.log(port);
})
