const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.render("sign",{choice: "Sign up", choiceLink : "/signUp",title: "Sign In"});
});
router.get("/email", (req,res) => {
    res.render("email",{choice: "Sign in", choiceLink : "/signUp",title: "E-mail"});
});
router.get("/resetPass", (req,res) => {
    res.render("resetPass",{choice: "Log in", choiceLink : "/",title: "Reset"});
});
router.get("/signUp", (req,res) => {
    res.render("signUp",{choice: "Log in", choiceLink : "/",title: "Sign Up"});
});

module.exports = router;