const express = require("express");
const pug = require("pug");
const path = require("path");
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/templates");
app.use("/public", express.static(path.join(__dirname, "src/public")));

const signIn = require("./src/routes/signIn");

app.use("/",signIn);

const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
    if(err){
        console.log("Something go wrong");
    }
    else{
        console.log(`Server run on port ${PORT}`);
    }
})