const express=require("express");
const routes=express.Router();
const path=require("path");
// /data/:x -> useParams


routes.get("/dashboard",(req,res)=>{
  //  if(req.session.user)
    res.sendFile(path.join(__dirname,"../public/dashboard.html"));
// else
//     res.redirect("/user/login");


})
routes.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/user/login");
    
})
//req.query->get, req.body->post, req.params ->Dynmaic paramater
routes.get("/dynamic/:x",(req,res)=>{

    res.send("Value of x" +req.params.x)
    //res.sendFile(path.join(__dirname,"../public/dashboard.html"));

})
module.exports=routes;

