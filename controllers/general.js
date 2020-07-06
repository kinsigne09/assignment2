const express = require("express");
const fakeDB = require("../model/fakeDb");

const app = express.Router();


app.use(express.static(__dirname + '/public'));

app.get("/",(req,res)=>{

    res.render("home", {
        title : "Home Page"
    });
});

app.get("/package",(req,res)=>{

    res.render("package", {
        title:"Package Meals"
    });
});

app.get("/login",(req,res)=>{

    res.render("login",{
        title:"Login",
        error: ""
    });
});

app.post("/sign-in", (res,req)=> {
    const {email,password} = req.body;
});

app.get("/registration",(req,res)=>{

    res.render("registration", {
        title:"Resgistration"
    });
});

app.post("/register-form",(req,res)=>{

    const {firstname,lastname,email,password} = req.body;
    error = [];

    if (!firstname || !lastname || !email || !password) {
        error.push[{msg: "Please fill in the blanks."}];
    }
    if (password < 6) {
        error.push[{message: "Password should atleast be 6 characters long."}];
    }
    if (error.legnth > 0) {
        res.render("registration", {
            error: error,
            holdfirstname: firstname,
            holdlastname: lastname
        });
    } else {
        console.log("successful")
    }

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

    const msg = {
    to: `timezome1969@gmail.com`,
    from: `test@test.ca`,
    subject: 'Registration Form Submit',
    html: 
    `Vistor's Full Name ${firstname} ${lastname} <br>
     Vistor's Email Address ${email} <br>
     Vistor's message : Welcome to my website.<br>
    `,
    };


});

module.exports = app;