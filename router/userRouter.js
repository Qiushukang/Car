const express=require("express");
const pool=require("../sql/sql.js")
var router=express.Router();

//登录
router.post("/login",(req,res)=>{
	console.log(req.body);
	if (!req.body.cname) {
		res.send("账号为空");
		return
	}
	if (!req.body.cpwd) {
		res.send("密码为空");
		return;
	}
	pool.query("select * from company_user where cname=? and cpwd=?",[req.body.cname,req.body.cpwd],(err,result)=>{
		if (err) {throw err};
		if (result.length>0) {
			res.send("登陆成功")
		}
		else{
			res.send("登录失败")
		}
	})
})


router.get("/regist",(req,res)=>{

	for (var key in req.query){
		if (!req.query[key]) {
			// console.log(key)
			res.send(key+"为空");
			return;
		}
	}	
	console.log(req.query);
	pool.query("insert into company_user set ?",[req.query],(err,result)=>{
		if (err) {throw err}
		if (result.affectedRows>0) {
			res.send("注册成功")
		}
		else{
			res.send("注册失败")
		}
	})
})

module.exports=router