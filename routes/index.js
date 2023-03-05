const express = require("express");
const router = express.Router();


//Main 
router.get("/", (req, res)=>{
    res.render("main");
});

//chat
const ChatRouter = require("./chat/chat")


// Refactoring
router.use("/chat", ChatRouter);

module.exports = router;