const express=require("express");
const cookieParser=require("cookie-parser");
const session=require("express-session");

const app=express();
app.use(cookieParser());
app.use(session({
    saveUninitialized:true,
    resave:false,
    secret:'234lkjlk23j423#@$#@',
    cookie:{
        maxAge:1000*60*60 *24,
        // secure:true,
        httpOnly:true //document.cookie
    }

}))
const fs=require("fs");
const userRoutes=require("./routes/userRoutes");
const authRoutes=require("./routes/authRoutes");

app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
function auth(req,res,next){
    if(req.session.user)
        next();
    else
        res.redirect("/user/login")
}

app.use("/auth",auth,authRoutes); // /dashboard
app.use("/user",userRoutes); // /register, /login,

//state management 
//http -> Connection less
//Login->Server->Login Validate->
//Mailbox->Click->Server(New Reqest)->
//Login
/*
1. Cookie- client side information to be stored on client
Brower
along with cookie
    1. Temp file browser-> expiry period(delete)
        Programmer->Server(30 min)
        Antivirus
    2. File- > Server  Firewall
    3. Credentials

Session - client side information to be stored on server
Timeout (non activity period) 5min

express-session
cookie-parser

*/


app.listen(3000,(err)=>{

    if(err)
        console.log("Unable to start the server...");
    else
        console.log("Server Started...")
})