const express=require("express");
const body_parser=require("body-parser")
const userRouter=require("./router/userRouter.js")
var server=express();
server.listen(8080);
server.use(body_parser.urlencoded({
	extended:false
}))
server.use(express.static("public"));
server.use("/user",userRouter);