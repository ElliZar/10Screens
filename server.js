const express = require("express");
const pug = require("pug");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/templates");
app.use("/public", express.static(path.join(__dirname, "/public")));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const signIn = require("./routes/signIn");
const api = require("./routes/api");

app.use("/",signIn);
app.use("/api",api);

const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
    if(err){
        console.log("Something go wrong");
    }
    else{
        console.log(`Server run on port ${PORT}`);
    }
});