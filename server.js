//http
const http=require("http");
const fs=require("fs");
const processRequest=(req,res)=>{
    console.log(req.url)
    res.setHeader("Content-Type","text/html");
    if(req.url==="/")
    {
        // fs.readFile("./index.html","utf-8", (err,data)=>{

        //     res.write(data);
        //     res.end();

        // });
       res.write( readUrl("index.html"));
       res.end();


    }
    else if(req.url==="/style.css")
    {
        // fs.readFile("./style.css","utf-8", (err,data)=>{

        //     res.write(data);
        //     res.end();

        // });
        res.write( readUrl("style.css"));
       res.end();
       

    }
    else if(req.url==="/script.js")
    {
        // fs.readFile("./script.js","utf-8", (err,data)=>{

        //     res.write(data);
        //     res.end();

        // });
        res.write( readUrl("script.js"));
       res.end();
       

    }
    //res.write("Welcome to <b>nodejs</b>");

   else if(req.url=="/about.html")
    {
    res.write("This is about page");
     res.end();
    }
     else
        res.end();



   

    console.log("Request received");

};

const pRequest=(req,res)=>{
    console.log(req.url)
        res.setHeader("Content-Type","text/html");
        let filename="";
    if(req.url==="/")
        filename="index.html";
    else if(req.url==="/about")
        filename="about.html";
    
    else
        filename= req.url.substring(1);
    
    res.write (readUrl(filename));
    res.end();

    


}


const server= http.createServer(pRequest);
server.listen(3000);
/*server.on("connection",(socket)=>{
    console.log("New connection...");
});
*/


const readUrl=(filename)=>{
    try{
    data=fs.readFileSync("./"+filename,"utf-8");
return data;
    
}catch(err){
    return "";

}

    
}