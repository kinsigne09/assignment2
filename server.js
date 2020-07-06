const express = require("express");
const exphbs = require("express-handlebars");
const fakeDB = require("./model/fakeDB");

const app = express();

app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get("/",(req,res)=>{

    res.render("home", {
        title : "Home Page"
    });
});

app.get("/login",(req,res)=>{

    res.render("login",{
        title:"Login"
    });
});

app.get("/package",(req,res)=>{

    res.render("package", {
        title:"Package Meals"
    });
});

app.get("/registration",(req,res)=>{

    res.render("registration", {
        title:"Resgistration"
    });
});

const PORT=3000;
app.listen(PORT,()=>{
    console.log("Web Server is up and running");
});