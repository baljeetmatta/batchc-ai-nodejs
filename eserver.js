// const express=require("express");
// const app=express();
// const path=require("path");


// app.get("/",(req,res)=>{

//     // res.write("Hom ePage");
//     // res.end();
//     res.send("Home Page");


// })
// app.get("/index.html",(req,res)=>{
//     //res.sendFile
// //console.log(__dirname);

// //res.sendFile(__dirname+"/index.html");
// res.sendFile(path.join(__dirname,"./index.html"));

//     //res.end();

// })

// app.get("*",(req,res)=>{

// })

// app.listen(3000,(err)=>{

//     if(err)
//         console.log("unable to start to server",err);
//     else
//         console.log("Server Started...");
// })
const express=require("express");
const app=express();

app.use(express.static("."));
app.use(express.urlencoded({extended:false}));
//parser bodyparser
//false querystring key/pair
//true qs - rich json support

app.get("/",(req,res)=>{
    res.send("home request by server...");

})
app.get("/save",(req,res)=>{
    console.log("Reec...",req.query)
    res.end();
})
app.post("/save",(req,res)=>{
      console.log("Reec...",req.body)
    res.end();
})

app.get(/.*/,(req,res)=>{
    res.send("Page not found");

})
app.listen(3000);
