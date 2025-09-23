const http = require("http");
const fs=require("fs");
const url=require("url")

const processRequest = (req, res) => {
    console.log(req.url);
    res.setHeader("Content-Type", "text/html");
    let filename = "";
    if (req.url === "/")
        filename = "index.html";
    else
        filename = req.url.substring(1);

    console.log(req.url);
    const parsedUrl=url.parse(req.url,true);
    console.log(parsedUrl);



    // if(req.url.startsWith("/save"))
    // {
    //     let body="";
    //     req.on("data",(chunk)=>{
    //         body+=chunk;
    //     })
    //     req.on("end",()=>{
    //         //console.log(body);

    //         res.end();
    //     })

    //     //console.log(req.method);
    //     //res.write("Welcome "+parsedUrl.query.username);
    //     //res.write(JSON.stringify({}));

    //     //res.end();



    // }
    if(parsedUrl.pathname=="/save")
    {
        let users=[];
        fs.readFile("users.json","utf-8",(err,data)=>{
            if(err) users=[];
            else
                users=JSON.parse(data);

            users.push(
                {username:parsedUrl.query.username,
                    password:parsedUrl.query.password}
                )
            fs.writeFile("users.json",JSON.stringify(users),()=>{}
        );
            res.write("New User Created");
            res.end();

        })
    }
    else{
        console.log(filename);
        res.write(readUrl(filename));
        res.end();
    }

}

const server = http.createServer(processRequest);


server.listen(3000);

const readUrl = (filename) => {
    try {
        data = fs.readFileSync("./" + filename, "utf-8");
        return data;

    } catch (err) {
       // console.log(err);
        return "";

    }


}
