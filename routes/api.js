const express = require("express");
const router = express.Router();

router.post("/sendEmail", (req,res) => {
    console.log(req.body.email);
    res.render("resetPass",{choice: "Log in", choiceLink : "/",title: "Reset"});
});
router.post("/reset", (req,res) => {
    console.log(req.body.newPassword,req.body.repeatPassword);
    res.render("sign",{choice: "Sign up", choiceLink : "/signUp",title: "Sign In"});
});
router.post("/signUp", (req,res) => {
    console.log(req.body.newPassword,req.body.repeatPassword);
    res.render("complete",{choice: "Log In", choiceLink : "/",title: "Sign In"});
});
module.exports = router;