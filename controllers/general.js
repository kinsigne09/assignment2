const express = require("express");
const fakeDB = require("../model/fakeDb");

const router = express.Router();

router.get("/",(req,res)=>{

    res.render("home", {
        title : "Home Page"
    });
});

router.get("/package",(req,res)=>{

    res.render("package", {
        title:"Package Meals"
    });
});

router.get("/login",(req,res)=>{

    res.render("login",{
        title:"Login",
        error: ""
    });
});

router.post("/sign-in", (res,req)=> {
    const {email,password} = req.body;

});

router.get("/registration",(req,res)=>{

    res.render("registration", {
        title:"Resgistration"
    });
});

router.post("/register-form",(req,res)=>{

    const {firstname,lastname,email,password} = req.body;
    let error = 0;

    if (!firstname || !lastname || !email || !password) {
        error+=1;
    }
    if (password.length < 6) {
        error+=2;
    }
    if (error == 1) {
        res.render("registration", {
            error: "Fill in the blanks.",
            holdfirstname: firstname,
            holdlastname: lastname,
            holdemail: email
        });
    } else if (error == 2) {
        res.render("registration", {
            error: "Invalid password, must be greater than 6 characters.",
            holdfirstname: firstname,
            holdlastname: lastname,
            holdemail: email
        });
    } else if (error == 3) {
        res.render("registration", {
            error: "Fill in the blanks. Invalid password, must be greater than 6 characters.",
            holdfirstname: firstname,
            holdlastname: lastname,
            holdemail: email
        });
    }else {
        console.log("successful");

        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
          to: 'test@example.com',
          from: 'test@example.com',
          subject: 'Sending with Twilio SendGrid is Fun',
          text: 'and easy to do anywhere, even with Node.js',
          html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sgMail.send(msg).then(()=>{
            res.render("dashboard", {
                firstname: firstname,
                lastname: lastname
            })
        })
        .catch(err=>{
            console.log(`Error ${err}`);
        });;
    }



});

module.exports = router;