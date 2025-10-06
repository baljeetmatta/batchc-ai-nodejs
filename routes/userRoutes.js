const express=require("express");
const routes=express.Router();
const path=require("path");
const fs=require("fs");



routes.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/login.html"));

})
routes.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/signup.html"));

})
routes.post("/signup",(req,res)=>{
       // console.log(req.body);
       let users=[];
        fs.readFile("./users.json","utf-8",(err,data)=>{
                if(err)
                    users=[];
                else
                    users=JSON.parse(data);

                const results=users.filter((item)=>{
                    if(item.username==req.body.username)
                        return true;
                })
                if(results.length!=0)
                {
                    res.send("User already exists");



                }
                else
                {
                    let obj={
                        username:req.body.username,
                        password:req.body.password
                    }
                    users.push(obj);
                    fs.writeFile("./users.json",JSON.stringify(users),(err)=>{
                        res.send("User Created... <a href='/login.html>Login</a>");

                    })
                }

        })
       // res.end();

})

routes.post("/login",(req,res)=>{
       fs.readFile("./users.json","utf-8",(err,data)=>{
                if(err)
                    users=[];
                else
                    users=JSON.parse(data);

                const results=users.filter((item)=>{
                    if(item.username==req.body.username && item.password==req.body.password)
                        return true;
                })
                if(results.length!=0)
                {
                    res.redirect("/auth/dashboard")
                   // res.send("User already exists");



                }
                else
                {
                    res.send("Invalid user/password");

                }
       });


})

module.exports=routes;
