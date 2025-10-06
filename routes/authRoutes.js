const express=require("express");
const routes=express.Router();
const path=require("path");
// /data/:x -> useParams


routes.get("/dashboard",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/dashboard.html"));

})
//req.query->get, req.body->post, req.params ->Dynmaic paramater
routes.get("/dynamic/:x",(req,res)=>{

    res.send("Value of x" +req.params.x)
    //res.sendFile(path.join(__dirname,"../public/dashboard.html"));

})
module.exports=routes;

