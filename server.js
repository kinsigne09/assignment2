const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');

require('dotenv').config({path:"./config/keys.env"});

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

const generalController = require("./controllers/general");

app.use("/",generalController);


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Web Server is up and running`);    
});