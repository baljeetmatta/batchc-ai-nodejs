// // const url="https://rediff.com";
// // console.log(url);
// // //DOM, window
// // const log=(message)=>{
// //     console.log(message);
// // }
// // log("Hello World");
// // //console.log(window);
// // console.log(__dirname);
// // console.log(__filename);

// //console.log(module);
// const url="mongodb://localhost:27017";
// //export default
// //export
// const log=(message)=>{
//     //send an HTTP request
//     console.log(message);
// };
// //module.exports.log=log;
// //module.exports.url=url;MODULE
// //module.exports={log,url};
// module.exports=url;
// module.exports=log;



// //console.log(module);
// const log=require("./evt");
// const EventEmitter=require("events");
// const eventEmitter=new EventEmitter();
// eventEmitter.on("messageLogged",()=>{
//     console.log("Listener called");
// });
// log();

// const evt=require("./evt");
// evt.eventEmitter.on("messageLogged",()=>{
//     console.log("Listener called");
// });
// evt.log();
const logger=require("./evt");
//const logger=new Logger();
logger.on("messageLogged",()=>{
    console.log("Listener called");
});
logger.log();


