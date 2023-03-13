//모듈
const express = require("express");
const path = require("path");
const methodOverride = require('method-override')

//서버
const chatApp = express(); //4001: chat


//채팅 서버 세팅
const http = require("http").createServer(chatApp);
const io = require("socket.io")(http);
module.exports = io;

chatApp.set("view engine", "ejs");
chatApp.engine("html", require("ejs").renderFile);
chatApp.set("views", path.join(__dirname, 'views'));

chatApp.use("/public", express.static(__dirname + '/public'));
chatApp.use(methodOverride("_method"));
chatApp.use(express.urlencoded({extended: true}));


//Router Setting
const router = require("./routes/index");
chatApp.use(router);
chatApp.use("/",router);


// Chat Server Open
http.listen(4001, () => {
    console.log("Chat Server listening on port 4001!");
})
