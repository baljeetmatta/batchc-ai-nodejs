const express=require("express");
const app=express();
const fs=require("fs");
const userRoutes=require("./routes/userRoutes");
const authRoutes=require("./routes/authRoutes");

app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));

app.use("/auth",authRoutes); // /dashboard
app.use("/user",userRoutes); // /register, /login,


app.listen(3000,(err)=>{

    if(err)
        console.log("Unable to start the server...");
    else
        console.log("Server Started...")
})