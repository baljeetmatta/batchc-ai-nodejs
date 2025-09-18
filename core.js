//os/fs/events/path
//http
// const os=require("os");
// console.log(os.arch());
// const path=require("path");
// console.log(__filename);
// console.log(path.parse(__filename));

const fs=require("fs");
//const files=fs.readdirSync("./");
// fs.readdir("./",(err,files)=>{
//     if(err) console.log("Error",err);
//     else 
//     //console.log("Result",files);  
//     console.log(files.length);

// });
// console.log("Code after");

//console.log(files.length);

// const data= fs.readFileSync("./data.txt","utf8");
// console.log(data);
fs.readFile("./data.txt","utf8",(err,data)=>{
    if(err) console.log("Error",err);
    else 
    console.log(data);
});
console.log("Code after");



fs.writeFile("./data1.txt","Hello World",(err)=>{
});

